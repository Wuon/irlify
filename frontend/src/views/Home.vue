<template>
  <div class="container">
    <div v-if="isPast">
      <div class="post">
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
    isPast() {
      console.log(moment().isAfter(store.state.date));
      console.log(!moment().isSame(store.state.date, 'd'));
      return moment().isAfter(store.state.date) && !moment().isSame(store.state.date, 'd');
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
</style>
