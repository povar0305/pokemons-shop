<template>
    <div class="v-catalog-item">
        <div class="v-catalog-item-carousel"  v-for="src in pokemons_data.src" :key="pokemons_data.src[src]">
            <img alt="" :src="src">
        </div>
        
        <div class="v-catalog-item_info">
            <p>{{ pokemons_data.name }}</p>

            <div class="row m-0 p-0">
                <div class="v-catalog-item_info--states">
                    <Icon icon="icon-park-twotone:speed-one" />
                   {{ pokemons_data.info[5].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon icon="mdi:heart-outline" />
                    {{ pokemons_data.info[0].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon icon="akar-icons:sword" />
                    {{ pokemons_data.info[1].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon icon="akar-icons:double-sword" />
                    {{ pokemons_data.info[3].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon icon="tabler:shield" />
                    {{ pokemons_data.info[2].base_stat }}
                </div>
                <div class="v-catalog-item_info--states">
                    <Icon icon="tabler:shield-plus" />
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
    background-color: $blue-bgc;
    border-radius: 8px;
    margin: 1rem;
    padding: 1rem;

    @media (max-width: 1440px) {
        width: calc(33% - 4rem) ;
    }

    @media (max-width: 768px) {
        width: calc(50% - 2rem) ;
        margin: 0.5rem;
        padding: 0.5rem;
    }

    & svg {
        height: 24px;
        width: 24px;
        margin-right: 5px;
        color: $blue-light;
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
            font-size: 14px;
            margin-bottom: 5px;

            @media (max-width: 768px) {
                width: 50%;
            }
        }
    }
}
</style>