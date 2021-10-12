function addDragging(e) {
  e.target.classList.add('dragging')
}

function removeDragging(e) {
  e.target.classList.remove('dragging')
}

export { addDragging, removeDragging }
