<template>
  <div ref="cart" :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
       class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
      <button @click="closeCart" class="text-gray-600 focus:outline-none">
        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <hr class="my-3">
    <div v-for="(product,index) in cartItems" class="flex justify-between mt-6">
      <div class="flex">
        <img class="h-20 w-20 object-cover rounded"
             :src="product.image"
             alt="">
        <div class="mx-3">
          <h3 class="text-sm text-gray-600">{{ product.name }}</h3>
          <div class="flex items-center mt-2">
            <button class="text-gray-500 focus:outline-none focus:text-gray-600" @click="changeQuantity('increase',product)">
              <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <span class="text-gray-700 mx-2">{{ product.quantity }}</span>
            <button class="text-gray-500 focus:outline-none focus:text-gray-600" @click="changeQuantity('decrease',product)">
              <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
          <div class="mt-1.5" @click="removeFromCart(product)">
            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                <path
                    d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span class="text-gray-600">${{ product.price * product.quantity }}</span>
    </div>
    <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
      <span>Checkout</span>
      <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
           viewBox="0 0 24 24" stroke="currentColor">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from '../store.js'

const store = useStore()
const props = defineProps({
  cartOpen: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['closeCart'])
const cartItems = computed(() => store.getCart);

const cart = ref(null);

const closeCart = () => emit('closeCart')

const removeFromCart = (product) => store.removeFromCart(product)

const changeQuantity = (type,product) => store.changeQuantity(type,product)

onMounted(() => {
  cart.value.classList.remove('hidden');
})


</script>

<style scoped>

</style>