<template>
  <v-container>
    <v-row class="my-2">
      <v-col class="d-flex justify-center"><div class="text-h2">Neues spiel erstellen</div></v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center"><div class="text-h3">Heim</div></v-col>
      <v-col class="d-flex justify-center"><div class="text-h3"></div></v-col>
      <v-col class="d-flex justify-center"><div class="text-h3">Gast</div></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="heim"
          :items="mannschaften"
          label="Heim"
          outlined
          return-object
          item-text="name"
        ></v-select>
      </v-col>
      <v-col class="d-flex justify-center"><div class="text-h3">VS</div></v-col>
      <v-col>
        <v-select
          v-model="gast"
          :items="mannschaften"
          label="Gast"
          outlined
          return-object
          item-text="name"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Stadion" v-model="stadion"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-date-picker color="green darken-4" v-model="datum"></v-date-picker>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-time-picker color="green darken-4" v-model="zeit" format="24hr"></v-time-picker>
      </v-col>
    </v-row>
    <v-btn @click="createSpiel">Create</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      stadion: '',
      zeit: null,
      datum: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      heim: {},
      gast: {},
    };
  },
  props: {
    mannschaften: {
      type: Array,
      default: new Array(),
    },
  },
  methods: {
    async createSpiel() {
      console.log(this.heim.id)
      if (this.heim.id && this.gast.id && this.datum && this.zeit && this.stadion) {
        const daten = {
          stadion: this.stadion,
          datum: this.datum,
          zeit: this.zeit,
          heim: this.heim.id,
          auswaerts: this.gast.id,
        };
        const s=await axios({ method: 'post', url: 'http://localhost:3000/spiele', data: daten });
      console.log(s.data);
      this.$emit("reload");

        this.$router.push({path:"/"})
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
