<template>
  <div id="app">
    <Header />

    <b-container>
      <b-row>
        <b-col>
          <b-nav>
            <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>

    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Layout/Header.vue";

export default {
  name: "App",
  components: { Header }
};
</script>
