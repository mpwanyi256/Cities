<template>
    <div class="cities-count">
        <div class="count-display">
            <p>100+ cities</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CitiesCount',

  props: {
    cities: {
      type: Array,
      reqiured: true
    }
  }
}
</script>
<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .cities-count {
        width: 100%;
        height: 78px;
        background-color: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid $nav-border-color;

        .count-display {
            height: auto;
            width: inherit;
            padding-left: $padding-space;

            p {
                font-size: 14px !important;
                line-height: 24px !important;
                font-weight: normal !important;
                color: $navbar-text-color !important;
                margin-bottom: 0px !important;
            }
        }
    }

</style>
