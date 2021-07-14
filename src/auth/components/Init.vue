<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <component v-bind:is="component"></component>
    </transition>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  name: "Init",
  data: () => ({
    component: Home,
  }),
  provide: function() {
    return {
      showComponent: this.showDynamicComponent,
    };
  },
  methods: {
    showDynamicComponent(value) {
      switch (value) {
        case "log-in":
          this.component = () => import("./Login.vue");
          break;

        case "sign-up":
          this.component = () => import("./SignUp.vue");
          break;

        case "home":
          this.component = Home;
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
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
