<template>
  <v-app>
    <v-app-bar
      app
      color="green darken-4"
      dark
    >
      <div class="d-flex align-center">
        <h3>Spielverwaltung</h3>
      </div>
      <v-spacer></v-spacer>

      <v-btn
      class="mr-2"
      to="/"
      outlined
      >
        Home
      </v-btn>
       <v-btn
      class="mr-2"
      to="/spiele"
      outlined
      >
        Spiele verwalten
      </v-btn>
       <v-btn
      class="mr-2"
      to="/newspiel"
      outlined
      >
        Spiel eerstellen
      </v-btn>

      
    </v-app-bar>

    <v-main>
      <router-view :spiele="spiele" :mannschaften="mannschaften" @reload="getSpiele"/>
    </v-main>
  </v-app>
</template>

<script>
import axios from'axios';
export default {
  name: 'App',

  data: () => ({
  spiele:[],
  mannschaften:[]
  }),
  methods: {
    async getSpiele() {
      const data=await axios({url:"http://localhost:3000/spiele", method:"GET"});
      this.spiele=data.data.data;
    },
    async getMannschaften() {
      const data=await axios({url:"http://localhost:3000/mannschaften", method:"GET"});
      this.mannschaften=data.data.data;
    }
  },
  created () {
    this.getSpiele();
    this.getMannschaften();
  },
};
</script>
