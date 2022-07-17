<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Navbar from "../components/Navbar.vue"
import getUser from '../composable/getUser'
import NewChatForm from "../components/NewChatForm.vue"

/* eslint-disable */
export default {
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch((user), () => {
      if(!user.value) {
        router.push({ name: 'welcome' })
      }
    })
  },
  components: { Navbar, NewChatForm }
}
</script>

<style>

</style>