<template>
    <div>
        <h1>Listagem das Categorias</h1>

        <div class="row mb-1">
            <div class="col-lg-8">
                <router-link :to="{name: 'admin.categories.create'}" class="btn btn-success">Cadastrar <i class="fas fa-plus fa-fw"></i></router-link>


            </div>
            <div class="col-lg-4 float-right">
                <search @searchCategory="search"></search>
            </div>
        </div>

        <table class="table table-dark">
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th width="300">AÇÕES</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(category, index) in categories.data" :key="index">
                <td>{{ category.id }}</td>
                <td v-text="category.name"></td>
                <td>
                    <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-primary btn-sm">
                        Editar <i class="fas fa-pencil-alt fa-fw"></i>
                    </router-link>

                    <a href="#" class="btn btn-danger btn-sm" @click.prevent="confirmDestroy(category)">
                        Remover <i class="fas fa-trash-alt fa-fw"></i>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    import SearchCategoryComponent from './partials/SearchCategoryComponent'

    export default {
        created() {
            this.loadCategories()
        },
        data() {
            return {
                name: '',
            }
        },
        computed: {
            categories() {
                return this.$store.state.categories.items
            }
        },
        methods: {
            loadCategories() {
                this.$store.dispatch('loadCategories', {name: this.name})
            },


            confirmDestroy(category) {
                this.$snotify.error(`Deseja realmente remover a categoria: ${category.name}?`, 'Confirma?', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: true,
                    buttons: [
                        {text: 'Não', action: null},
                        {text: 'Sim', action: () => this.destroy(category)}
                    ]
                })
            },

            destroy(category) {
                this.$store.dispatch('destroyCategory', category.id)
                    .then(() => {
                        this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)

                        this.loadCategories()
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar a categoria', 'Falha')
                    })
            },

            search(filter) {
                this.name = filter

                this.loadCategories()
            }
        },
        components: {
            search: SearchCategoryComponent
        }
    }
</script>

<style scoped>

</style>

