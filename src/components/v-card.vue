<template >
    <div class="v-card">
        <button class="v-card--inner">
            К бою готовы
            <span>
                {{ this.$store.state.cart.count }}
            </span>
        </button>

    </div>
</template>
<script>

export default {
    name: "v-card",
    components: {
    },
    data() {
        return {
            title: 'v-card'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log('v-card');

    },
    created() {
        //
    }
}
</script>
<style lang="scss" scoped>
.v-card {
    position: fixed;
    top: 15px;
    right: 15px;

    &--inner {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        & span{
            margin-left: 5px;
            font-weight: bold;
        }
    }

}
</style>