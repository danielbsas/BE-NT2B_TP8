import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://6284336ba48bd3c40b6c2bf9.mockapi.io/UsuariosTP7/",
    usuarios: [],
  },
  actions: {
    async postUsuario({ commit }, usuario) {
      await axios
        .post(this.state.url, usuario, { "content-type": "application/json" })
        .then(({ usuario }) => {
          commit("postUsuarioM", usuario);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getUsuarios({ commit }) {
      await axios
        .get(this.state.url)
        .then(({ data }) => {
          commit("getUsuariosM", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteUsuario({ commit }, id) {
      await axios
        .delete(this.state.url + id)
        .then(({ data }) => {
          commit("deleteUsuarioM", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    getUsuariosM(state, data) {
      state.usuarios = data;
      //console.warn(usuarios)
    },
    postUsuarioM(state, data) {
      state.usuarios.push(data);
    },
    deleteUsuarioM(state, data) {
      let index = state.usuarios.findIndex((usuario) => usuario.id == data.id);
      if (index == -1) throw new Error("Usuario no encontrado");
      state.usuarios.splice(index, 1);
    },
  },
});
