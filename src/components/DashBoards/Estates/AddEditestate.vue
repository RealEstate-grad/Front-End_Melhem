<template>
  <div class="add-editestate">
    <SideBar v-if="$store.state.user_type == 'company'">
      <AddEdit :page_type="page_type"></AddEdit>
    </SideBar>
    <SideBarAgent v-else>
      <AddEdit :page_type="page_type"></AddEdit>
    </SideBarAgent>
  </div>
</template>

<script>
import SideBar from "../CompanyDashboard/SideBar.vue";
import SideBarAgent from "../AgentDashboard/SideBar.vue";
import AddEdit from "./AddEdit.vue";
export default {
  name: "add-editestate",
  components: {
    SideBar,
    AddEdit,
    SideBarAgent,
  },
  props: {
    page_type: String,
  },
};
</script>
