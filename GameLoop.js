const GameLoop = (entities, { events, dispatch }) => {
   
    let slot0 = entities.slot0  
    let slot1 = entities.slot1
    let slot2 = entities.slot2
    let slot3 = entities.slot3
    let slot4 = entities.slot4

    const slotFunc = (slot) => {
        slot.position[0] += slot.xspeed      
        slot.position[1] += slot.yspeed
        return slot
    }
    
    slot0.nextMove -= 1  
    if (slot0.nextMove === 0){
        slot0.nextMove = slot0.updateFrequency

        if ( slot0.position[1] >= 0 ) { 
            slot0.position[0] = 0
            slot0.position[1] = -6 
        } else {
            slot0.position[0] += slot0.xspeed       
            slot0.position[1] += slot0.yspeed 
        }
        slot0.nums = Array(9).fill(null).map(item => item = Math.floor(Math.random()*9))
        if(slot0.nums[6] === slot0.nums[7] && slot0.nums[6] === slot0.nums[8]){ slot0.styles = slot0.nums[6]}
    }
    slot1.nextMove -= 1                               
    if (slot1.nextMove === 0){
        slot1.nextMove = slot1.updateFrequency

        if ( slot1.position[1] >= 0 ) {  
            slot1.position[0] = 1 
            slot1.position[1] = -6 
        } else {
            setTimeout(() => slotFunc(slot1), 500)
        }
        slot1.nums = [2, 4, 6, 4, 5, 6, 1, 1, 1]
        //Array(9).fill(null).map(item => item = Math.floor(Math.random()*9))
    }
    slot2.nextMove -= 1                              
    if (slot2.nextMove === 0){
        slot2.nextMove = slot2.updateFrequency

        if ( slot2.position[1] >= 0 ) {   
            slot2.position[0] = 2
            slot2.position[1] = -6
        } else {
            setTimeout(() => slotFunc(slot2), 1000)
        }
        slot2.nums = Array(9).fill(null).map(item => item = Math.floor(Math.random()*9))
    }
 
    slot3.nextMove -= 1                             
    if (slot3.nextMove === 0){
        slot3.nextMove = slot3.updateFrequency

        if ( slot3.position[1] >= 0 ) { 
            slot3.position[0] = 3  
            slot3.position[1] = -6 
        } else {
            setTimeout(() => slotFunc(slot3), 1500) 
        }
        slot3.nums = Array(9).fill(null).map(item => item = Math.floor(Math.random()*9))
    }
    slot4.nextMove -= 1                               
    if (slot4.nextMove === 0){
        slot4.nextMove = slot4.updateFrequency

        if ( slot4.position[1] >= 0 ) { 
            slot4.position[0] = 4  
            slot4.position[1] = -6 
        } else {
            setTimeout(() => slotFunc(slot4), 2000)
        }
        slot4.nums = Array(9).fill(null).map(item => item = Math.floor(Math.random()*9))
    }
    return entities
}

export { GameLoop }
