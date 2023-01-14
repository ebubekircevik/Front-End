<template>
  <div class="container">
    <server_status></server_status>
    <hr>
    <servers></servers>
    <hr>
    <server_footer></server_footer>
  </div>
</template>

<script>
  import server_status from '../components/serverStatus.vue'
  import servers from '../components/servers.vue'
  import server_footer from '../components/serverFooter.vue' 

  export default {
    components: {
      "server_status": server_status,
      "servers": servers,
      "server_footer": server_footer
    }
  }

</script>

<style>

</style>
