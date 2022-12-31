import Vuex, { Store } from "vuex";
import { Task } from "@/types/Task";
import { uuid } from "vue-uuid";

export const store: Store<{
  tasks: Task[];
}> = new Vuex.Store({
  state: {
    tasks: [] as Task[]
  },
  getters: {
    tasks(state: { tasks: Task[] }): Task[] {
      return state.tasks;
    }
  },
  mutations: {
    loadStore(): void {
      if (localStorage.getItem("tasks")) {
        this.replaceState(JSON.parse(localStorage.getItem("tasks") as string));
      }
    },

    setDoneTask(
      state: {
        tasks: Task[];
      },
      task: Task
    ): void {
      const newTasks: Task[] = state.tasks.filter((item: Task) => {
        if (item["id"] === task["id"]) {
          item["status"] = !item["status"];
        }
        return item;
      });

      state.tasks = newTasks;
    },

    addTask(
      state: {
        tasks: Task[];
      },
      task: Task
    ): void {
      if (state.tasks.length) {
        state.tasks = [...state.tasks, task];
      } else {
        state.tasks = [task];
      }
    },

    deleteTask(
      state: {
        tasks: Task[];
      },
      task: Task
    ): void {
      const newTasks: Task[] = state.tasks.filter((item: Task) => {
        return task["id"] !== item["id"];
      });

      state.tasks = newTasks;
    }
  }
});

store.subscribe((mutation, state): void => {
  localStorage.setItem("tasks", JSON.stringify(state));
});
