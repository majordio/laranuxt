<template>
  <div class="text-center max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <ProductList />
  </div>
</template>

<script>
import ProductList from '~/components/ecommerce/ProductList'
export default {
  layout: 'front',
  components: {
    ProductList
  }
}
</script>
