<template>
  <div class="">
    <div class=" z-10 relative px-2 ">
      <carousel
        class="absolute h-full w-full object-cover product-image"
        :per-page="1"
        :loop="true"
        :pagination-enabled="false"
        :center-mode="true"
      >
        <slide>
          <img class="w-full rounded-lg" :src="property.imageUrl+'1'" :alt="property.imageAlt">
        </slide>
        <slide>
          <img class="w-full rounded-lg" :src="property.imageUrl+'2'" :alt="property.imageAlt">
        </slide>
      </carousel>
      <span class=" ml-4 mt-1 absolute top-0 left-0 inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-md uppercase font-semibold tracking-wide">New</span>
      <!-- <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div> -->
      <span v-if="property.oldPrice > property.priceInCents" class="mr-4 mt-1 absolute top-0 right-0 inline-block bg-red-200 text-red-800 text-xs px-2 rounded-md uppercase font-semibold tracking-wide">{{ calculateDiscount(property.oldPrice, property.priceInCents) }}% OFF</span>
    </div>
    <div class="relative -mt-40 sm:-mt-56 md:-mt-56 lg:-mt-56 xs:-mt-56">
      <div class="mt-2 bg-white p-6 pt-40 sm:pt-56 md:pt-56 lg:pt-56 xs:pt-56 rounded-lg shadow-lg transition duration-500 hover:shadow-2xl">
        <h4 class="mt-1 text-sm lg:text-md leading-tight truncate truncate-2-lines text-gray-800">
          {{ property.title }}
        </h4>
        <div class="mt-1 text-sm lg:text-md">
          <span v-if="property.oldPrice > property.priceInCents" class="text-red-700 line-through text-xs">{{ property.oldPrice | toCurrency }}</span> {{ property.priceInCents | toCurrency }}
          <!-- <span class="text-gray-600 text-sm"> / wk</span> -->
        </div>
        <div class="flex-col leading-3 mt-2 lg:inline-flex lg:flex-row flex items-center">
          <div class="inline-flex items-center">
            <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'" class="h-4 w-4 fill-current">
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
          </div>
          <span class="lg:ml-2 text-gray-600 text-xs">{{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
    <div class="relative -mt-4">
      <button class="text-xs bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    toCurrency (value) {
      if (typeof value !== 'number') {
        return value
      }
      const formatter = new Intl.NumberFormat('fil-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 0
      })
      return formatter.format(value)
    }
  },
  props: ['property'],
  data () {
    return {}
  },
  methods: {
    calculateDiscount (before, after) {
      return (Math.round(100 - ((after / before) * 100)))
    }
  }
}
</script>

<style scoped>
.product-image .VueCarousel-slide{
  padding: 0 5px;
}
.truncate-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
