import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: '',
    body: '',
    emotion: {},
  },
  mutations: {
    setDate(state, date) {
      state.date = date;
      axios.get(`http://localhost:3002/api/entry?date=${moment(date).format('YYYY-MM-DD')}`)
        .then((response) => {
          state.body = response.data.body;
          state.emotion = response.data.emotion;
        });
    },
    setBody(state, body) {
      state.body = body;
    },
  },
  actions: {

  },
});
