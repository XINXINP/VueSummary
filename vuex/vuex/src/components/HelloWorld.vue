<!--
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-03-07 10:42:35
 * @LastEditTime: 2020-03-25 20:54:06
 -->
<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <!-- 自定义键盘 -->
    <input type="text" @keyup.f1="add" />
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 1
    };
  },
  watch: {
    count: {
      handler: function(val, oldval) {
        console.log("count值改变了", val, oldval);
      }
    }
  },
  methods: {
    add() {
      this.count++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
