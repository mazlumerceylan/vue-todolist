const { createApp } = Vue

  createApp({
    data() {
        return {
          todos: [
            { text: "Fare la spesa", done: false },
            { text: "Fare il bucato", done: true },
            { text: "Pulire la casa", done: false }
          ],
        };
      },
    }
    methods: {
      
      },
      
    computed: {
      
      }
    
  });
  }).mount('#app')