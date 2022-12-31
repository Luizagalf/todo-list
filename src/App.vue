<template>
  <main>
    <Form />
    <Tasks />
  </main>
</template>

<script lang="ts">
import Tasks from "@/components/Tasks/Tasks.vue";
import Form from "@/components/Form/Form.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Tasks,
    Form
  },
  beforeCreate() {
    const store = useStore();
    store.commit("loadStore");
  }
};
</script>

<style lang="scss" src="@/assets/main.scss"></style>
