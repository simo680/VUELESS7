<template>
       <h2>About view</h2>
</template>

<script>
export default {
       mounted() {
              console.log(this.$route.params.title);
              console.log(this.$route.fullPath);
              console.log(this.$route.meta);
              console.log(this.$route.go);
              console.log(this.$route.path);
              console.log(this.$route.name);
       }
}
</script>