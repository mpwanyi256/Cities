<template>
    <div class="map-view">
        <GmapMap
            :center="Coordinates"
            :zoom="13"
            style="width: 100%; height: 100%"
        >
            <GmapMarker
                v-if="selectedCity"
                :position="Coordinates"
                :clickable="true"
            />
        </GmapMap>
    </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

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
      Coordinates: {
        lat: 10.3157,
        lng: 123.8854
      },
      zoom: 15,
      map: null
    }
  },

  computed: {
    google: gmapApi,

    mapCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
          bound: []
        }
      }
      return {
        lat: this.map.getCenter().lat().toFixed(3),
        lng: this.map.getCenter().lng().toFixed(3),
        bound: this.map.getBounds()
      }
    }
  },

  watch: {
    selectedCity (city) {
      if (city) {
        this.toggleCity(city)
      }
    }
  },

  eventBusCallbacks: {
    'show-city-on-map': 'toggleCity'
  },

  methods: {
    cityCoordinates (city) {
      return { lat: parseFloat(city.latitude), lng: parseFloat(city.longitude) }
    },

    toggleCity (city) {
      this.Coordinates = this.cityCoordinates(city)
    }
  },

  created () {
    // this.$getLocation()
    //   .then(coordinates => {
    //     this.Coordinates = coordinates
    //   })
    //   .catch(() => {
    //     alert('Sorry we could not access your current location')
    //   })
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
