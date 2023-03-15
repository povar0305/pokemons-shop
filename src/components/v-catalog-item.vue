<template>
    <div class="v-catalog-item">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png" alt="">
        <div class="v-catalog-item_info">
            <p>Имя</p>
            <button>Подробнее</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'v-catalog-item',
    data(){
        return{
            title:'v-catalog-item'
        }
    },
    computed:{},
    methods:{},
    watch:{},
    mounted(){
        console.log('v-catalog-item')
    }
}
</script>
<style lang="scss">
    .v-catalog-item{
        padding: 15px;
        display: flex;
        flex-direction: column;
    }
</style>