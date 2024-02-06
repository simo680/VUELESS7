<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <ul>

    <router-link to="/">
      <li>Home</li>
    </router-link>
    <router-link to="/about">
      <li>About</li>
    </router-link>
  </ul>
  <div>
    <router-view></router-view>
  </div>
</template>


<style scoped></style>
