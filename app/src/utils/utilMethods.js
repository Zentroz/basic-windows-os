const isInsideElement = (elementClass, mouseX, mouseY) => {
  const element = document.querySelector("." + elementClass);
  const rect = element.getBoundingClientRect();
  return mouseX > rect.x &&
    mouseY > rect.y &&
    mouseX < (rect.x + rect.width) &&
    mouseY < (rect.y + rect.height);
}

export { isInsideElement }