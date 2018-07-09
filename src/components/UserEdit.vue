<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>{{ userAge }}</p>
    <button @click="editAge">Edit age</button>
    <button @click="resetAge()">Edit age Callback Parent</button>
  </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    props: {
      userAge: {
        type: Number
      },
      resetAge: Function
    },
    methods: {
      editAge() {
        this.userAge = 30;
        /* emitting event to take place the change every component */
        // not using event bus
        // this.$emit('ageWasEdited', this.userAge);
        // using event bus locally
        // eventBus.$emit('ageWasEdited', this.userAge);
        // using centralized event bus
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
