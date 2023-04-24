
import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
Vue.use(vuex);

const store = new vuex.Store({
    state: {
        backendUrl: 'https://pokeapi.co/api/v2',//базовый путь до апихи
        pokemons: null, //объект с покемонами
        DEGUB: true, //переменная для дебага
        cart: { //корзина
            pokemons: [], //покемоны, которые в корзине
            count: 0, //кол-во покемонов в корзине
        },
        winner: {},// победитель в бою
        showCart: false // статус показа корзиныы
    },
    mutations: {
        //выводим покемонов + инфу о них
        setPokemons(state, info) { 
            if (state.DEGUB) console.log('setPokemons', info)
            state.pokemons = info.results; // добавляем информацию о покемонах в стор
            for (var pokemon of state.pokemons) { //переббираем покемонов в стор
                pokemon.id = pokemon.url.split('/')[6]; //добавляем айди у покемона
                pokemon.src = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/' + pokemon.id + '.png']; //создаем путь до его основной картинки
                this.commit('setPokemonInfo', pokemon); //вызвваем мутацию, которая добавляет информацию по статистике покемона
            }
        },
        // удаление покемона из корзины
        deletePokemon(state, pokemon) {
            console.log('delete', pokemon);
            state.cart.pokemons = state.cart.pokemons.filter(function (f) { return f !== pokemon }); //фильтруем массив и удаляем из корзины нужного покемона
        },
        //собираем информацию по покемону
        setPokemonInfo(state, pokemonObject) {
            if (state.DEGUB) console.log('setPokemonInfo', pokemonObject);
            axios
                .get(state.backendUrl + '/pokemon/' + pokemonObject.name) //получаем урл запроса
                .then(resposne => {
                    pokemonObject.info = resposne.data.stats; //добавляем статистику
                    pokemonObject.src = []; //обявляем массив, так как картинок у покемона много
                    for (let src in resposne.data.sprites) { // перебираем картинки
                        if (resposne.data.sprites[src] !== null && typeof resposne.data.sprites[src] == 'string') { //если не пустая ссылка и строка
                            pokemonObject.src.push(resposne.data.sprites[src]) //то добавляем в массив картинок 
                        }
                    }
                    pokemonObject.inCart = false; //ставим, что по дефолту не в корзине покемон
                });
        },
        //добавление в корзину
        setCart(state, pokemon) {
            if (state.DEGUB) console.log('setCart', pokemon);
            if (state.cart.pokemons.includes(pokemon)) {//проверка, что покемона уже нет в корзине
                this.commit('deletePokemon',pokemon) //если есть, что удаляем покемона из корзины
            } else {
                state.cart.pokemons.push(pokemon); //пушим в массив корзины
            }
            state.cart.count = state.cart.pokemons.length; //записываем отдельно число
        },
        //очистка корзины
        clearCart(state) {
            if (state.DEGUB) console.log('clearCart', state);
            state.cart.count = 0; //изменяем кол-во покемонов
            state.cart.pokemons = []; //очиаем массив покемонов

        }
    },
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },
        getCartCount: state => {
            return state.cart.count
        },
        getPokemons: state => {
            return state.pokemons
        }
    }
})
export default store;