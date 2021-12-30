import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: 'AIzaSyBkrfyjH9XRmmN_PEyEDmI1Yw6e3nQCyp4',
    authDomain: 'infoboard-exercise-b680c.firebaseapp.com',
    projectId: 'infoboard-exercise-b680c',
    storageBucket: 'infoboard-exercise-b680c.appspot.com',
    messagingSenderId: '7255798773',
    appId: '1:7255798773:web:073f31ec65c7c52c0526bc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
