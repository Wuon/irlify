<template>
  <div class="container">
    <Trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0, 1, 2, 0, 7, 5]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </Trend>
    <CardContainer></CardContainer>
    <Textarea>

    </Textarea>
  </div>
</template>

<script>
// @ is an alias to /src

import Textarea from '../components/atoms/Textarea.vue';
import CardContainer from '../components/organisms/CardContainer.vue';

export default {
  name: 'home',
  components: {
    CardContainer,
    Textarea,
  },
};
</script>

<style scoped>
  .container{
    padding-top: 70px;
  }
</style>
