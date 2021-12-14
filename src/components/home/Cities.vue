<template>
    <div class="cities-view">
        <CitiesCount
            :cities="cities"
        />
        <CitiesListing
            :cities="filteredSearch"
        />
    </div>
</template>
<script>
import CitiesCount from '@/components/home/CitiesCount.vue'
import CitiesListing from '@/components/home/CitiesListing.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cities',

  components: {
    CitiesCount,
    CitiesListing
  },

  data () {
    return {
      selectedCity: null
    }
  },

  computed: {
    ...mapGetters('cities', ['cities', 'search']),

    filteredSearch () {
      return this.cities.filter(City =>
        City.name.toLowerCase().includes(this.search) ||
        City.landmarks.toString().toLowerCase().includes(this.search) ||
        City.continent.toLowerCase().includes(this.search))
    }
  },

  created () {
    this.$nextTick(() => {
      this.$eventBus.$emit('show-city-on-map', this.cities[0])
    })
  },

  eventBusCallbacks: {
    'show-city-on-map': 'setSelectedCity'
  },

  methods: {
    setSelectedCity (city) {
      this.selectedCity = city
    }
  }
}
</script>
<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .cities-view {
        height: inherit;
        background-color: $white;
        display: flex;
        flex-direction: column;
        line-height: 1.5 !important;
    }

</style>
