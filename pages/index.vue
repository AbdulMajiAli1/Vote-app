<template>
  <div>
    <board />
    <cards />
    <single />
  </div>
</template>

<script>
import Board from '~/components/board.vue';
import Cards from '~/components/cards.vue';
import Single from '~/components/single.vue';

export default {
  components: { Cards, Single, Board },
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
