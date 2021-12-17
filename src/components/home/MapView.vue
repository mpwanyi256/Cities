<template>
    <div class="map-view">
        <GmapMap
          :center="Coordinates"
          :zoom="12"
          style="width: 100%; height: 100%"
        >
          <GmapMarker
            :position="Coordinates"
            :clickable="true"
          />
        </GmapMap>
    </div>
</template>
<script>

export default {
  name: 'MapView',

  props: {
    cities: {
      type: Array,
      reqiured: true
    },

    selectedCity: {
      type: [Object, null],
      reuired: true
    }
  },

  data () {
    return {
      Coordinates: null,
      zoom: 15
    }
  },

  watch: {
    selectedCity (city) {
      this.toggleCity(city)
    }
  },

  created () {
    this.Coordinates = {
      lat: 0.3476,
      lng: 32.5825
    }
  },

  methods: {
    cityCoordinates (city) {
      return { lat: parseFloat(city.latitude), lng: parseFloat(city.longitude) }
    },

    toggleCity (city) {
      this.Coordinates = this.cityCoordinates(city)
    }
  }

}
</script>
<style scoped lang="scss">
  @import '@/styles/constants.scss';

  .map-view {
      height: 100%;
      width: 100%;
      background-color: $nav-border-color;
  }

</style>
