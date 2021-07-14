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
                  <v-card-subtitle
                    ><h1>Reserva una hora en 3 pasos</h1></v-card-subtitle
                  >
                  <v-card-text><div class="form"></div></v-card-text>
                  <v-card-actions
                    ><v-btn
                      @click="showComponent('log-in')"
                      block
                      depressed
                      color="success"
                    >
                      Iniciar Sesión
                    </v-btn></v-card-actions
                  ><v-card-actions
                    ><v-btn
                      @click="showComponent('sign-up')"
                      block
                      depressed
                      color="primary"
                    >
                      Registrarse
                    </v-btn></v-card-actions
                  ><v-card-text></v-card-text>
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
  name: "Home",
  inject: ["showComponent"],
  data: () => ({}),
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
