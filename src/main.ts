import './app.css'
import App from './App.svelte'
import feather from 'feather-icons'


const app = new App({
  target: document.body,
})

feather.replace();

export default app
