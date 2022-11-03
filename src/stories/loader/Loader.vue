<template>
  <div class="dui-loader">
    <span class="dui-loader--ball"></span>
    <span class="dui-loader--ball"></span>
    <span class="dui-loader--ball"></span>
  </div>
</template>

<script>
  import './loader.scss';

  export default {
    name: 'DuiLoader',
    props: {
      isLoading: {
        type: Boolean,
      },
    },
  };
</script>
