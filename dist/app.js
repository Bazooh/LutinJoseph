import { createApp, ref } from 'vue';
const App = {
    setup() {
        const message = ref('Test haha');
        const reverseMessage = () => {
            message.value = message.value.split('').reverse().join('');
        };
        return { message, reverseMessage };
    }
};
createApp(App).mount('#app');
