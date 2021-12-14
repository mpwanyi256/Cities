<template>
  <div class="home">
    <div class="cities-listing">
      <Cities />
    </div>
    <div class="cities-overview">
      <MapView
      :selected-city="selectedCity" />
    </div>
  </div>
</template>

<script>
import MapView from '@/components/home/MapView.vue'
import Cities from '@/components/home/Cities.vue'

export default {
  name: 'Home',

  components: {
    MapView,
    Cities
  },

  data () {
    return {
      selectedCity: null
    }
  }
}
</script>
<style scoped lang="scss">
  @import '@/styles/constants.scss';

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
