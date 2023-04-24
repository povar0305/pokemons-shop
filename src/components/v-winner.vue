<template>
    <div class="v-winner">
        <div class="v-winner--inner">
            <div class="v-winner--inner-name">
                Победил <span> {{ this.$store.state.winner.name }}</span>
            </div>
            <div class="v-winner--inner__close" @click="closeWinner()">
                <Icon icon="clarity:close-line" ></Icon>
            </div>
            <div class="v-winner--inner-pokemon">
                <img :src="this.$store.state.winner.src[0]" alt="">
                <div class="v-winner--inner-pokemon-stats">
                    <div class="v-catalog-item_info--states">
                        <Icon icon="icon-park-twotone:speed-one" />
                        {{ this.$store.state.winner.info[5].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="mdi:heart-outline" />
                        {{ this.$store.state.winner.info[0].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="akar-icons:sword" />
                        {{ this.$store.state.winner.info[1].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="akar-icons:double-sword" />
                        {{ this.$store.state.winner.info[3].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="tabler:shield" />
                        {{ this.$store.state.winner.info[2].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="tabler:shield-plus" />
                        {{ this.$store.state.winner.info[4].base_stat }}
                    </div>
                </div>
            </div>
        </div>
        <vButtonSelectWinner text="Еще раз" />
    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import vButtonSelectWinner from './v-button-select-winner.vue';

export default {
    name: 'v-winner',
    components: {
        Icon, vButtonSelectWinner
    },
    data() {
        return {
            title: 'v-winner'
        }
    },
    computed: {},
    methods: {
        closeWinner(){
            this.$store.state.winner=null;
            this.$store.commit('clearCart');
        }
    },
    watch: {},
    mounted() {
    }
}
</script>
<style lang="scss">
.v-winner {
    position: fixed;
    padding: 10px;
    background-color: $white-light;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    z-index: 1000;
    min-width: 425px;

    &--inner {
        display: flex;
        flex-direction: column;
        position: relative;

        &__close {
            position: absolute;
            right: 0;
            top: 0;

            &:hover {
                color: $blue;
                cursor: pointer;
            }

            & svg {
                color: $blue-light;
                width: 24px;
                height: 24px;
            }
        }

        &-pokemon {
            &-stats {
                display: flex;

                & svg {
                    width: 24px;
                    height: 24px;
                    color: $blue;
                    margin-right: 5px;
                }
            }
        }

        &-name {
            & span {
                font-weight: bold;
                margin-left: 5px;
            }
        }

    }
}
</style>