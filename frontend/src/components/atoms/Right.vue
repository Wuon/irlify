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
      store.commit('setBody', '');
      store.commit('setEmotion', {});
      store.commit('setDate', moment(store.state.date).add(1, 'd').toDate());
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
