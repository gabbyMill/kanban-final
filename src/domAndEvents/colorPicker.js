export default function colorPicker() {
  let sectionToPaint
  const colorPalettes = document.querySelectorAll('.color')
  colorPalettes.forEach((cp) => {
    cp.addEventListener('click', (e) => {
      const colorPicker = document.querySelector('#picker')
      colorPicker.style = 'display: flex;'
      sectionToPaint = e.target.closest('section')
      setTimeout(() => {
        colorPicker.style = 'display: none;'
      }, 5000)
    })
  })

  const colorPicker = new iro.ColorPicker('#picker', {
    width: 90,
  })
  colorPicker.on('color:change', (color) => {
    sectionToPaint.style = `background-color: ${color.hexString}`
  })
}
