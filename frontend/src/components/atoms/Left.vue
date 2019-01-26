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
      store.commit('setDate', moment(store.state.date, 'MMM DD, YYYY').add(-1, 'd').format('MMM DD, YYYY'));
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
