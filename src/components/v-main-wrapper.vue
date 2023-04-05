<template>
    <div class="v-main-wrapper">
        <vCatalog></vCatalog>
        <vCard @winner='showWinner'></vCard>
        <vWinner v-if="Object.keys(winner).length != 0" :winner="winner"></vWinner>
    </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCard from './v-card.vue';
import VWinner from './v-winner.vue';
export default {
    name: 'vMainWrapper',
    components: {
        vCatalog,
        vCard,
        VWinner
    },
    data() {
        return {
            title: 'vMainWrapper',
            winner: {},
        }
    },
    methods: {
        showWinner(winner) {
            this.winner = winner;
        }
    },
    mounted() {
        console.log('v-main-wrapper');
    }
}
</script>
<style lang="scss">
.v-main-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>