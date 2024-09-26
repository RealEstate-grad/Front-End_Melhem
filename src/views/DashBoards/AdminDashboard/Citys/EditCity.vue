<template>
  <div class="edit-city">
    <SideBar>
      <AddEdit type="Edit"></AddEdit>
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/DashBoards/AdminDashboard/SideBar.vue";
import AddEdit from "@/components/DashBoards/AdminDashboard/CitysComponents/AddEdit.vue";
export default {
  name: "edit-city",
  components: {
    SideBar,
    AddEdit,
  },
};
</script>
