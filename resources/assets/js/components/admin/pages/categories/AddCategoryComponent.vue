<template>
  <div>
      <div class="card">
          <div class="card-header h5">
              Adicionar nova categoria
          </div>
          <div class="card-body">
              <p class="card-text">Informe o nome da nova categoria:</p>
              <form-cat></form-cat>
          </div>
      </div>
  </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'

export default {
  components: {
      formCat: FormCategoryComponent
  }
}
</script>

<style scoped>

</style>

