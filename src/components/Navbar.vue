<template>
  <nav>
      <div>
        <p>Hey there {{ user?.displayName }}</p>
        <p class="email">Currently logged in as {{ user?.email }}</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import userLogout from "../composable/userLogout"
import getUser from "../composable/getUser"

export default {
  setup() {
    const { logout, error } = userLogout()
    const { user } = getUser()
    
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      if(!error.value) {
        // console.log("user logged out")
        router.push("/")
      }
    }

    return { error, handleClick, user }
  }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size:14px;
    color: #999;
  }
</style>