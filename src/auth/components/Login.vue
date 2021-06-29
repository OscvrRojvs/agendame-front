<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="4"></v-col>
        <v-col cols="12" lg="4">
          <v-card class="pa-2 text-center">
            <v-card-title><h1>Agéndame</h1></v-card-title><br />
            <v-card-subtitle><h1>Iniciar sesión</h1></v-card-subtitle>
            <v-card-text
              ><div>
                <v-text-field
                  label="Ingrese email"
                  hide-details="auto"
                ></v-text-field>
                <v-text-field
                  type="password"
                  label="Ingrese Contraseña"
                ></v-text-field></div
            ></v-card-text>
            <v-card-actions
              ><v-btn color="success" elevation="2" outlined block
                >Iniciar sesión</v-btn
              ></v-card-actions
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data: () => ({}),
};
</script>
