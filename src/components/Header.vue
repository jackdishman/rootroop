<template>
  <div
    class="w-full bg-black flex flex-row justify-between items-center px-6"
    style="height: 50px"
  >
    <!-- Left side: Logo -->
    <router-link to="/"> <TextLogo /> </router-link>
    <!-- Right side: links -->
    <div class="flex flex-row">
      <button class="text-white header-link px-4">ROOS</button>
      <button class="text-white header-link px-4">JOEYS</button>
      <router-link to="/test" class="text-white header-link px-4"
        >TEAM</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >STAKE</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >ROADMAP</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >OFFICIAL LINKS</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >FAQ</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >PARTNERS</router-link
      >
      <router-link to="/test" class="text-white header-link px-4"
        >JOBS</router-link
      >
      <router-link to="/test" class="text-white header-link pl-4"
        >SHOP</router-link
      >
    </div>
  </div>
</template>

<script>
import TextLogo from "@/components/TextLogo.vue";
export default {
  name: "HelloWorld",
  components: {
    TextLogo,
    TextLogo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-link {
  font-family: "Poppins";
  font-style: italic;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 15px;
}
</style>
