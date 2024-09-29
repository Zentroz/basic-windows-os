import './App.css'
import { Provider } from 'react-redux';
import store from './store/store'
import Desktop from './components/Desktop/Desktop'
import Taskbar from './components/Taskbar/Taskbar'

function App() {
  // Disable brower context menu
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  });
  document.body.style.overflow = "hidden";

  return (
    <>
      <Provider store={store}>
        <Desktop />
        <Taskbar />
      </Provider>
    </>
  )
}

export default App
