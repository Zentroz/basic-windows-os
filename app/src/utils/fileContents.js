const fileContents = {
  "1": "My name is Ashish",
  "2": "My name is sample1"
};

const AddContent = (id, content) => {
  fileContents[id] = content;
}
const GetContent = (id) => {
  return fileContents[id];
}
const EditContent = (id, content) => {
  fileContents[id] = content;
}
const RemoveContent = () => {
  fileContents[id] = "";
}

export { AddContent, GetContent, RemoveContent, EditContent }