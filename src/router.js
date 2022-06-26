import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Formulario from "./components/Formulario.vue";
import Usuarios from "./components/Usuarios.vue";


export const router = new VueRouter({
    mode:"history",
    routes:[
        { path: '/', redirect: '/Formulario' },
        {path:"/formulario", component: Formulario},
        {path:"/usuarios", component: Usuarios},

        
    ],
});
