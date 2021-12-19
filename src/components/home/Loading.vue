<template>
  <div class="loading">
    <v-progress-circular
      :size="70"
      :width="7"
      color="blue darken-2"
      indeterminate
    />
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style scoped lang="scss">
  @import '@/styles/constants.scss';

    .loading {
        height: calc(100vh - 56px);
        width: 100%;
        background-color: $white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }
</style>
