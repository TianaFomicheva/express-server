

new Vue({
    el: "#app",
    data() {
      return {
        servers:[]
      }
    },
    async mounted(){
        const res = await fetch('/api/servers')
        this.servers = await res.json()
    }
  });

