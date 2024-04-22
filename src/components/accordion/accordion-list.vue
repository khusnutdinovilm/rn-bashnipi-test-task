<template>
  <section class="accordion-list">
    <div class="accordion-list__wrapper">
      <slot />
    </div>
  </section>
</template>


<style lang="scss">
.accordion-list {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
}
</style>