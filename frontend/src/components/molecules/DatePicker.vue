<template>
  <div class="container">
    <Left></Left>
    <div class="date">
      <Title :title=today></Title>
    </div>
    <Right></Right>
  </div>
</template>

<script>
import moment from 'moment';
import Title from '../atoms/Title.vue';
import Right from '../atoms/Right.vue';
import Left from '../atoms/Left.vue';
import store from '@/store';

export default {
  name: 'DatePicker',
  components: { Right, Title, Left },
  computed: {
    today() {
      return moment(store.state.date).format('MMM DD, YYYY');
    },
  },
  beforeCreate() {
    store.commit('setDate', moment().startOf('day').toDate());
  },
};
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .date{
    padding: 0 16px;
  }
</style>
