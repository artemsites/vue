import { defineStore } from "pinia";

import { useAuthStore } from "./auth";

import firebase from "firebase/compat/app";

export const useInfoStore = defineStore({
  id: "info",
  state: () => ({
    info: {},
    auth: useAuthStore(),
  }),
  actions: {
    async fetchCurrency() {
      console.log("import.meta.env.VITE_RATES_API");
      console.log(import.meta.env.VITE_RATES_API); //!VITE_ is required!
      const res = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=${import.meta.env.VITE_RATES_API}&symbols=RUB,EUR,USD`
      );
      // console.log('await res.json()')
      // console.log(await res.json())
      return await res.json()
    },
    async fetchInfo() {
      const uid = await this.auth.getUid();
      // console.log("uid");
      // console.log(uid);
      const info = (
        await firebase.database().ref(`/users/${uid}/info`).once("value")
      ).val();
      // console.log('info')
      // console.log(info)
      this.setInfo(info);
    },
    async setInfo(info) {
      this.$state.info = info;
      // console.log('this.$state')
      // console.log(this.$state)
    },
    clearInfo() {
      this.$state.info = {};
    },
  },
  getters: {
    getInfo: (state) => state.info,
  },
});