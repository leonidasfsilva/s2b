<template>
    <div>
        <header-admin></header-admin>
        <main role="main" class="flex-shrink-0">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <footer-admin></footer-admin>
    </div>
</template>

<script>
    import HeaderComponent from "./HeaderComponent"
    import FooterComponent from "./FooterComponent"

    export default {
        components: {
            headerAdmin: HeaderComponent,
            footerAdmin: FooterComponent,
        },
        computed: {
            totalCategories() {
                return this.$store.state.categories.items.data.length
            },
            totalProducts() {
                return this.$store.state.produtcs.items.data.length
            },
            me() {
                return this.$store.state.auth.me
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')

                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style>

</style>

