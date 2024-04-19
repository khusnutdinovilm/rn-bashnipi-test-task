<template>
  <div class="ui-input">
    <div class="ui-input__wrapper">
      <label :for="id" class="ui-input__label-text">
        {{ labelText }}
      </label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        class="ui-input__input-field"
        @input="$emit('update:modelValue', $event.target?.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ui-input",
};
</script>

<script setup lang="ts">
import { UiInputProps } from "@/types/props";
import { UiInputEmits } from "@/types/emits";

const props = withDefaults(defineProps<UiInputProps>(), {
  type: "text",
});
const emit = defineEmits<UiInputEmits>();
</script>

<style lang="scss">
.ui-input {
  &__wrapper {
    // width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
  }

  &__label-text {
    font-family: $main-font-family;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    color: #696969;
  }

  &__input-field {
    border: 1px solid #d9dbda;
    padding: 9px 18px 10px;
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    color: #696969;
  }
}
</style>
