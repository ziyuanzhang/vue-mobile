<template>
  <div>
    <p>home</p>
    <mt-button type="primary">primary</mt-button>
    <hr>
    <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>
  </div>
</template>
<script>
export default {
  methods: {
    onSwipeLeft: function() {
      console.log("onSwipeLeft");
    }
  }
};
</script>
