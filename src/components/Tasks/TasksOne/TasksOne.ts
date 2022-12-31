import { store } from "@/store";
import { defineComponent } from "vue";
import { Task } from "@/types/Task";
import { uuid } from "vue-uuid";

export default defineComponent({
  name: "TasksOne",
  props: {
    model: {
      required: true,
      default: { id: uuid.v4(), title: "", description: "", status: false }
    }
  },
  methods: {
    deleteTask(task: Task): void {
      store.commit("deleteTask", task);
    },
    setDoneTask(task: Task): void {
      store.commit("setDoneTask", task);
    }
  }
});
