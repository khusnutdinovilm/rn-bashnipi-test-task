<template>
  <main class="page-container">
    <div class="page-container__wrapper">
      <h1 class="page-container__page-title">
        <slot name="page-title" />
      </h1>

      <div class="page-container__page-delimeter"></div>

      <div
        v-if="pageContentLoading"
        class="page-container__page-content-loading"
      >
        <div class="page-container__page-loader" />
      </div>

      <div
        v-else-if="pageContentEmpty"
        class="page-container__page-content-empty"
      >
        <slot name="page-content-empty" />
      </div>

      <div v-else class="page-container__page-content">
        <slot name="page-content" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "page-container",
};
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    pageContentLoading?: boolean;
    pageContentEmpty?: boolean;
  }>(),
  {
    pageContentLoading: false,
    pageContentEmpty: false,
  }
);
</script>

<style lang="scss">
.page-container {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: 100vh;
    align-items: center;
    padding: 24px 64px 0 60px;
  }

  &__page-title {
    align-self: flex-start;
    font-family: $main-font-family;
    font-size: 20px;
    font-weight: 500;
    line-height: 23.44px;
    text-transform: uppercase;
    color: #696969;
  }

  &__page-delimeter {
    border: 1px solid #727270;
    width: 100vw;
  }

  &__page-content-loading, &__page-content-empty {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  &__page-loader {
    width: 200px;
    height: 200px;
    border: 10px solid #fff;
    border-bottom-color: #ffd300;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  &__page-content {
    align-self: stretch;
    padding: 0 9px;
    flex-grow: 1;
  }
}
</style>
