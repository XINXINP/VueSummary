<template>
  <div class="about">
    <h1 v-for="(item, index) in number" :key="index">{{ item }}</h1>
    <button @click="add">➕this.$set</button>
    <button @click="delet">➖this.$delete</button>
    <div
      v-focus="focus"
      style="width:100px;height:60px;background-color:#0033ff"
    >
      focus
    </div>
    <input v-focus="focus" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: [1, 2, 3, 4]
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    focus() {
      console.log("34344");
    },
    add() {
      this.$set(this.number, 2, 10);
    },
    delet() {
      this.$delete(this.number, 2);
    }
  }
};
</script>
