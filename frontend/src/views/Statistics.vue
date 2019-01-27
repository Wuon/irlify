<template>
  <div class="container">
      <Graph :data=anger title="Anger" :gradient="['#ffb3ba']"></Graph>
      <Graph :data=joy title="Joy" :gradient="['#ffd84d']"></Graph>
      <Graph :data=fear title="Fear" :gradient="['#78ff8b']"></Graph>
      <Graph :data=sadness title="Sadness" :gradient="['#bae1ff']"></Graph>
      <Graph :data=surprise title="Surprise" :gradient="['#ff9336']"></Graph>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import Graph from '../components/atoms/Graph.vue';

export default {
  components: { Graph },
  data() {
    return {
      anger: [],
      joy: [],
      fear: [],
      sadness: [],
      surprise: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3002/api/entry').then((response) => {
      _.forEach(response.data, (entry) => {
        this.anger.push(entry.emotion.anger);
        this.fear.push(entry.emotion.fear);
        this.joy.push(entry.emotion.joy);
        this.sadness.push(entry.emotion.sadness);
        this.surprise.push(entry.emotion.surprise);
      });
    });
  },
};
</script>

<style scoped>
  .container{
    padding: 100px;
  }
</style>
