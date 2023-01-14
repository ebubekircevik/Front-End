<template>
  <div>
    <p>Lamba Durumu: {{status}}</p>
    <hr>
    <button @click="openLamb">Lambayı Aç</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: "Kapalı"
      }
    },
    methods: {
      openLamb() {
        this.status = "Açık.."
      }
    }
  }

</script>
<style></style>
