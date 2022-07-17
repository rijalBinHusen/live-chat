<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Navbar from "../components/Navbar.vue"
import getUser from '../composable/getUser'
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
  components: { Navbar }
}
</script>

<style>

</style>