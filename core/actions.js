const onStart = (data) => {
    return {
        type: 'START',
        payload: data 
    } 
}

const result = (data) => {
    return {
        type: 'RESULT',
        payload: data 
    } 
}
const collector = (data) => {
    return {
        type: 'COLLECTOR',
        payload: data 
    } 
}
export {
    onStart,
    result,
    collector
}