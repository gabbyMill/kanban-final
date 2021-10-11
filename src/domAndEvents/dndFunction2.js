/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable no-else-return */
export default function getDragAfterElement(ul, yCoordinate) {
  // Y axis of where your mouse is
  const draggableElements = [...ul.querySelectorAll('.task:not(.dragging)')] // get every draggable but the one your'e currently dragging
  return draggableElements.reduce(
    (closestElement, task) => {
      const box = task.getBoundingClientRect() // rectangle of <li>
      const offset = yCoordinate - box.top - box.height / 2 // positive if above the half line of box, negative otherwise
      if (offset < 0 && offset > closestElement.offset) {
        // takes the element with the losest POSITIVE offset
        return { offset: offset, element: task }
      } else {
        return closestElement
      }
    },
    { offset: -Infinity } // start at -Infinty so any elements offset will be above
  ).element // returning the element itself
}
