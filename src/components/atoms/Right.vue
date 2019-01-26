<template>
  <div>
    <font-awesome-icon
      icon="caret-right"
      class="caretRight"
      @click="increase"
    />
  </div>
</template>

<script>
import store from '@/store';
import moment from 'moment';

export default {
  name: 'Right',
  methods: {
    increase() {
      store.commit('setDate', moment(store.state.date, 'MMM DD, YYYY').add(1, 'd').format('MMM DD, YYYY'));
    },
  },
};
</script>

<style scoped>
  .caretRight{
    font-size: 24px;
    transition: all 100ms;
  }
  .caretRight:hover {
    transform: scale(1.2);
  }
</style>
