<template>
    <div class="v-main-wrapper">
        <vCatalog></vCatalog>
        <vCard></vCard>
    </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCard from './v-card.vue';
export default {
    name:'vMainWrapper',
    components:{
        vCatalog,
        vCard
        //
    },
    props:{
        //
    },
    data(){
        return{
            title:'vMainWrapper'
        }
    },
    computed:{},
    methods:{},
    watch:{},
    mounted(){
        console.log('v-main-wrapper')
    }

}
</script>

<style lang="scss">
.v-main-wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>