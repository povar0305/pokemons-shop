<template >
    <div class="v-catalog">
        v-catalog
        <vCatalogItem
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemons_data="pokemon"/>
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';
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
            pokemons: [
                {
                    name: 'ditto',
                    id:1,
                    scr: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png ',
                }, {
                    name: 'ditto2',
                    id:2,
                    scr: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png ',
                }, {
                    name: 'ditto333',
                    id:3,
                    scr: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png ',
                }, {
                    name: 'ditto44',
                    id:4,
                    scr: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png ',
                },
            ]
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log('v-catalog')
    }

}
</script>
<style></style>