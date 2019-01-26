<template>
  <div class="container">
    <vue-editor v-model="content" class="font" :editorToolbar="customToolbar"></vue-editor>
    <button @click="save" class="button">     <font-awesome-icon
      icon="save"
      class="save"
    /> </button>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {

  components: {
    VueEditor,
  },
  data() {
    return {
      content: '',
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
  methods: {
    save() {
      console.log(this.content);
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
</style>
