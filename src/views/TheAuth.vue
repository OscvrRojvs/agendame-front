<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <component v-bind:is="component"></component>
    </transition>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Home from "../auth/components/Home.vue";
import Login from "../auth/components/Login.vue";
import SignUp from "../auth/components/SignUp.vue";
export default {
  components: { Login, SignUp, Home },
  name: "TheAuth",
  data: () => ({
    component: Home,
  }),
  computed: {
    ...mapState(["show_index"]),
  },
  watch: {
    show_index: function(val) {
      switch (val) {
        case 1:
          this.component = Home;
          break;
        case 2:
          this.component = Login;
          break;
        case 3:
          this.component = SignUp;
          break;
      }
    },
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>