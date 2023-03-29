<template>
    <div class="v-catalog-item">
        <img alt="" :src=pokemons_data.src>
        <div class="v-catalog-item_info">
            <p>{{ pokemons_data.name }}</p>

            <div class="row m-0 p-0">
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="icon-park-twotone:speed-one" />
                    {{ pokemons_data.info[0].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="mdi:heart-outline" />
                    {{ pokemons_data.info[0].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="akar-icons:sword" />
                    {{ pokemons_data.info[1].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="akar-icons:double-sword" />
                    {{ pokemons_data.info[3].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="tabler:shield" />
                    {{ pokemons_data.info[2].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon color="red" icon="tabler:shield-plus" />
                    {{ pokemons_data.info[4].base_stat }}
                </div>
            </div>

            <button @click="sendDataToParent">Беру</button>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';

export default {
    name: 'v-catalog-item',
    components: { Icon },
    props: {
        pokemons_data: {
            type: Object,
            default() {
                return {};
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
    display: flex;
    flex-direction: column;
    width: 15%;

    & svg {
        height: 24px;
        width: 24px;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    &_info {
        & .row {
            display: flex;
            flex-wrap: wrap;
        }

        &--states {
            width: 33%;
            align-items: center;
            justify-content: center;
            display: flex;
        }
    }
}</style>