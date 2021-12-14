<template>
    <div class="nav_bar">
        <div class="logo-area">
            <router-link to="/">
                <v-img
                    alt="Ottonova logo"
                    class="logo shrink"
                    contain
                    src="@/assets/logo.svg"
                    transition="scale-transition"
                    width="150"
                />
            </router-link>
        </div>
        <NavSearchArea class="search-area" />
        <div class="auth-card-area">
            <h2>Auth area</h2>
        </div>
    </div>
</template>
<script>
import NavSearchArea from '@/components/nav/NavSearchArea.vue'

export default {
  name: 'Navbar',

  components: {
    NavSearchArea
  }
}
</script>
<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .nav_bar {
        height: 56px;
        width: 100vw;
        top: 0;
        bottom: 0;
        position: relative;
        background-color: $white;
        border-bottom: 0.5px solid $nav-border-color;
        display: flex;
        flex-direction: row;
        gap: 10px;
        color: $navbar-text-color !important;
        box-shadow: $elevation-low;

        > div {
            width: 100%;
        }

        @media only screen and (max-width: 740px) {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px;

            >div {
                height: inherit;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .logo-area a {
                margin: auto;
            }

            .auth-card-area {
                display: none;
            }
        }

        @media only screen and (min-width: 741px) {
            // .logo-area, .auth-card-area, .search-area {
            >div {
                height: inherit;
                display: flex;
                justify-content: left;
                align-items: center;
            }

            .logo-area a {
                margin-left: $padding-space;
            }
        }
    }
</style>
