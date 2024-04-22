<template>
  <article class="accordion-item">
    <div class="accordion-item__wrapper">
      <header
        class="accordion-item__header"
        @click="$emit('toggle-accordion', currentId)"
      >
        <slot name="accordion-item-header" />
      </header>

      <div v-if="isItemOpen" class="accordion-item__full">
        <slot name="accordion-item-full" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { AccordionItemProps } from "@/types/props";
import { computed } from "vue";

const props = defineProps<AccordionItemProps>();
const emits = defineEmits<{
  (e: "toggle-accordion", currentId: number): void;
}>();

const isItemOpen = computed(() => props.activeId === props.currentId);
</script>

<style lang="scss">
.accordion-item {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__header {
    cursor: pointer;
  }

  &__full {
    padding: 0px 31px;
  }
}
</style>
