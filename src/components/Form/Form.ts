import { defineComponent } from "vue";
import { uuid } from "vue-uuid";
import { store } from "@/store";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength, helpers } from "@vuelidate/validators";

export default defineComponent({
  name: "Form",
  data() {
    return {
      v$: useVuelidate(),
      form: {
        id: uuid.v4(),
        title: "",
        description: "",
        status: false
      }
    };
  },
  validations() {
    return {
      form: {
        title: {
          required: helpers.withMessage("This field cannot be empty", required),
          minValue: helpers.withMessage(
            "This field cannot be less than 4 characters",
            minLength(4)
          ),
          maxValue: helpers.withMessage(
            "This field cannot be more than 50 characters",
            maxLength(50)
          )
        },
        description: {
          maxValue: helpers.withMessage(
            "This field cannot be more than 120 characters",
            maxLength(120)
          )
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
      this.v$.$reset();
    }
  }
});
