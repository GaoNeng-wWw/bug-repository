import Antv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(Antv);
})