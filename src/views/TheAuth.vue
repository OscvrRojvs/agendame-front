<template>
  <div>
    <login />
    <sign-up />
    <home />
  </div>
</template>
<script>
import Home from '../auth/components/Home.vue';
import Login from "../auth/components/Login.vue";
import SignUp from '../auth/components/SignUp.vue';
export default {
  components: { Login, SignUp, Home },
  nam: "TheLogin",
};
</script>
