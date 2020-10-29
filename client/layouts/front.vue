<template>
  <div>
    <Nav />
    <PageHeader />
    <main class="bg-gray-100">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Nav from '~/components/app/Nav.vue'
import PageHeader from '~/components/app/PageHeader.vue'

export default {
  components: {
    Nav,
    PageHeader
  }
}
</script>
