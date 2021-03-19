<template>
  <div>
    <div class="py-3">
      <span class="bg-gray-100 p-3 rounded-sm">
        {{ task.title }}
      </span>
    </div>

    <template v-if="task.edit">
      <input
        type="text"
        name=""
        class="w-40 bg-gray-50 p-1"
        :placeholder="task.title"
        v-model="newTitle"
      />
      <div class="flex justify-center mt-2">
        <button
          class="bg-gray-400 px-5 py-2 rounded-md text-white font-bold"
          @click="updateTask(colId, task.id, newTitle)"
        >
          Save
        </button>
      </div>
    </template>

    <template v-else>
      <div class="pt-3">
        <button
          class="bg-pink-300 px-3 py-2 rounded-md focus:outline-none text-white"
          @click="editTask(colId, task.id)"
        >
          Edit
        </button>
        <button
          class="bg-blue-400 px-3 py-2 rounded-md focus:outline-none text-white"
          @click="deleteTask(colId, task.id)"
        >
          Delete
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { store } from '../store/store.js';
export default {
  props: ['task', 'colId'],
  data() {
    return {
      newTitle: '',
    };
  },
  methods: {
    editTask(colId, taskId) {
      return store.editTask(colId, taskId);
    },
    updateTask(colId, taskId, taskTitle) {
      return store.updateTask(colId, taskId, taskTitle);
    },
    deleteTask(colId, taskId) {
      return store.deleteTask(colId, taskId);
    },
  },
};
</script>

<style>
</style>