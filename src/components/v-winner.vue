<template>
    <div class="v-winner">
        <div class="v-winner--inner">
            <div class="v-winner--inner-name">
                Победил <span> {{ winner.name }}</span>
            </div>
            <div class="v-winner--inner-pokemon">
                <img :src="winner.src[0]" alt="">
                <div class="v-winner--inner-pokemon-stats">
                    <div class="v-catalog-item_info--states">
                        <Icon icon="icon-park-twotone:speed-one" />
                        {{ winner.info[5].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="mdi:heart-outline" />
                        {{ winner.info[0].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="akar-icons:sword" />
                        {{ winner.info[1].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="akar-icons:double-sword" />
                        {{ winner.info[3].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="tabler:shield" />
                        {{ winner.info[2].base_stat }}
                    </div>
                    <div class="v-catalog-item_info--states">
                        <Icon icon="tabler:shield-plus" />
                        {{ winner.info[4].base_stat }}
                    </div>
                </div>
            </div>
        </div>
        <Icon icon="tabler:shield-plus" />
        <vButtonSelectWinner text="Еще раз" />

    </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import vButtonSelectWinner from './v-button-select-winner.vue';

export default {
    name: 'v-winner',
    components: {
        Icon,vButtonSelectWinner
    },
    props: {
        winner: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            title: 'v-winner'
        }
    },
    computed: {},
    methods: {

    },
    watch: {},
    mounted() {
        console.log(this.winner)
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

        &-name {
            & span {
                font-weight: bold;
                margin-left: 5px;
            }
        }

    }
}
</style>