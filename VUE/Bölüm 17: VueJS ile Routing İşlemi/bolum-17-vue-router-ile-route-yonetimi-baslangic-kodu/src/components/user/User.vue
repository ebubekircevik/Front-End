<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>User Id: {{id}}</p>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Direct to Home Component</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id: this.$route.params.id
      }
    },
    methods:{
      navigateToHome(){
        //this.$router.push('/')
        //this.$router.push({path:'/'})
        this.$router.push({ name: 'anasayfa'})
      }
    },
    watch:{
      "$route"(to, from){
        this.id = to.params.id;
      }
    }
  }
</script>
