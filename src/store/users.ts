import { defineStore } from "pinia";
import { api } from "@/api";
import { User } from "@/types/users";

import { ref, computed } from "vue";

export default defineStore("users", () => {
  const users = ref<User[]>();

  const isUserListEmpty = computed(() => !users.value?.length);

  const getUsersList = async (): Promise<void> => {
    try {
      const response = await api.getUsers();
      users.value = await response.json();
    } catch (error: any) {
      // alert(error.message);
    }
  };

  const updateUser = async (updatedUser: User): Promise<void> => {
    try {
      if (!users.value) return;

      let idx: number = users.value.findIndex(
        (user: User) => user.id === updatedUser.id
      );

      if (idx === -1) return;

      await api.updateUser(updatedUser);

      users.value[idx] = updatedUser;
    } catch (error: any) {
      // alert(error.message);
    }
  };

  return {
    users,
    isUserListEmpty,
    getUsersList,
    updateUser,
  };
});
