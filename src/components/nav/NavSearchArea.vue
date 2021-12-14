<template>
    <div class="search_area">
      <input type="text" v-model="search" class="search" placeholder="Search for a city" />
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavSearchArea',

  data () {
    return {
      search: ''
    }
  },

  watch: {
    search (val) {
      this.setSearchVal(val.toLowerCase())
    }
  },

  methods: {
    ...mapMutations('cities', ['setSearchVal'])
  }
}
</script>
<style scoped lang="scss">
  @import '@/styles/constants.scss';

  .search_area {
    height: inherit;

    .search, .search:hover, .search:active, .focus-visible {
      height: 36px;
      width: 100%;
      padding: 10px;
      border: 0.1px solid $nav-search-textbox-border-color;
      border-radius: 32px;
      font-weight: 200;
      color: $black;
      outline-width: 0;
    }

    .search:focus {
      box-shadow: $elevation-low;
      background-color: $search-input-bg;
    }
  }

</style>
