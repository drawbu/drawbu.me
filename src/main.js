import {createApp} from 'vue'
import App from './App.vue'
import router from './routes'
import { createStore } from 'vuex';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();


let OnDarkMode = false;
if (cookies.get('on_dark_mode') === 'true') {
    OnDarkMode = true;
    document.querySelector('body').classList.add('dark');
}

const store = createStore({
    state: {
        OnDarkMode,
    },
});

createApp(App).use(store).use(router).mount('body')
