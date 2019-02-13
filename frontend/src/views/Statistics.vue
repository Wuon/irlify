<template>
  <div class="container">
    <!--
      <Graph :data=anger title="Anger" :gradient="['#ffb3ba']"></Graph>
      <Graph :data=joy title="Joy" :gradient="['#ffd84d']"></Graph>
      <Graph :data=fear title="Fear" :gradient="['#3eff70']"></Graph>
      <Graph :data=sadness title="Sadness" :gradient="['#bae1ff']"></Graph>
      <Graph :data=surprise title="Surprise" :gradient="['#ff9336']"></Graph>
      -->
    <LineChart :range=range :anger=anger :joy="joy" :fear="fear" :sadness="sadness" :surprise="surprise"></LineChart>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import Graph from '../components/atoms/Graph.vue';
import LineChart from '../components/atoms/LineChart.vue';
import moment from 'moment';

export default {
  components: {LineChart, Graph },
  data() {
    return {
      anger: [],
      joy: [],
      fear: [],
      sadness: [],
      surprise: [],
      range: [],
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_API}/api/entry`).then((response) => {
      _.forEachRight(response.data, (entry) => {
        this.anger.push(entry.emotion.anger);
        this.fear.push(entry.emotion.fear);
        this.joy.push(entry.emotion.joy);
        this.sadness.push(entry.emotion.sadness);
        this.surprise.push(entry.emotion.surprise);
        this.range.push(moment(entry.createdAt).format('MMM DD, YYYY'));
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
