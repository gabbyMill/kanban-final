export default function createLoader() {
  const container = document.querySelector('#container')
  const loader = document.createElement('img')
  loader.className = 'loader'
  loader.src = '../gifs/loader.gif'
  loader.alt = 'image of loader'
  document.body.insertBefore(loader, container)
  return loader
}
