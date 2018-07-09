<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail  :name="name"
                          @resetMyName="name = $event"
                          :resetFn="resetName"
                          :userAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit    :userAge="age"
                          @ageWasEdited="age = $event"
                          :resetAge="editMyAge"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function () {
      return {
        name: 'Subhankar',
        age: 27
      };
    },
    methods: {
      changeName() {
        this.name = 'Taak';
      },
      resetName() {
        this.name = 'Subhankar';
      },
      editMyAge() {
        this.age = 30;
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
