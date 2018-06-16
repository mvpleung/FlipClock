import Flipclock from './compiled/flipclock.vue'
import FlipclockModule from './compiled/flipclock.module.min'

const install = (Vue) => {
    Vue.component('flipclock', Flipclock)
}

export default {
    install
}

export {
    Flipclock,
    FlipclockModule
}
