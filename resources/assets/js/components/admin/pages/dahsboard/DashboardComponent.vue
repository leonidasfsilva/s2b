<template>
  <div>
      <h1>Dashboard</h1>
      <div class="row">
          <div class="col-lg-6">
              <div class="card">
                  <div class="card-header">
                      Categorias
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Lista contendo todas as categorias cadastradas.</h5>
                      <p class="card-text">Total de categorias cadastradas: <span class="badge badge-secondary">{{totalCategories}}</span></p>
                      <router-link :to="{name: 'admin.categories'}" class="btn btn-primary">Acessar categorias </router-link>
                  </div>
              </div>
          </div>
          <div class="col-lg-6">
              <div class="card">
                  <div class="card-header">
                      Produtos
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Lista contendo todos os produtos cadastrados.</h5>
                      <p class="card-text">Total de produtos cadastrados: <span class="badge badge-secondary">{{totalProducts}}</span></p>
                      <router-link :to="{name: 'admin.products'}" class="btn btn-primary">Acessar produtos </router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        computed: {
            totalCategories() {
                return this.$store.state.categories.items.data.length
            },
            totalProducts() {
                return this.$store.state.products.items.data.length
            },
            me() {
                return this.$store.state.auth.me
            },
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')

                this.$router.push({name: 'home'})
            }
        }
    }
</script>
