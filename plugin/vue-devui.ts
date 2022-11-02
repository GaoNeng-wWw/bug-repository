import Devui from 'vue-devui';
import 'vue-devui/style.css';
export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Devui);
})