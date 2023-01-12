const initialState = {
  start: null,
  result: [],
  bonus: 0,
  showBonus: 0,
  bonusArr: [],
  status: false,
  collector: [],
  lines: []
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
      const bonusArr = action.payload?.slice(6)
      if(action.payload){
        results = [...state.result, action.payload.slice(6)]
        if(!state.start){
          if(bonusArr?.[0] === bonusArr?.[1] && bonusArr?.[0] === bonusArr?.[2]){
            return {
              ...state,
              bonus : state.bonus + 10, 
              showBonus: state.showBonus + 10
            }
          }
          return {
            ...state,
            bonusArr: [...state.bonusArr, bonusArr],
            status: true
          }
        }
      }
      if(state.start){
        return {
          ...state,
          result : [],
          bonusArr: [],
          showBonus: 0
        }
      } else {
      return {
        ...state,
        result: results,
      }
    }
    case 'COLLECTOR':
      if(state.status && !state.start){
        const collector = action.payload
        const array0 = collector?.map(item => item[0])
        const line0 = array0.every(elem => elem === array0[0])
        const array1 = collector?.map(item => item?.[1])
        const line1 = array1.every(elem => elem === array1[0])
        const array2 = collector?.map(item => item?.[2])
        const line2 = array2.every(elem => elem === array2[0])
        if(line0){
          return {
            ...state,
            bonus: state.bonus + 50,
            showBonus: state.showBonus + 50,
            lines: [...state.lines, array0[0]]
          }
        }
        if(line1){
          return {
            ...state,
            bonus: state.bonus + 50,
            showBonus: state.showBonus + 50,
            lines: [...state.lines, array1[0]]
          }
        }
        if(line2){
          return {
            ...state,
            bonus: state.bonus + 50,
            showBonus: state.showBonus + 50,
            lines: [...state.lines, array2[0]]
          }
        }
      }
    default: 
    return state  
  }
}

export default reducer
