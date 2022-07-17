<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email" >
      <input type="password" required placeholder="password" v-model="password" >
      <p class="error">{{ error }}</p>
      <button>Sign up</button>
  </form>
</template>

<script>
import userLogin from "../composable/userLogin"
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const { error, login } = userLogin()
        const email = ref("")
        const password = ref("")

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                // console.log("User logged in")
            }
        }

        return { email, password, error, handleSubmit }
    }
}
</script>

<style>

</style>