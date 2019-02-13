<template>
  <div>
    <font-awesome-icon
      icon="caret-left"
      class="caretLeft"
      @click="decrease"
    />
  </div>
</template>

<script>
import store from '@/store';
import moment from 'moment';

export default {
  name: 'Left',
  methods: {
    decrease() {
      store.commit('setBody', '');
      store.commit('setEmotion', {});
      store.commit('setDate', moment(store.state.date).add(-1, 'd').toDate());
    },
  },
};
</script>

<style scoped>
  .caretLeft{
    font-size: 24px;
    transition: all 100ms;
  }
  .caretLeft:hover {
    transform: scale(1.2);
  }
</style>
