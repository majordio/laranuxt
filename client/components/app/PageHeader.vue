<template>
  <div class="bg-white shadow">
    <div class="max-w-7xl mx-auto">
      <div class="bg-gray-400">
        <carousel :per-page="1" :loop="true" :pagination-position="'bottom-overlay'">
          <slide>
            <img class="w-full" src="https://www.bolster-vue.envytheme.com/_nuxt/img/6ab90d7.jpg">
          </slide>
          <slide>
            <img class="w-full" src="https://www.bolster-vue.envytheme.com/_nuxt/img/6ab90d7.jpg">
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
