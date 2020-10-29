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
          priceInCents: 1900,
          oldPrice: 2500,
          reviewCount: 34,
          rating: 2
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=2',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 2',
          priceInCents: 195,
          oldPrice: 250,
          reviewCount: 34,
          rating: 5
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=3',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product with very long name even longer than that one',
          priceInCents: 3200,
          oldPrice: 5000,
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=4',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 4',
          priceInCents: 1400,
          oldPrice: 3500,
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=5',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product with a very long name',
          priceInCents: 6000,
          oldPrice: 6000,
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=6',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Product 123',
          priceInCents: 480,
          oldPrice: 500,
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=7',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample',
          priceInCents: 2000,
          oldPrice: 2000,
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl: 'https://picsum.photos/200/300?v=8',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: 'Sample Product 4',
          priceInCents: 199,
          oldPrice: 199,
          reviewCount: 34,
          rating: 4
        }
      ]
    }
  }
}
</script>
