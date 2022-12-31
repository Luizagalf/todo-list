import { computed, defineComponent } from "vue";
import TasksOne from "@/components/Tasks/TasksOne/TasksOne.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Tasks",
  components: {
    TasksOne
  },
  setup() {
    const store = useStore();
    return {
      tasks: computed(() => store.state.tasks)
    };
  }
});
