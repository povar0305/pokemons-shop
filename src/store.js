
import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

const store = new vuex.Store({
    state: {
        backendUrl: 'https://pokeapi.co/api/v2',
        pokemons: null
    },
    mutations: {
        setPokemonsInfo(state, info) {
            state.pokemons = info.results;
        }
    },
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },
        getPokemons: state => {
            return state.pokemons
        }
    }
})
export default store;

/*import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            pokemons: []
        }
    },
    action: {
        GET_POKEMONS_FROM_API({ commit }) {
            return axios('https://pokeapi.co/api/v2/pokemon', {
                method: "GET"
            }).then((response) => {
                console.log(response.results);
                commit('SET_POKEMONS_TO_VUEX', response.results)
            })
        }
    },
    mutations: {
        SET_POKEMONS_TO_VUEX: (state, pokemons) => {
            state.pokemons = pokemons;
        }
    },
    getters: {
        POKEMONS(state) {
            return state.pokemons
        }
    }
})

// Install the store instance as a plugin
export default store;*/

/*
import Vue from 'vue';
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex);

const store = new vuex.Store({
    state: {
        pokemons: []
    },
    action: {
        GET_POKEMONS_FROM_API({ commit }) {
            return axios('https://pokeapi.co/api/v2/pokemon/', {
                method: "GET"
            })
                .then((pokemons) => {
                    console.log(pokemons)
                    commit('SET_POKEMONS_TO_VUEX', pokemons);
                    return pokemons;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    mutations: {
        SET_POKEMONS_TO_VUEX:(state,pokemons)=>{
            console.log(pokemons)
            state.pokemons=pokemons;
        }
    },
    getters:{
        POKEMONS(state){
            return state.pokemons
        }
    }

})

export default store;
*/

/*import Vue from 'vue';
import axios from 'axios'
// импортируем vuex
import Vuex from 'vuex';

//  говорим vue использовать vuex
Vue.use(Vuex);

//создаем хранилище vuex
let store = new Vuex.Store({
    state: {
        pokemons: []
    },
    mutations: {
        SET_POKEMONS_TO_STATE: (state, pokemons) => {
            state.pokemons = pokemons;
        }
    },
    // асинхронные действия 
    action: {
        GET_POKEMONS_FROM_API({ commit }) {
            return axios('https://pokeapi.co/api/v2/pokemon/', {
                method: "GET"
            })
                .then((pokemons) => {
                    commit('SET_POKEMONS_TO_STATE', pokemons);
                    return pokemons;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        POKEMONS(state) {
            return state.pokemons;
        }
    }
})

// экспортируем хранилище
export default store;*/