<template >
    <div class="v-card">
        <div class="v-card--inner">
            <Icon icon='material-symbols:shopping-bag-outline'>
            </Icon>
            <span>
                {{ this.$store.state.cart.count }}
            </span>
        </div>

    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';

export default {
    name: "v-card",
    components: {
        Icon,
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
    background-color: $yellow-light;
    padding: 10px;
    border-radius: 8px;
    position: fixed;
    top: 15px;
    right: 15px;

    & svg {
        height: 24px;
        width: 24px;
        color: white;
    }

    &--inner {
        position: relative;
        & span {
            top: 10px;
            left: 10px;
            position: absolute;
        }
    }

}
</style>