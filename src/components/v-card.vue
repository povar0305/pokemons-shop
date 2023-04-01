<template >
    <div class="v-card">
        <button class="v-card--inner btn" v-if="!this.showCart" @click="clickByCart()">
            К бою готовы
            <span>
                {{ this.$store.state.cart.count }}
            </span>
        </button>
        <div class="v-card-show-more" v-if="this.showCart">
            <div class="v-card-show-more--close " @click="showCart = !showCart">
                <Icon icon="clarity:close-line"></Icon>
            </div>
            <div class="v-card-show-more--main" v-for="pokemon in this.$store.state.cart.pokemons" :key="pokemon.id">
                <div class="v-card-show-more--main_row">
                    <img :src="pokemon.src[0]" alt="">
                    <div class="v-card-show-more--main_row-wrapper">
                        <p>{{ pokemon.name }}</p>
                        <div class="v-card-show-more--main_row-wrapper-list">
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="icon-park-twotone:speed-one"></Icon>
                                {{ pokemon.info[5].base_stat }}
                            </div>
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="mdi:heart-outline" />
                                {{ pokemon.info[0].base_stat }}
                            </div>
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="akar-icons:sword" />
                                {{ pokemon.info[1].base_stat }}
                            </div>
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="akar-icons:double-sword" />
                                {{ pokemon.info[3].base_stat }}
                            </div>
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="tabler:shield" />
                                {{ pokemon.info[2].base_stat }}
                            </div>
                            <div class="v-card-show-more--main_row--inner">
                                <Icon icon="tabler:shield-plus" />
                                {{ pokemon.info[4].base_stat }}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="v-card-show-more-fighting">
                <button @click="selectWinner()" class="btn">
                    В бой
                </button>
            </div>
        </div>

    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
    name: "v-card",
    components: {
        Icon
    },
    data() {
        return {
            title: 'v-card',
            showCart: false,
        }
    },
    computed: {},
    methods: {
        clickByCart() {
            if (this.$store.state.cart.count > 0) {
                this.showCart = !this.showCart
            } else {
                this.$toast.error("Выберите покемона", {
                    position: "top-left",
                    timeout: false,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            }
        }, selectWinner() {
            let indexRand = Math.floor(Math.random() * (this.$store.state.cart.count - 1));
            //TODO вывести победителя
            console.log(this.$store.state.cart.pokemons[indexRand])
        }
    },
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
    width: 425px;
    justify-content: end;
    display: flex;

    & button {
        width: auto;
    }

    &--inner {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        & span {
            margin-left: 5px;
            font-weight: bold;
        }
    }

    &-show-more {
        width: 100%;
        padding: 10px;
        background-color: $white-light;
        backdrop-filter: blur(10px);
        border-radius: 8px;

        &-fighting {
            & button {
                width: 100%;
            }
        }

        &--main {
            &_row {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                & img {
                    max-width: 70px;
                }

                &-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    width: calc(100% - 70px);

                    & p {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-weight: bold;
                    }

                    &-list {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: 100%;
                    }
                }

                & svg {
                    height: 16px;
                    width: 16px;
                    margin-right: 5px;
                    color: $blue-light;
                }

                &--inner {
                    display: flex;
                    align-items: center;
                    width: calc(100% / 6);
                }
            }
        }

        &--close {
            display: flex;
            justify-content: end;

            & svg {
                height: 24px;
                width: 24px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>