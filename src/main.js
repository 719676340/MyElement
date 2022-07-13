import { createApp } from 'vue'
import App from './App.vue'
import MyMessage from './components/MyMessage.js'
import MyPlugin from './plugins/index'

const app = createApp(App)
app.use(MyPlugin)
app.mount('#app')


// https://blog.csdn.net/weixin_43130350/article/details/122097272

// app.config.globalProperties.$popmessage = popmessage
app.config.globalProperties.$mymessage = MyMessage
// createApp(App).mount('#app')
