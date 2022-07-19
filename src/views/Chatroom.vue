<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
/* eslint-disable */
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Navbar from "../components/Navbar.vue"
import getUser from '../composable/getUser'
import NewChatForm from "../components/NewChatForm.vue"
import ChatWindow from "../components/ChatWindow.vue"

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
  components: { Navbar, NewChatForm, ChatWindow }
}
</script>

<style>

</style>