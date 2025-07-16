const logger = (store) => (dispatch) => (action) => {   
    console.log('Acion', action)
    console.log('Before', store.getState())
    const result = dispatch(action)
    console.log('After', store.getState())
    return result
} 

export default logger