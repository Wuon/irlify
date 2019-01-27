<template>
  <div class="container">
    <trend
      :data="anger"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
    <trend
      :data="fear"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
    <trend
      :data="joy"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
    <trend
      :data="sadness"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
    <trend
      :data="surprise"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
</div>
</template>

<script>
import store from '@/store';
import axios from 'axios';
import _ from 'lodash';

export default {
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
  computed: {
    content: {
      get() {
        return store.state.body;
      },
      set(body) {
        store.commit('setBody', body);
      },
    },
  },
  methods: {
    save() {
      axios.post('http://localhost:3002/api/entry', {
        createdAt: moment(store.state.date).format('YYYY-MM-DD'),
        body: this.content,
      });
    },
  },
};
</script>

<style scoped>
  .container{
    padding-top: 70px;
  }
</style>
