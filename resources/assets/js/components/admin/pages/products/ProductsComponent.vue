<template>
    <div>
        <h1>Listagem de Produtos</h1>

        <div class="row mb-1">
            <div class="col-lg-8">
                <button class="btn btn-success" @click.prevent="create">
                    Cadastrar <i class="fas fa-plus fa-fw"></i>
                </button>

                <vodal
                        :show="showModal"
                        animation="zoom"
                        @hide="hideModal"
                        :width="600"
                        :height="550">
                    <product-form
                            :product="product"
                            :update="update"
                            @success="success">
                    </product-form>
                </vodal>
            </div>
            <div class="col-lg-4">
                <search @search="searchForm">
                </search>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-dark">
                <thead>
                <tr>
                    <th width="50">ID</th>
                    <th width="150">Nome</th>
                    <th width="400">Descrição</th>
                    <th width="250">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products.data" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <a href="#" @click.prevent="edit(product.id)" class="btn btn-primary btn-sm">
                            Editar <i class="fas fa-pencil-alt"></i>
                        </a>
                        <a href="#" class="btn btn-danger btn-sm" @click.prevent="confirmDestroy(product)">
                            Remover <i class="fas fa-trash-alt fa-fw"></i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <paginate
                :pagination="products"
                :offset="6"
                @paginate="loadProducts">
        </paginate>
    </div>
</template>


<script>
    import Vodal from 'vodal'

    import PaginationComponent from '../../../layouts/PaginationComponent'
    import SearchComponent from '../../layouts/SearchComponent'
    import ProductForm from './partials/ProductForm'
    import ButtonDestroyComponent from '../../layouts/ButtonDestroyComponent'
    import {PROJECT_URL} from "../../../../config/configs";

    const project_url = PROJECT_URL

    export default {
        created() {
            this.loadProducts(1)
        },
        data() {
            return {
                baseUrl: PROJECT_URL,
                search: '',
                showModal: false,
                product: {
                    id: '',
                    name: '',
                    description: '',
                    category_id: '',
                },
                update: false,
            }
        },
        computed: {
            products() {
                return this.$store.state.products.items
            },
            params() {
                return {
                    page: this.products.current_page,
                    filter: this.search,
                }
            }
        },
        methods: {
            loadProducts(page) {
                this.$store.dispatch('loadProducts', {...this.params, page})
            },

            create() {
                this.update = false

                this.showModal = true

                this.reset()
            },

            edit(id) {
                this.reset()

                this.$store.dispatch('loadProduct', id)
                    .then(response => {
                        this.product = response

                        this.showModal = true

                        this.update = true
                    })
                    .catch(() => {
                        this.$snotify.error('Erro ao carregar o produto')
                    })
            },

            searchForm(filter) {
                this.search = filter

                this.loadProducts(1)
            },

            hideModal() {
                this.showModal = false
            },

            success() {
                this.hideModal()

                this.loadProducts(1)
            },

            reset() {
                this.product = {
                    id: '',
                    name: '',
                    description: '',
                    category_id: '',
                }
            },

            confirmDestroy(product) {
                this.$snotify.error(`Deseja realmente remover o produto: ${product.name}?`, 'Confirma?', {
                    timeout: 5000,
                    showProgressBar: false,
                    closeOnClick: true,
                    buttons: [
                        {text: 'Não', action: null},
                        {text: 'Sim', action: () => this.destroy(product)}
                    ]
                })
            },

            destroy(id) {
                this.$store.dispatch('destroyProduct', id)
                    .then(() => {
                        this.$snotify.success('Deletado com sucesso!')

                        this.loadProducts(1)
                    })
                    .catch(() => this.$snotify.error('Erro ao deletar'))
            }
        },
        components: {
            paginate: PaginationComponent,
            search: SearchComponent,
            Vodal,
            ProductForm,
            destroy: ButtonDestroyComponent
        }
    }
</script>

<style scoped>
    .btn-left {
        float: left;
        margin: 0 4px;
    }
</style>
