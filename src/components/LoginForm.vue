<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email" >
      <input type="password" required placeholder="password" v-model="password" >
      <p class="error">{{ error }}</p>
      <button>Login</button>
  </form>
</template>

<script>
import userLogin from "../composable/userLogin"
import { ref } from '@vue/reactivity'
import getUser from '../composable/getUser'
import { onMounted } from '@vue/runtime-core'

export default {
    setup(props, context) {
        const { error, login } = userLogin()
        const email = ref("")
        const password = ref("")

        const { user } = getUser()

        onMounted(() => {
            if(user.value) {
                context.emit('login')
            }
        })


        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit('login')
            }
        }

        return { email, password, error, handleSubmit }
    }
}
</script>

<style>

</style>