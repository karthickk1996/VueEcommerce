import {defineStore} from 'pinia'

export const useStore = defineStore('cart', {
    state: () => ({
        cart: localStorage.getItem('cart'),
    }),
    getters: {
        getCart: (state) => typeof state.cart === "object" ? state.cart : JSON.parse(state.cart),
    },
    actions: {
        addToCart(item, index) {
            if (!this.cart) {
                let items = [];
                items.push(item)
                this.cart = items;
                localStorage.setItem('cart', JSON.stringify(items));
            } else {
                const cartItems = this.getCart;
                if (!cartItems.includes(item)) {
                    cartItems.push(item);
                    this.cart = cartItems
                    localStorage.setItem('cart', JSON.stringify(cartItems))
                } else {
                    cartItems[index]['quantity']++;
                }
            }
        },
        removeFromCart(item) {
            let index = this.getCart.indexOf(item);
            const cartItems = this.getCart;
            cartItems.splice(index, 1);
            this.cart = cartItems;
            localStorage.setItem('cart', JSON.stringify(cartItems))
        },
        changeQuantity(type, item) {
            let index = this.getCart.indexOf(item);
            let cartItems = this.getCart;
            if (type === 'increase') {
                cartItems[index].quantity++;
            } else {
                cartItems[index].quantity--;
            }
            if (cartItems[index].quantity <= 0) {
                cartItems.splice(index, 1);
            }
            this.cart = cartItems;
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    }
})