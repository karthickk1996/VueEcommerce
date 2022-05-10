<template>
  <div class="container mx-auto px-6">
    <h3 class="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
    <span class="mt-3 text-sm text-gray-500">200+ Products</span>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      <div v-for="(product,index) in products" class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div class="flex items-end justify-end h-56 w-full bg-cover"
             :style="`background-image: url(${product.image})`">
          <button
              @click.prevent="addToCart(product,index)"
              class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
        </div>
        <div class="px-5 py-3">
          <h3 class="text-gray-700 uppercase">{{ product.name }}</h3>
          <span class="text-gray-500 mt-2">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { useStore } from '../store.js'
const store = useStore()

const products = ref([
  {
    name: 'Classic watch',
    price: 123,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'Old watch',
    price: 95,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80'
  },
  {
    name: 'Classic watch',
    price: 125,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'fossil watch',
    price: 180,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'braun watch',
    price: 49,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'rolex watch',
    price: 86,
    quantity:1,
    image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }
])

const addToCart = (item,index) => {
  return store.addToCart(item,index);
}



</script>

<style scoped>

</style>