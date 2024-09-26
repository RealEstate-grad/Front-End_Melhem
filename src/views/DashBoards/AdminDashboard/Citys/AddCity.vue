<template>
  <div class="add-city">
    <SideBar>
      <AddEdit type="Add"></AddEdit>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import AddEdit from "@/components/DashBoards/AdminDashboard/CitysComponents/AddEdit.vue";
export default {
  name: "add-city",
  components: {
    SideBar,
    AddEdit,
  },
};
</script>
