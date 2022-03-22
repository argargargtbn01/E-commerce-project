// Add item to cart
export const addCart =(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// Del item
export const delCart = (product) => {
    return {
        type:"DELITEM",
        payload:product
    }
}