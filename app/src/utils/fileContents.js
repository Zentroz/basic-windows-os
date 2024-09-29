const fileContents = {
  "1": "Project is going good.",
  "2": "This is sample1"
};

const AddContent = (id, content) => {
  if (fileContents[id]) return;
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