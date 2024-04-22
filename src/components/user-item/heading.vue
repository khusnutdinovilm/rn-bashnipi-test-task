<template>
  <div class="user-item-heading grid">
    <div class="user-item-heading__wrapper grid__wrapper">
      <div class="user-item-heading__heading-text">
        <select-arrow-icon />
      </div>
      <div class="user-item-heading__heading-text">
        {{ user.name }}
      </div>
      <div class="user-item-heading__heading-text">
        {{ user.email }}
      </div>
      <div class="user-item-heading__heading-text">
        {{ user.phone }}
      </div>
      <div class="user-item-heading__heading-text">
        {{ user.website }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserProps } from "@/types/props";

defineProps<UserProps>();
</script>

<style lang="scss">
.user-item-heading {
  &__wrapper {
    border: 1px solid #ffd200;
    border-radius: 4px;
    padding: 14px 0 15px 11px;
  }

  &__heading-text {
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    color: #696969;
  }
}
</style>
