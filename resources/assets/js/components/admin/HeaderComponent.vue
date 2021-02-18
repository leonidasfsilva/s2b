<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="#">Sell2Brazil</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link :to="{name: 'admin.dashboard'}" class="nav-link">Dashboard</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.categories'}" class="nav-link">Categorias <span class="badge badge-light">{{totalCategories}}</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'admin.products'}" class="nav-link">Produtos <span class="badge badge-light">{{totalProducts}}</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'products.reports'}" class="nav-link">Relatórios</router-link>
                        </li>
                        <li class="nav-item dropdown show" v-if="me.name">
                            <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Olá, {{ me.name }}!
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <router-link :to="{name: 'admin.dashboard'}" class="dropdown-item">Dashboard</router-link>
                                <router-link :to="{name: 'profile'}" class="dropdown-item">Meu Perfil</router-link>
                                <a href="#" class="dropdown-item" @click.prevent="logout">Sair</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
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

