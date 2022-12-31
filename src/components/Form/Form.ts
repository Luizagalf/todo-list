import { defineComponent } from "vue";
import { uuid } from "vue-uuid";
import { store } from "@/store";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength, helpers } from "@vuelidate/validators";
import { Task } from "@/types/Task";

export default defineComponent({
  name: "Form",
  data() {
    return {
      form: {
        id: uuid.v4(),
        title: "",
        description: "",
        status: false
      }
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        title: {
          // required
          required: helpers.withMessage("This field cannot be empty", required)
          // minLength: minLength(4)
          // minValue: helpers.withMessage(
          //   "This field cannot be more than 4 characters",
          //   minLength(4)
          // ),
          // maxValue: helpers.withMessage(
          //   "This field cannot be less than 60 characters",
          //   maxLength(604)
          // )
        },
        description: {
          maxLength: maxLength(180)
        }
      }
    };
  },
  methods: {
    onAddTask(): void {
      store.commit("addTask", this.form);
      this.form = {
        id: uuid.v4(),
        title: "",
        description: "",
        status: false
      };
    }
    // setTitle(value: string): void {
    //   this.form.title = value;
    //   this.$v.form.title.$touch();
    // },
    // setDescription(value: string): void {
    //   this.form.description = value;
    //   this.$v.form.description.$touch();
    // }
  }
});
