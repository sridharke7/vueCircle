<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
  </div>
</template>

<script>
export default {
  name: "YesNoComponent",
  props: {
    callMe: {
      type: Function,
    },
  },
  data: function () {
    return {
      msg: "Hello, I am gonna become bigger",
    };
  },
  methods: {
    callYes() {
      this.msg = this.msg.toUpperCase();
      return this.msg;
    },
    callNo() {
      this.msg = this.msg.toLowerCase();
      return this.msg;
    },
  },
};
</script>