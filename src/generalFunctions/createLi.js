export default function createLiElement(text, classes = []) {
  const element = document.createElement('li')
  element.append(text)
  element.classList = classes.join(' ')
  element.setAttribute('draggable', 'true')
  return element
}
