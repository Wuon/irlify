<template>
  <div class="container">
    <div v-if="isPast">
      <div class="post">
        <div v-if="isEmpty">
          <font-awesome-icon
            :icon=largest
            class="emoji"
          />
        </div>
        <div v-html="content">
      </div>
      </div>
    </div>
    <div v-else>
      <vue-editor v-model="content" class="font" :editorToolbar="customToolbar"></vue-editor>
      <button @click="save" class="button">     <font-awesome-icon
        icon="save"
        class="save"
      /> </button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import store from '@/store';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        ['blockquote', 'code-block'],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ color: [] }, { background: [] }],
        ['link'],
        ['clean'],
      ],
    };
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
    largest() {
      const emotion = Object.keys(store.state.emotion)
        .reduce((a, b) => (store.state.emotion[a] > store.state.emotion[b] ? a : b));
      if (emotion === 'sadness') {
        return 'sad-cry';
      }
      if (emotion === 'joy') {
        return 'grin-beam';
      }
      if (emotion === 'anger') {
        return 'angry';
      }
      if (emotion === 'fear') {
        return 'grimace';
      }
      return emotion;
    },
    isPast() {
      return moment().isAfter(store.state.date) && !moment().isSame(store.state.date, 'd');
    },
    isEmpty() {
      return store.state.emotion
    }
  },
  methods: {
    save() {
      axios.post(`${process.env.VUE_APP_API}/api/entry`, {
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
  .font{
    height: calc(100vh - 118px);
  }
  .button{
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 15px 50px;
    font-weight: bold;
    text-decoration: none;
    border: none;
    color: #ffffff;
    background-color: #222222;
    font-size: 16px;
  }
  .post{
    padding: 100px 300px;
  }
  .emoji{
    color: #F4C349;
    font-size: 24px;
  }
</style>
