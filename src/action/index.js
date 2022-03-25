

export const Increase = (num ) =>
 {
    return {
        type: 'increase',
        payload: num,
    }
}

export const Decrease = () => {
    return {
        type: 'decrease',
        //payload: num,
        

    }
}
export const Multiply = (num)=> {
    return {
        type: 'multiply',
        payload: num,
        

    }
}