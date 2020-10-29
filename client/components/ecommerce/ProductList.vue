<template>
  <div>
    <h1>Products</h1>
    <div class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 m-6">
      <div
        v-for="productItem in productList"
        :key="productItem.id"
        xs6
        sm4
        md3
      >
        <Product :property="productItem" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/components/ecommerce/Product'

export default {

  components: {
    Product
  },
  data () {
    return {
      productList: [
        {
          imageUrl: 'https://picsum.photos/200/300?v=1',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 1',
          priceInCents: 190000,
          formattedPrice: '₱2,999',
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=2',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 2',
          priceInCents: 190000,
          formattedPrice: '₱3,400',
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=3',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 3',
          priceInCents: 190000,
          formattedPrice: '₱500',
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=4',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 4',
          priceInCents: 190000,
          formattedPrice: '₱1,900',
          reviewCount: 34,
          rating: 4
        }
      ]
    }
  }
}
</script>
