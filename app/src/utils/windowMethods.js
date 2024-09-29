const showNotification = (appName, content) => {
  const popup = document.querySelector(".notification-pop-up");
  const headng = document.querySelector(".notification-popup-heading");
  const contnt = document.querySelector(".notification-popup-content");
  popup.style.display = "block";
  headng.innerHTML = appName;
  contnt.innerHTML = content;
  popup.style.right = "0px";
  setTimeout(() => {
    popup.style.right = "-260px";
  }, 5000);
  setTimeout(() => {
    popup.style.display = "none";
  }, 6000);
}

export {
  showNotification
}