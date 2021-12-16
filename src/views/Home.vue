<template>
  <div :class="loading ? 'loading': 'home'">
    <Loading v-if="loading" />
    <template v-else>
      <div class="cities-listing">
        <Cities />
      </div>
      <div class="cities-overview">
        <MapView
        :selected-city="selectedCity" />
      </div>
    </template>
  </div>
</template>

<script>
import MapView from '@/components/home/MapView.vue'
import Cities from '@/components/home/Cities.vue'
import Loading from '@/components/home/Loading.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',

  components: {
    MapView,
    Cities,
    Loading
  },

  computed: {
    ...mapGetters('cities', ['selectedCity', 'loading'])
  },

  created () {
    this.fetchCities()
  },

  methods: {
    ...mapActions('cities', ['fetchCities'])
  }
}
</script>
<style scoped lang="scss">
  @import '@/styles/constants.scss';

  .loading-page {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .home {
    height: calc(100vh - 56px);
    display: grid;
    grid-template-columns: 55% 45%;
    overflow-y: auto;

    > div {
      width: 100%;
      height: inherit;
    }

    @media only screen and (max-width: 740px) {
      display: flex;
      .cities-overview {
        display: none;
      }
    }
  }

</style>
