<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="add">🍺</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "1234"
    };
  },
  methods: {
    add() {
      console.log(this.message);
      console.log(this.$parent);
      console.log(this.$scopedSlots);
    }
  }
};
</script>
