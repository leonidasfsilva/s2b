<template>
    <div>
        <div class="card">
            <div class="card-header h5">
                Editar categoria
            </div>
            <div class="card-body">
                <p class="card-text">Informe o novo nome da categoria:</p>
                <form-cat
                        :category="category"
                        :updating="true">
                </form-cat>
            </div>
        </div>
    </div>
</template>

<script>
    import FormCategoryComponent from './partials/FormCategoryComponent'

    export default {
        props: {
            id: {
                require: true
            }
        },
        created() {
            this.loadCategory()
        },
        data() {
            return {
                category: {}
            }
        },
        methods: {
            loadCategory() {
                this.$store.dispatch('loadCategory', this.id)
                    .then(response => {
                        this.category = response
                        console.log(response)
                    })
                    .catch(error => {
                        this.$snotify.error('Categoria não encontrada', '404')

                        this.$router.push({name: 'admin.categories'})
                    })
            }
        },
        components: {
            formCat: FormCategoryComponent
        }
    }
</script>

<style scoped>

</style>

