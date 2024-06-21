const url = 'https://potterhead-api.vercel.app'

export const getChar = async() => {
    const res = await fetch(url + '/api/characters')
    const data = await res.json()
    return data;
}

