<template>
  <v-container>
    <Teams :mannschaften="mannschaften" />
    <v-data-table
      :headers="headers"
      :items="tableGames"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
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
        { text: 'Actions', value: 'actions', sortable: false },
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
    async deleteItem(item) {
      await axios({ method: 'delete', url: `http://localhost:3000/spiele/${item.id}` });
      this.$emit("reload");
    },
    editItem(item){
      this.$router.push({path: `/spiele/${item.id}`})
    }
  },
  computed: {
    tableGames() {
      try {
        let games = this.spiele.map((el) => {
          let b = {
            id: el.id,
            stadion: el.stadion,
            datum: el.datum.substr(0, 10),
            zeit: el.zeit,
            heim: this.mannschaften.find((e) => e.id == el.heim).name,
            auswaerts: this.mannschaften.find((e) => e.id == el.auswaerts).name,
          };
          return b;
        });
        return games;
      } catch (error) {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
