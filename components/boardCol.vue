<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="m-2 shadow-md rounded-lg p-5" v-for="col in sharedState.Seed" :key="col.id" @click="setCol(col.id)">
        <div class="p-2 text-center">
          <h1 class="text-2xl py-3">
            {{ col.name }}
          </h1>
          <task v-for="task in col.tasks" :key="task.id" :task="task" :colId="col.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store';
import  task  from './task.vue';
export default {
  components: { task },
  
  data() {
    return {
      sharedState: store.state,
    };
  },
  props: ['col'],
  methods: {
    setCol: function (colId) {
      store.setActiveCol(colId);
    }
  },
};
</script>

<style>
</style>