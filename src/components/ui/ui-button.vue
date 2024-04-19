<template>
  <button class="ui-button" :disabled="disabled">
    <div class="ui-button__wrapper">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "ui-button",
};
</script>

<script setup lang="ts">
import { UiButtonProps } from "@/types/props";

const props = withDefaults(defineProps<UiButtonProps>(), {
  disabled: false,
});
</script>

<style lang="scss">
.ui-button {
  background-color: #ffd300;
  border: none;
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
  }

  &:hover {
    background-color: #af940d;
  }

  &:disabled {
    background-color: #494949;
    color: white;
    cursor: default;
  }
}
</style>
