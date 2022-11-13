export const incNumber = (num) => {
    return {
        type : "Increment",
        payload : num
    }
}

export const decNumber = () => {
    return {
        type : "Decrement"
    }
}
export const mulNumber = (num) => {
    return {
        type : "Multiply",
        payload : num
    }
}
export const resetNumber = () => {
    return {
        type : "Reset"
    }
}