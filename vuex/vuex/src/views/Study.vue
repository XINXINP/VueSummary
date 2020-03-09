<template>
  <div>
    <h2>{{ message | capitalize | native }}</h2>
    <!-- input -->
    <input v-model="message" placeholder="使用过滤器检测" />
    <h3>vm的属性</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
