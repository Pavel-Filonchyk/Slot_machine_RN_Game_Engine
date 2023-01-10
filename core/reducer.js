const initialState = {
  start: null,
  result: [],
  bonus: []
}


const reducer = (state = initialState, action) => {
  switch (action.type){ 

      case 'START': 
        return {
          ...state,
          start: action.payload
        }
      case 'RESULT': 
        let results = []
        if(action.payload){
          results = [...state.result, action.payload.slice(6)]
        }
        if(state.start){
          return {
            ...state,
            result : []
          }
        } else {
        return {
          ...state,
          result: results
        }
      }
      case 'COLLECTOR':
        let array = action.payload
        let bonus = []
       
        return {
          ...state,
          bonus: bonus
        }
      default: 
      return state;  
  }
}

export default reducer
