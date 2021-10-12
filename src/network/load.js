import createLoader from './createLoader.js'

export default async function loadFromApi() {
  try {
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    // handle errors:
    if (!response.ok) {
      alert(response.status)
      throw `HTTP Error ${response.status}`
    }
    const data = await response.json()
    if (localStorage.tasks === data.tasks) {
      return loader.remove()
    } else {
      console.log(localStorage)
      localStorage.setItem('tasks', JSON.stringify(data.tasks))
    }
    loader.remove()
    location.reload()
  } catch (e) {
    console.log(e)
  }
}
