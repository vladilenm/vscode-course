const getUser = async () => {
  try {
    const res = await fetch('https://vk.com')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser()
