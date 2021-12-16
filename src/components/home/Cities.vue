<template>
  <div class="cities-view">
      <CitiesCount
        :cities-count="citiesCount"
      />
      <CitiesListing
        :cities="filteredSearch"
      />
  </div>
</template>
<script>
import CitiesCount from '@/components/home/CitiesCount.vue'
import CitiesListing from '@/components/home/CitiesListing.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cities',

  components: {
    CitiesCount,
    CitiesListing
  },

  computed: {
    ...mapGetters('cities', ['cities', 'search', 'citiesCount']),

    filteredSearch () {
      return this.cities.filter(City =>
        City.name.toLowerCase().includes(this.search) ||
        City.landmarks.toString().toLowerCase().includes(this.search) ||
        City.continent.toLowerCase().includes(this.search))
    }
  },

  created () {
    this.$nextTick(() => {
      if (this.cities.length) this.setSelectedCity(this.cities[0])
    })
  },

  methods: {
    ...mapMutations('cities', ['setCity']),

    setSelectedCity (city) {
      this.setCity(city)
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
