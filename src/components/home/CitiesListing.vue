<template>
    <div class="cities-listing">
        <City
            v-for="(city, idx) in cities"
            :key="idx"
            :city="city"
        />
    </div>
</template>
<script>
import City from '@/components/home/City.vue'

export default {
  name: 'CitiesListing',

  props: {
    cities: {
      type: Array,
      reqiured: true
    }
  },

  components: {
    City
  }
}
</script>
<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .cities-listing {
        height: calc(100vh - 134px);
        background-color: $white;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
    }

</style>
