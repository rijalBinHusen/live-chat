<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email" >
      <input type="password" required placeholder="password" v-model="password" >
      <p>{{ error }}</p>
      <button>Sign up</button>
  </form>
</template>

<script>
/* eslint-disable */
import useSignup from "../composable/userSignup"
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const { error, signup } = useSignup()

        const displayName = ref("")
        const email = ref("")
        const password = ref("")

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            // console.log(displayName.value, email.value, password.value)
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>