<template>
    <div class="v-catalog-item">
        <p>{{ pokemons_data.name }}</p>
        <carousel :perPage='1' class="v-catalog-item-carousel">
            <slide v-for="src in pokemons_data.src" :key="pokemons_data.src[src]">
                <img alt=""  :src="src">
            </slide>

        </carousel>
        <div class="v-catalog-item_info">
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
            <button @click="sendToCart(pokemons_data)" class="btn"
                :class="{ selected: this.$store.state.cart.pokemons.includes(pokemons_data) }">
                <span v-if="!this.$store.state.cart.pokemons.includes(pokemons_data)">Беру</span>
                <span v-else>Удалить </span>
            </button>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import { Carousel, Slide } from 'vue-carousel'
export default {
    name: 'v-catalog-item',
    components: {
        Icon,
        Carousel,
        Slide
    },
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
    methods: {
        sendToCart(pokemon) {
            pokemon.inCart = !pokemon.inCart;
            this.$store.commit('setCart', pokemon);
        }
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
        width: calc(33% - 4rem);
    }

    @media (max-width: 768px) {
        width: calc(50% - 2rem);
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

button.selected {
    background-color: $yellow-light !important;

    &:hover {
        background-color: $yellow !important;
    }

    & span {
        color: $blue !important;
    }
}

.VueCarousel-pagination {
    height: 30px;
}

.VueCarousel-dot-container,
.VueCarousel-dot {
    margin-top: 0 !important;
}

.VueCarousel-dot--active {
    background-color: $blue !important;
}
</style>