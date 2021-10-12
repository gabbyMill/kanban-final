import createLoader from './createLoader.js'

export default async function saveToApi() {
  try {
    const { tasks } = localStorage
    const loader = createLoader()
    const url = 'https://json-bins.herokuapp.com/bin/614afda34021ac0e6c080cc9'
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tasks: JSON.parse(tasks) }),
    })
    if (!response.ok) {
      alert(response.status)
      throw `HTTP ERROR ${response.status}`
    }
    loader.remove()
  } catch (e) {
    console.log(e)
  }
}
