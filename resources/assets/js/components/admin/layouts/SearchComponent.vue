<template>
  <div>
      <form class="form form-inline float-right" @submit.prevent="search">
          <input type="text" v-model="filter" placeholder="Pesquisar:" class="form-control mr-sm-2">

          <button type="submit" class="btn btn-secondary">Buscar <i class="fas fa-search fa-fw"></i></button>
          <div v-if="filter">
              <p>Resultados para: {{ filter }}</p>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  data () {
      return {
          filter: ''
      }
  },
  methods: {
      search () {
          this.$emit('search', this.filter)
      }
  }
}
</script>

