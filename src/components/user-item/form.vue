<template>
  <form class="user-item-form" @submit.prevent>
    <div class="user-item-form__wrapper">
      <table class="table user-item-form__fields">
        <thead>
          <th>address</th>
          <th>company</th>
          <th>basic info</th>
        </thead>

        <tbody>
          <tr>
            <td>
              <ui-input
                id="address-street"
                label-text="Street"
                v-model="userItem.address.street"
              />
            </td>
            <td>
              <ui-input
                id="company-name"
                label-text="Name"
                v-model="userItem.company.name"
              />
            </td>
            <td>
              <ui-input
                id="user-name"
                label-text="Name"
                v-model="userItem.name"
              />
            </td>
          </tr>

          <tr>
            <td>
              <ui-input
                id="address.suite"
                label-text="Suite"
                v-model="userItem.address.suite"
              />
            </td>
            <td>
              <ui-input
                id="company-catchPhrase"
                label-text="CatchPhrase"
                v-model="userItem.company.catchPhrase"
              />
            </td>
            <td>
              <ui-input
                id="user-username"
                label-text="Username"
                v-model="userItem.username"
              />
            </td>
          </tr>

          <tr>
            <td>
              <ui-input
                id="address.city"
                label-text="City"
                v-model="userItem.address.city"
              />
            </td>
            <td>
              <ui-input
                id="company-bs"
                label-text="Bs"
                v-model="userItem.company.bs"
              />
            </td>
            <td>
              <ui-input
                id="user-email"
                label-text="Email"
                v-model="userItem.email"
              />
            </td>
          </tr>

          <tr>
            <td>
              <ui-input
                id="address-zipcode"
                label-text="Zipcode"
                v-model="userItem.address.zipcode"
              />
            </td>
            <td></td>
            <td>
              <ui-input
                id="user-phone"
                label-text="Phone"
                v-model="userItem.phone"
              />
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <ui-input
                id="user-website"
                label-text="Website"
                v-model="userItem.website"
                style="margin-bottom: 26px"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="user-item-form__btn">
        <ui-button @click.prevent="updateUser" :disabled="!isUserFieldsChanged">
          <tick-icon />
        </ui-button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { User } from "@/types/users";
import { UserProps } from "@/types/props";

const props = defineProps<UserProps>();
const emits = defineEmits<{ (e: "updateUser", user: User): void }>();

const userItem = ref<User>(JSON.parse(JSON.stringify(props.user)));

const isUserFieldsChanged = computed(
  () => JSON.stringify(userItem.value) !== JSON.stringify(props.user),
);

const updateUser = () => emits("updateUser", userItem.value);
</script>

<style lang="scss">
.table {
  border: 1px solid #d9dbda;
  border-radius: 4px;
  border-collapse: collapse;
  width: 100%;

  & th {
    font-family: $main-font-family;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-transform: uppercase;
    padding: 11px 0 10px 31px;
    border: 1px solid #d9dbda;
    text-align: left;
    border-radius: 4px;
    color: #696969;
  }

  & tr {
    font-family: $main-font-family;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-transform: uppercase;
    border: 1px solid #d9dbda;
    border-bottom: 0px;
    border-top: none;
    text-align: left;
    border-radius: 4px;
    color: #696969;
  }

  & td {
    padding: 11px 31px 10px 31px;
    border-left: 1px solid #d9dbda;
  }
}
.user-item-form {
  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }
}
</style>
