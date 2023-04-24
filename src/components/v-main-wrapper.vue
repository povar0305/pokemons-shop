<template>
    <div class="v-main-wrapper">
        <vCatalog></vCatalog>
        <vCard @winner='showWinner'></vCard>
        <vWinner v-if="this.$store.state.winner!=null" ></vWinner>
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
            winner: {},
        }
    },
    methods: {
        showWinner(winner) {
            this.winner = winner;
        }
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