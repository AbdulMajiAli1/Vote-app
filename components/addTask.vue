<template>
  <div>
    <h1 class="text-center text-2xl font-bold">Add New {{getTitle}}</h1>
    <div class="flex justify-center">
      <input type="text" name="" class="bg-gray-50" v-model="title" />
    </div>
    <div class="flex justify-center mt-2">
      <button class="bg-green-400 px-5 py-2 rounded-md text-white font-bold" @click="saveTask(title)">Save</button>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js';
export default {
  data() {
  return {
    title: '',
  };
  },
  computed: {
    getTitle() {
      return store.getActiveCol().name;
    }
  }, 
  methods:{
    saveTask(taskTitle) {
      store.addTask(taskTitle);
      this.title = '';
    }
  }
};
</script>

<style>
</style>