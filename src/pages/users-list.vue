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
                <user-item-heading :user="user"/>
              </template>

              <template #accordion-item-full>
                <user-item-form :user="user" @update-user="updateUser" />
              </template>
            </accordion-item>
          </accordion-list>
        </div>
      </div>
    </template>
  </page-container>
</template>

<script setup lang="ts">
import { UserItemForm, UserItemHeading } from "@/components/user-item";

import { AccordionList, AccordionItem } from "@/components/accordion";

import { onMounted, computed, ref } from "vue";

import { usersStore } from "@/store";
import { User } from "@/types/users";

const store = usersStore();

const userListLoading = ref<boolean>(true);

const usersList = computed(() => store.users);

const opennedUserId = ref<number | null>(null);
const setOpennedUserId = (userId: number) =>
  (opennedUserId.value = opennedUserId.value !== userId ? userId : null);

const updateUser = async (user: User) => {
  try {
    await store.updateUser(user);
  } catch (error) {
    throw error;
  } finally {
    opennedUserId.value = null;
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
</style>
