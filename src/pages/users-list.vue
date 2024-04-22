<template>
  <page-container
    :page-content-loading="userListLoading"
    :page-content-empty="store.isUserListEmpty"
  >
    <template #page-title> Users </template>

    <template #page-content-empty>
      <h2>Список пуст</h2>
    </template>

    <template #page-content>
      <div class="users-list">
        <div class="users-list__wrapper">
          <div class="users-list__grid grid">
            <div class="grid__wrapper">
              <div class="grid__item"></div>
              <div class="grid__item">Name</div>
              <div class="grid__item">Email</div>
              <div class="grid__item">Phone</div>
              <div class="grid__item">Website</div>
            </div>
          </div>

          <accordion-list>
            <accordion-item
              v-for="user in usersList"
              :key="user.id"
              :active-id="opennedUserId"
              :current-id="user.id"
              @toggle-accordion="setOpennedUserId(user.id)"
            >
              <template #accordion-item-header>
                <div class="user-item__heading">
                  <div class="user-item__heading-text">
                    <select-arrow-icon />
                  </div>
                  <div class="user-item__heading-text">
                    {{ user.name }}
                  </div>
                  <div class="user-item__heading-text">
                    {{ user.email }}
                  </div>
                  <div class="user-item__heading-text">
                    {{ user.phone }}
                  </div>
                  <div class="user-item__heading-text">
                    {{ user.website }}
                  </div>
                </div>
              </template>

              <template #accordion-item-full :key="updateCount">
                <user-item-form v-model:user="user" />
              </template>
            </accordion-item>
          </accordion-list>
        </div>
      </div>
    </template>
  </page-container>
</template>

<script setup lang="ts">
import { AccordionList, AccordionItem } from "@/components/accordion";

import { UserItemForm } from "@/components/user-item";

import { onMounted, ref } from "vue";

import { usersStore } from "@/store";
import { computed } from "@vue/reactivity";
import { User } from "@/types/users";

const store = usersStore();

const userListLoading = ref<boolean>(true);

const usersList = computed(() => store.users);

const opennedUserId = ref<number | null>(null);
const setOpennedUserId = (userId: number) => {
  if (opennedUserId.value !== userId) {
    opennedUserId.value = userId;
  } else {
    opennedUserId.value = null;
  }
};

const updateCount = ref<number>(0);
const updateUser = async (user: User) => {
  try {
    await store.updateUser(user);
    updateCount.value++;
    alert("1" + JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

onMounted(async () => {
  try {
    await store.getUsersList();
  } catch (error) {
    throw error;
  } finally {
    userListLoading.value = false;
  }
});
</script>

<style lang="scss">
.grid {
  &__wrapper {
    display: grid;
    grid-template-columns: 50px repeat(4, 1fr);
    align-items: center;
  }
}

.users-list {
  &__grid {
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    color: #696969;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item-info-text {
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    color: #696969;
  }
}

.user-item {
  &__heading {
    display: grid;
    grid-template-columns: 50px repeat(4, 1fr);
    border: 1px solid #ffd200;
    border-radius: 4px;
    padding: 14px 0 15px 11px;

    &-text {
      font-family: $main-font-family;
      font-size: 14px;
      font-weight: 400;
      line-height: 16.41px;
      color: #696969;
    }
  }
}
</style>
