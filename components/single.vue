<template>
  <div>
    <div class="flex contianer cardSorted mx-auto p-4">
      <div v-for="card in cardSorted" :key="card.id">
        <div class="bg-green-300 border flex m-2 p-6 rounded-md">
          <img :src="card.img" alt="" />
          <div>
            <span
              class="float-right px-2 rounded-md text-white text-lg"
              :class="[card.value >= 10 ? 'bg-black' : 'bg-indigo-400']"
            >
              {{ card.value }}
            </span>
            <h1 class="text-2xl text-white text-center font-black font-mono">
              {{ card.heading }}
            </h1>
            <p class="p-6 text-base text-indigo-400">
              {{ card.text }}
            </p>
            <button
              class="px-3 py-1 bg-blue-500 float-right rounded-md text-white text-lg"
              @click="forVote(card.id)"
            >
              Give Vote
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
      cards: [
        {
          id: 1,
          heading: 'CEO',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'https://loremflickr.com/320/240/paris,girl/all',
          value: 0,
        },
        {
          id: 2,
          heading: 'Senior Developer',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'https://loremflickr.com/g/320/240/paris',
          value: 0,
        },
      ],
    };
  },
  computed: {
    cardSorted: function () {
      return this.cards.sort((a, b) => {
        return b.value - a.value;
      });
    },
  },
  methods: {
    forVote: function (cardId) {
      const index = this.cards.findIndex((card) => card.id === cardId);
      this.cards[index].value++;
    },
  },
};
</script>

<style>
</style>