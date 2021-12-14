<template>
  <v-container>
    <Teams :mannschaften="mannschaften"/>
      <v-data-table
        :headers="headers"
        :items="tableGames"
        :items-per-page="5"
        class="elevation-1"
        @click:row="toSpiel"
      ></v-data-table>
  </v-container>
</template>

<script>
import Teams from '@/components/Teams.vue';
export default {
  name: 'Home',
  components: {
    Teams,
  },
  data() {
    return {
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
  props: {
    spiele: {
      type: Array,
      default: new Array(),
    },
    mannschaften: {
      type: Array,
      default: new Array(),
    },
  },
  methods: {
    toSpiel(row){
      this.$router.push({path: `/spiel/${row.id}`})
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
};
</script>
