/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";

Vue.component("posts-index", require("./components/Index.vue").default);
Vue.component("pagination", require("laravel-vue-pagination"));

const app = new Vue({
    el: "#app"
});
