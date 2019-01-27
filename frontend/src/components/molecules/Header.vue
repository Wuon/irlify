<template>
  <header>
    <div class="logoContainer">
      <RouterLink to="/">
        <a>
          <img src="https://slackhq.com/wp-content/themes/babka/img/_rebrand/icons/icon_slack.svg" width="100" class="logo" alt="" scale="0">
        </a>
      </RouterLink>
      <RouterLink to="/statistics" class="link">
        <a>
          <span class="text">Statistics</span>
        </a>
      </RouterLink>
    </div>
    <div class="dateContainer">
      <DatePicker></DatePicker>
    </div>
  </header>
</template>

<script>
import DatePicker from './DatePicker.vue';

export default {
  name: 'Header',
  components: { DatePicker },
};
</script>

<style scoped>
  header{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    width: 100%;
  }
  a{
    text-decoration: none;
    color: #222222;
  }
  a:visited {color:#222222;}
  a:hover {color:#222222;}
  a:active {color:#222222;}
  ul{

  }
  li {
    display: inline-block;
  }
  .logoContainer{
    display: flex;
    align-items: center;
    flex: 1;
  }
  .dateContainer{
    display: flex;
    justify-content: right;
    align-items: center;
    flex: 1;
    flex-direction: row-reverse;
  }
  .logo{
    margin-right: 1rem;
    border-right: 1px solid #cccccc;
    padding-right: 1rem;
  }
  .text{
  }
  .link{
    transition: all 100ms;
  }
  .link:hover{
    transform: scale(1.1);
  }
</style>
