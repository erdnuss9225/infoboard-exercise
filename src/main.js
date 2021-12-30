import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAqGm5C3Bad2bFOnareJ9ZIA9JCQ_KPy-k",
  authDomain: "infoboard-exercise.firebaseapp.com",
  projectId: "infoboard-exercise",
  storageBucket: "infoboard-exercise.appspot.com",
  messagingSenderId: "978651010668",
  appId: "1:978651010668:web:84c87b72cbf95bd4c3ea49",
  measurementId: "G-GVJV5S6DLR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
