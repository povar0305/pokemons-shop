<template>
    <div class="v-catalog-item">
        <img alt="" :src=pokemons_data.scr>
        <div class="v-catalog-item_info">
            <p>{{ pokemons_data.name }}</p>
            <p>{{ pokemons_data.id }}</p>
            <button @click="sendDataToParent">Подробнее</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-catalog-item',
    props: {
        pokemons_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            title: 'v-catalog-item'
        }
    },
    computed: {},
    methods: {
        sendDataToParent() {
            this.$emit('sendId', this.pokemons_data);
        }
    },
    watch: {},
    mounted() {
        console.log('v-catalog-item')
    }
}
</script>
<style lang="scss">
.v-catalog-item {
    padding: 15px;
    display: flex;
    flex-direction: column;
}
</style>