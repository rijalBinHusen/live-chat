<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email" >
      <input type="password" required placeholder="password" v-model="password" >
      <p class="error">{{ error }}</p>
      <button>Sign up</button>
  </form>
</template>

<script>
/* eslint-disable */
import useSignup from "../composable/userSignup"
import { ref } from '@vue/reactivity'
export default {
    setup(props, context) {
        const { error, signup } = useSignup()

        const displayName = ref("")
        const email = ref("")
        const password = ref("")

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>