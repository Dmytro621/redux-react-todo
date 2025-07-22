export const SEND_API = "SEND_API"

export const sendApiSuccess = (data) => ({
    type: SEND_API,
    payload: data
})

export const sendApi = (data) => {
    return async (dispatch) => {
        const fetchSwapi = await fetch(`https://swapi.py4e.com/api/${data}`)
        const response = await fetchSwapi.json()
        dispatch(sendApiSuccess(response))
    }
}

