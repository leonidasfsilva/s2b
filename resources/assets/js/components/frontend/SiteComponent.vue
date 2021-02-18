<template>
  <div>
      <header-site></header-site>

      <div class="container container-site">
          <div class="row">
              <router-view></router-view>
          </div>
      </div>

      <footer-site></footer-site>
  </div>
</template>

<script>
import SiteHeaderComponent from './SiteHeaderComponent'
import SiteFooterComponent from './SiteFooterComponent'

export default {
    components: {
        headerSite: SiteHeaderComponent,
        footerSite: SiteFooterComponent,
    }
}
</script>

