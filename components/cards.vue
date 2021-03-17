<template>
  <div>
	  <h1 class="text-3xl text-center mt-6 font-black text-">Choose Your Vote</h1>
    <div class="grid lg:grid-cols-3 gap-5 mt-12 grid-cols-1">
      <div class="px-4 shadow border p-6 mx-5" v-for="story in sortedStories" :key="story.id">
        <img :src="story.image" alt="" />
        <h1 class="mt-3 text-lg font-black text-indigo-300">
          {{ story.title }}
        </h1>
        <span class="flex justify-end text-green-400">
          {{ story.postedAt }}
        </span>
        <p class="p-1">
          {{ story.text }}
        </p>
        <span class="w-8 h-8 p-1 float-right text-center text-white text-xl font-bold rounded" v-bind:class="[story.votes >10 ? 'bg-green-400': 'bg-gray-400']">
          {{ story.votes }}
        </span>
        <button
          class="bg-blue-400 px-4 py-2 rounded-md text-white focus:outline-none mt-2"
          @click="getVote(story.id)"
        >
          Up Vote
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          id: 1,
          title: 'Waleed',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          votes: 0,
          postedAt: '2 min ago',
          image: 'https://loremflickr.com/320/240?random=1',
        },
        {
          id: 2,
          title: 'Majid',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          votes: 0,
          postedAt: '4 min ago',
          image: 'https://loremflickr.com/320/240?random=2',
        },
        {
          id: 3,
          title: 'Bhi Maratib',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          votes: 0,
          postedAt: '14 min ago',
          image: 'https://loremflickr.com/320/240?random=3',
        },
      ],
    };
  },

  computed: {
    sortedStories: function () {
      return this.stories.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },

  methods: {
    getVote: function (storyId) {
      const index = this.stories.findIndex((story) => story.id === storyId);
      this.stories[index].votes++;
    },
  },
};
</script>

<style>
</style>