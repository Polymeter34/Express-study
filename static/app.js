const App = {
    data() {
        return {
            servers: [],
            name: ''
        }
    },
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newServer = await (await res).json()
            this.servers.push(newServer)
        },
        async remove(id) {
            await fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        }
    },
    async mounted() {
        const res = fetch('/api/server')
        this.servers = await (await res).json()
    },
}

Vue.createApp(App).mount('#app')