<template>
  <div>
    <v-container class="grey lighten-5">
      <div class="content">
        <v-row no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="12" lg="4">
            <div class="card">
              <v-card class="pa-2 text-center">
                <div class="card-content">
                  <v-card-title><h1>Agéndame</h1></v-card-title><br />
                  <v-card-subtitle><h1>Regístrate</h1></v-card-subtitle>
                  <v-card-text
                    ><div class="form">
                      <v-text-field
                        v-model="form.email"
                        label="Correo electronico"
                        hide-details="auto"
                      ></v-text-field>
                      <v-text-field
                        v-model="form.password"
                        type="password"
                        label="Contraseña"
                      ></v-text-field></div
                  ></v-card-text>
                  <v-card-actions
                    ><v-btn
                      @click="signUp"
                      color="primary"
                      elevation="2"
                      outlined
                      block
                      >Registrarse</v-btn
                    ></v-card-actions
                  ><v-card-text
                    ><div class="text-overline mt-10">
                      Tienes cuenta?
                      <a @click="showComponent('log-in')">Inicia sesión</a>
                    </div></v-card-text
                  >
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  inject: ["showComponent"],
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    signUp() {
      let payload = this.form;
      this.$store.dispatch("actionPostSignUp", payload);
    },
  },
};
</script>

<style scoped>
.content {
  padding-top: 5rem;
}
.card-content {
  padding: 2rem 0 3rem 0;
}
</style>
