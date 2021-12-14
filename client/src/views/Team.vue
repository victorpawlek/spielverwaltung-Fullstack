<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <div class="text-h1">{{ team.name }}</div>
    </v-row>
    <v-row class="d-flex justify-center">
      <div class="text-h4">{{ team.liga }}</div>
    </v-row>
    <v-row class="d-flex">
      <div class="text-subtitle-1">Nächsen spiele von {{team.name }} :</div>
    </v-row>
    <v-row>
      <v-col cols=12>
          <v-data-table
            :headers="headers"
            :items="tableGames"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
      </v-col>
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
    spiele: {
      type: Array,
      default: new Array(),
    },
    mannschaften: {
      type: Array,
      default: new Array(),
    },
  },
  data() {
    return {
      team: {},
      headers: [
        {
          text: 'Datum',
          value: 'datum',
        },
        { text: 'Zeit', value: 'zeit' },
        { text: 'Heimmannschaft', value: 'heim' },
        { text: 'Auswärtsmannschaft', value: 'auswaerts' },
        { text: 'Stadion', value: 'stadion' },
      ],
    };
  },
  methods: {
    async getTeam() {
      const t = await axios({
        method: 'get',
        url: `http://localhost:3000/mannschaften/${this.id}`,
      });
      this.team = t.data.data[0];
    },
  },
  computed: {
      tableGames() {
      try {
        let games = this.spiele.map((el) => {
          let b = {
            id: el.id,
            stadion: el.stadion,
            datum: el.datum.substr(0,10),
            zeit: el.zeit,
            heim: this.mannschaften.find((e) => e.id == el.heim).name,
            auswaerts: this.mannschaften.find((e) => e.id == el.auswaerts).name,
          };
          return b;
        });
        return games;
      } catch (error) {return []}
    },
  },
  created() {
    this.getTeam();
    this.spiele=this.spiele.filter((el) => el.heim==this.id || el.auswaerts==this.id);
  },
};
</script>

<style lang="scss" scoped></style>
