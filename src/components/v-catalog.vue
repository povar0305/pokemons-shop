<template >
    <div class="v-catalog">
        v-catalog
        <vCatalogItem></vCatalogItem>
    </div>
</template>
<script>
import vCatalogItem from './v-catalog-item.vue';
export default {
    name:'v-catalog',
    components:{
        vCatalogItem
    },
    props:{
        //
    },
    data(){
        return{
            title:'v-catalog'
        }
    },
    computed:{},
    methods:{},
    watch:{},
    mounted(){
        console.log('v-catalog')
    }
    
}
</script>
<style>
    
</style>