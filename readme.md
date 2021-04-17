<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

# Projeto Prático de Laravel + Vue JS

> Projeto de teste: CRUD Laravel + Vue JS.

## Clonar o projeto

Primeiro passo, clonar o projeto:
``` bash
# Clonar do seguinte repositório:
git clone https://github.com/leonidasfsilva/s2b.git
```

## Configuração do Backend

``` bash
# Instalar dependências do projeto
composer install

# Configurar variáveis de ambiente
cp .env.example .env
php artisan key:generate

# Criar migrations (tabelas e Seeders)
php artisan migrate --seed

```


## Configuração do Frontend

``` bash
# Atualizar dependências
npm install
```
## Executando o Projeto

``` bash
# Rodar em ambiente local [localhost]
npm run dev
```
