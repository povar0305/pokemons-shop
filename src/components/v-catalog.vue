<template >
    <div class="v-catalog">
        v-catalog
        <vCatalogItem v-for="pokemon in this.$store.state.pokemons" :key="pokemon.id" :pokemons_data="pokemon" @sendId="showChild" />
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';
import axios from 'axios';
export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
    props: {
        //
    },
    data() {
        return {
            title: 'v-catalog',
        }
    },
    computed: {},
    methods: {
        showChild(data) {
            console.log(data)
        },
        async loadListPokemons() {
            axios
                .get(this.$store.state.backendUrl + '/pokemon/')
                .then(resposne => {
                    console.log(resposne.data)
                    this.$store.commit('setPokemonsInfo', resposne.data);
                    console.log(this.$store.getters.getPokemons)
                })
                
                // .then(resposne => (
                //     this.$store.commit('SET_NAME', your_name)));
        }
    },
    watch: {},
    mounted() {
        console.log('v-catalog');
    },
    created() {
        this.loadListPokemons()
    }

}
</script>
<style lang="scss"></style>