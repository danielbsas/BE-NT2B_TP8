<template>
  <section class="src-components-formulario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere entre {{ nombreMinLength }} y
              {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>

        <!-- Campo Edad -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            v-model.trim="formData.edad"
            autocomplete="off"
            required
            no-espacios
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensajes de validacion -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              El valor debe ser numérico.
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad debe ser mayor a {{ edadMin }} y menor a
              {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <!-- Campo Mail -->
        <validate tag="div">
          <!-- elemento de entrada -->
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            v-model.trim="formData.email"
            autocomplete="off"
            required
          />

          <!-- Mensajes de validacion -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota no puede ser menor a 0
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota no puede ser mayor a 10
            </div>
          </field-messages>
        </validate>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>
    </div>
  </section>
</template>
z
<script>
export default {
  name: "src-components-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },

    enviar() {
      console.log({ ...this.formData });
      const usuarioNuevo = {
        Nombre: this.formData.nombre,
        Edad: this.formData.edad,
        Email: this.formData.email,
      };
      this.$store.dispatch('postUsuario', usuarioNuevo)
      this.formData = this.getInicialData();
      this.formState._reset();
    },
    
  },
  computed: {
    
  },
};
</script>

<style scoped lang="css"></style>
