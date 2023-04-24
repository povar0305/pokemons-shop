<template>
    <button @click="selectWinner()" class="btn">
        {{text}}
    </button>
</template>
<script>
export default {
    name: 'v-winner',
    props: {
        text: {
            type: String,
            default() {
                return '';
            }
        }
    },
    methods: {
        selectWinner() {
            console.log(1);
            let indexRand = Math.floor(Math.random() * (this.$store.state.cart.count - 1));
            let winner = this.$store.state.cart.pokemons[indexRand];
            this.$store.state.winner=winner;
            this.$store.state.showCart=false;
        }
    }
}
</script>