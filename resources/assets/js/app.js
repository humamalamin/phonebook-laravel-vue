

require('./bootstrap');

window.Vue = require('vue');

let Myheader = require('./components/MyHeader.vue');
let Myfooter = require('./components/Myfooter.vue');

const app = new Vue({
    el: '#app',
    components:{Myheader,Myfooter}
});
