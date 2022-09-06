import { defineStore } from 'pinia'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmZb9pg68mI12DEX0PvfTwug1lU84DbWI",
  authDomain: "crm-vue-vladilen.firebaseapp.com",
  projectId: "crm-vue-vladilen",
  storageBucket: "crm-vue-vladilen.appspot.com",
  messagingSenderId: "173651020409",
  appId: "1:173651020409:web:8e88678e3b8ddc2fb422a8",
  databaseURL: "https://crm-vue-vladilen-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    auth: null,
    error: null,
  }),
  getters: {
    error: (s) => (s.error)
  },
  actions: {
    setError(state, error) {//mutation
      state.error = error
    },
    clearError(state) {//mutation
      state.error = null
    },
    async login({ email, password }) {
      // try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          console.log('this.setError(error)')
          this.setError(error)

          console.error(error.code)
          console.error(error.message)
          throw error
        });
      // } catch (error) {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.error(errorCode)
      //   console.error(errorMessage)
      //   throw error
      // }
    },
    async logout() {
      await signOut(auth)
    },
    async register({ email, password, name, agreeRules }) {
      await createUserWithEmailAndPassword(auth, email, password, name, agreeRules)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user.uid')
          console.log(user.uid)
          this.writeUserData(user.uid, email, password, name, agreeRules)
        })
        .catch((error) => {
          this.setError(error)

          console.error(error.code)
          console.error(error.message)
          throw error
        });
    },
    writeUserData(userId, email, password, name, agreeRules) {
      console.log('db')
      console.log(db)
      set(ref(db, 'users/' + userId), {
        email,
        password,
        name,
        agreeRules
      });
    }
  }
})