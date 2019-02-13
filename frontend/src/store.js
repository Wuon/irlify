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
      axios.get(`${process.env.VUE_APP_API}/api/entry?start=${moment(date).format()}&end=${moment(date).format()}`)
        .then((response) => {
          state.body = response.data.body || '<h1>Empty entry :(</h1>';
          state.emotion = response.data.emotion || null;
        });
    },
    setBody(state, body) {
      state.body = body;
    },
  },
  actions: {

  },
});
