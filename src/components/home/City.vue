<template>
    <div class="city"
        @click="viewCityOnMap"
    >
        <div class="map-wrap">
            <v-img
                alt="Ottonova logo"
                class="logo shrink"
                :src="city.image"
                transition="scale-transition"
                width="100%"
                height="100%"
                position="center"
            />
        </div>
        <div class="city-info">
            <div class="name">
                <h1>{{ city.name }}</h1>
                <p>
                    <span>
                        <v-icon small>mdi-earth</v-icon>
                    </span>
                    {{ city.continent }} |
                    <span>
                        <strong>Native name:</strong>
                        {{ city.name_native }}
                    </span>
                </p>
                <p>
                    <span>
                        <v-icon small left>mdi-account-multiple</v-icon>
                        <strong>Polulation:</strong></span>
                        {{ city.population }}
                </p>
                <p>
                    <span>
                        <v-icon small left>mdi-map</v-icon>
                        <strong>Landmarks:</strong>
                    </span>
                    {{ city.landmarks.join(', ') }}
                </p>
                <p class="landmarks">
                    <span><strong>Founded:</strong></span>
                    {{ city.founded }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'City',

  props: {
    city: {
      type: Object,
      required: true
    }
  },

  methods: {
    viewCityOnMap () {
      this.$eventBus.$emit('show-city-on-map', this.city)
    }
  }
}
</script>
<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .city {
        min-height: 200px;
        background-color: $white;
        display: grid;
        grid-template-columns: 20% 80%;
        border-bottom: 1px solid $nav-border-color;
        margin: 0 15px 0 15px;
        padding-top: $city-padding;
        padding-bottom: $city-padding;
        gap: $padding-space;
        cursor: pointer;

        > div {
            height: calc(100% - 30px);
            width: inherit;
            overflow: hidden;
        }

        .map-wrap {
            border: 1px solid $nav-border-color;
            border-radius: 8px;
            display: block;
        }

        .city-info {
            position: relative;
            .name {
                p {
                    color: $navbar-text-color !important;
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 1.5;
                    margin-bottom: 5px;
                }

                h1 {
                    color: $navbar-text-color !important;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1.5;
                    margin-bottom: 16px;
                }
            }

            .landmarks {
                position: absolute;
                bottom: 0;
                margin-bottom: 0;
            }
        }

        @media only screen and (max-width: 740px) {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 5px 0 5px 0;
            min-height: calc(100% - 30px);
            padding-bottom: $padding-space;

            > div {
                display: flex;
                flex-direction: column;
            }

            >div:last-child {
                padding: 10px;
            }

            .map-wrap {
                border: 1px solid $nav-border-color;
                border-radius: 0;
                display: block;
                height: 400px;
            }

        }

    }

    .city:hover {
        background-color: $search-input-bg;
    }

</style>
