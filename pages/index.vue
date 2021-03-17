<template>
  <cards />
</template>

<script>
import Cards from '~/components/cards.vue';


export default {
  components: { Cards },
  };
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
