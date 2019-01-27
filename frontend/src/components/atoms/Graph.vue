<template>
  <div
    class="item-container"
  >
    <h1>
      {{ title }}
    </h1>
    <trend
      :data=data
      :gradient=gradient
      auto-draw
      smooth
      max=1
      min=0>
    </trend>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  props: {
    title: String,
    data: Array,
    gradient: Array,
  },
};
</script>

<style scoped>
  .item-container{
    display: inline-block;
    outline: 2px solid;
    padding: 28px 56px 56px 56px;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    margin: 0.5rem;
    width: calc(50% - 56px - 56px - 1rem);
  }
</style>
