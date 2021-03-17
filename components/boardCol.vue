<template>
  <div>
	  <div class="grid grid-cols-3">
        <div class="m-2 shadow-md rounded-lg p-5" v-for="todo in todos" :key="todo.id">
          <div class="p-2 text-center">
            <h1 class="text-2xl py-3">
              {{ todo.head }}
            </h1>
            <div class="py-3">
              <span class="bg-gray-100 p-3 rounded-sm">
                {{ todo.message }}
              </span>
            </div>
            <input type="text" name="" class="w-40 bg-gray-50 p-1" />
            <div class="pt-3">
              <button class="bg-pink-300 px-3 py-2 rounded-md focus:outline-none text-white">
                Edit
              </button>
              <button class="bg-blue-400 px-3 py-2 rounded-md focus:outline-none text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      todos: [
        {
          id: 1,
          head: 'To Do',
          message: 'Vue Js Practice',
        },
        {
          id: 2,
          head: 'In Progress',
          message: 'Vue Js Practice',
        },
        {
          id: 1,
          head: 'Done',
          message: 'Vue Js Practice',
        },
      ],
    };
  },
}
</script>

<style>

</style>