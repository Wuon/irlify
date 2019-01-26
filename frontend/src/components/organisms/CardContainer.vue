<template>
  <div class="container">
    <Cards></Cards>
  </div>
</template>

<script>
import Cards from '../molecules/Cards.vue';

export default {
  name: 'CardContainer',
  components: { Cards },
};
</script>

<style scoped>
  .container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
  }
</style>
