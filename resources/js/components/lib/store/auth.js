import axios from "axios";
export default {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, cred) {
            state.user = cred;
        }
    },
    actions: {
        LoginAction({ commit }, credentials) {
            return commit('SET_USER', credentials);
        },
        setLoginNull({ commit }) {
            return commit('SET_USER', null)
        },
        attempt({ commit }) {

            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.get('/api/user').then(response => {
                    return commit('SET_USER', response.data);
                }).catch(response => {
                    return commit('SET_USER', null)
                });
            });

        }
    },
    getters: {
        authenticated(state) {
            if (state.user == null) {
                return false;
            } else {
                return true;
            }
        },
        user(state) {
            return state.user;
        }
    },
};