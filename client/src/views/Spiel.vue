<template>
  <v-container class="my-5" style="border: solid 1px white">
    <v-row class="d-flex justify-center mt-5">
      <div class="text-h1">{{ spiel.stadion }}</div>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row class="d-flex justify-center">
      <v-col cols="5" class="d-flex justify-center"><div class="text-h3">Heim</div></v-col>
      <v-col cols="2" class="d-flex justify-center"></v-col>
      <v-col cols="5" class="d-flex justify-center"> <div class="text-h3">Gast</div></v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="5" class="d-flex justify-center"
        ><div class="text-h3">{{ heim }}</div></v-col
      >
      <v-col cols="2" class="d-flex justify-center"><div class="text-h3">vs.</div></v-col>
      <v-col cols="5" class="d-flex justify-center"
        ><div class="text-h3">{{ gast }}</div></v-col
      >
    </v-row>
    <v-divider class="my-5"></v-divider>

    <v-row class="d-flex justify-center">
      <div class="text-h4">{{ spiel.datum.substr(0, 10) }}</div>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row class="d-flex justify-center">
      <div class="text-h4">{{ spiel.zeit }}</div>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      spiel: {},
      heim: '',
      gast: '',
    };
  },
  methods: {
    async getSpiel() {
      const s = await axios({
        method: 'get',
        url: `http://localhost:3000/spiele/${this.id}`,
      });
      this.spiel = s.data.data[0];
      const h = await axios({
        method: 'get',
        url: `http://localhost:3000/mannschaften/${this.spiel.heim}`,
      });
      const a = await axios({
        method: 'get',
        url: `http://localhost:3000/mannschaften/${this.spiel.auswaerts}`,
      });
      this.heim = h.data.data[0].name;
      this.gast = a.data.data[0].name;
    },
  },
  created() {
    this.getSpiel();
  },
};
</script>

<style lang="scss" scoped></style>
