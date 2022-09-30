import { defineStore } from "pinia";
import * as Storage from "@/storage";
export const useGlobal = defineStore("main", {
  state: () => ({
    token: void 0 || Storage.getToken(),
    userId: void 0 || Storage.getUserId(),
  }),
  actions: {
    setToken(t) {
      this.token = t;
    },
    setUserId(id) {
      this.userId = id;
    },
  },
});
