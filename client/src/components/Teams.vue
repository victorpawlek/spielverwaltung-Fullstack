<template>
    <v-container fluid class="d-flex flex-wrap justify-space-around">
        <v-card v-for="team in mannschaften" :key="team.id" width="300" class="ma-3" @click="zuTeam(team.id)">
            <v-card-title>
      {{team.name}}
    </v-card-title>
     <v-card-subtitle>
      Liga: {{team.liga}}
    </v-card-subtitle>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: {
            mannschaften: {
                type: Array,
                default: new Array(),
            },
        },
        methods: {
            zuTeam(id) {
                this.$router.push({ path: `/team/${id}` })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>