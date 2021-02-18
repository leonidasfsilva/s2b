<template>
    <div>
        <form class="form" @submit.prevent="onSubmit">
            <label class="font-weight-bold">Nome:</label>
            <div :class="['form-group', {'has-error': errors.name}]">
                <div v-if="errors.name">{{ errors.name[0] }}</div>
                <input type="text" v-model="product.name" class="form-control" placeholder="Nome do produto">
            </div>
            <label class="font-weight-bold">Descrição:</label>
            <div :class="['form-group', {'has-error': errors.description}]">
                <div v-if="errors.description">{{ errors.description[0] }}</div>
                <textarea v-model="product.description" cols="30" rows="10" class="form-control" placeholder="Descrição do produto"></textarea>
            </div>

            <label class="font-weight-bold">Categoria:</label>
            <div :class="['form-group', {'has-error': errors.category_id}]">
                <div v-if="errors.category_id">{{ errors.category_id[0] }}</div>
                <select class="form-control" v-model="product.category_id">
                    <option value="">Selecione a Categoria</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            update: {
                require: false,
                type: Boolean,
                default: false
            },
            product: {
                require: false,
                type: Object
            }
        },
        data() {
            return {
                errors: {},
                upload: null,
                imagePreview: null,
            }
        },
        computed: {
            categories() {
                return this.$store.state.categories.items.data
            }
        },
        methods: {
            onSubmit() {
                let action = this.update ? 'updateProduct' : 'storeProduct'

                const formData = new FormData()
                if (this.upload != null) {
                    formData.append('image', this.upload)
                    console.log('IMAGE ADD!')
                }

                formData.append('id', this.product.id)
                formData.append('name', this.product.name)
                formData.append('description', this.product.description)
                formData.append('category_id', this.product.category_id)

                this.$store.dispatch(action, formData)
                    .then(() => {
                        this.$snotify.success('Sucesso ao enviar!')

                        this.reset()

                        this.$emit('success')
                    })
                    .catch(errors => {
                        this.$snotify.error('Algo Errado', 'Erro')

                        this.errors = errors.data.errors
                    })
            },

            reset() {
                this.errors = {}

                this.imagePreview = null
                this.upload = null
            },

            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files
                if (!files.length) {
                    return

                }

                this.upload = files[0]

                this.previewImage(files[0])
            },

            previewImage(file) {
                let reader = new FileReader()
                reader.onload = (e) => {
                    this.imagePreview = e.target.result
                }
                reader.readAsDataURL(file)
            },

            removePreviewImage() {
                this.imagePreview = null
                this.upload = null
            }
        }
    }
</script>

<style scoped>
    .image-preview {
        max-width: 60px;
    }
</style>
