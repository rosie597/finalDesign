<template>
  <div class="container">
    home
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  mounted() {
    this.$axios.get('/backend/user/info').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    this.$axios({
      method: 'post',
      url: '/backend/user/register',
      data: this.qs.stringify({
        user_name: 'rosie',
        password: 123,
      }),
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>

<style scoped>
</style>
