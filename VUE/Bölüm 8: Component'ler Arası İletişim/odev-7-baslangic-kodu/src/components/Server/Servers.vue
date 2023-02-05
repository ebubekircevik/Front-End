<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server></app-server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue'

  export default{
    components:{
      appServer: Server
    }
  }
</script>