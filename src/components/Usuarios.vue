<template>
  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Lista Usuarios en Mockapi.IO</h2>
      <hr>
      <hr>
      <br>
      <div v-if="this.$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(usuario, index) in this.$store.state.usuarios" :key="index">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.Nombre }}</td>
              <td>{{ usuario.Edad }}</td>
              <td>{{ usuario.Email }}</td>
              <td><button class="btn btn-danger" @click="deleteUsuario(usuario.id)">BORRAR</button></td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{this.$store.state.usuarios.length}} usuarios.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron usuarios</h4>
     </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
      this.$store.dispatch("getUsuarios");
      },
    data () {
      return {
      }
    },
    methods: {
      deleteUsuario(id) {
        this.$store.dispatch("deleteUsuario", id);
    },
    },
    computed: {
    }
}

</script>

<style scoped lang="css">

</style>
