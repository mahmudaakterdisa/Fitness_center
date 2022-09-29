// use local storage to manage cart data
const addToDb = id => {
    // let shoppingCart = {};
    const shopping = getDetails();
    // add quantity
    const quantity = shopping[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shopping[id] = newQuantity;
    }
    else {
        shopping[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shopping));
}
//find your cart first
const getDetails = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getDetails
}