const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Fare la spesa", done: false },
        { text: "Fare il bucato", done: true },
        { text: "Pulire la casa", done: false }
      ],
      newTodoText: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== "") {
        this.todos.push({ text: this.newTodoText, done: false });
        this.newTodoText = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(todo => {
        return !todo.done;
      });
    }
  }

}).mount('#app');
