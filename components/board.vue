<template>
  <div>
    <div class="min-h-screen">
      <div class="p-2">
        <h1 class="text-center text-4xl font-bold">Todo Application</h1>
        <hr class="my-4" />
      </div>
      <boardCol />
      <hr class="my-4" />
      <add-task />
    </div>
  </div>
</template>

<script>
import AddTask from './addTask.vue';
import boardCol from './boardCol.vue';
export default {
  components: { boardCol, AddTask },
};
</script>

<style>
</style>