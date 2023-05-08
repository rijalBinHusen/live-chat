<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>Have an account? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
    <div style="margin-top:50px;">
        <div>
            <h3>User for test:</h3>
            <ul>
                <li>Email: <b>test2@test.com</b>, password: <b>123456</b></li>
                <li>Email: <b>test@test.com</b>, password: <b>123456</b></li>
            </ul>
        </div>
        <div style="margin-top:50px;">
            <h3>What kind of application is this?:</h3>
            <ul>
                <li>Apllication to chat to other users in app</li>
                <li>New user can signup</li>
                <li>All users can send and read messages in realtime</li>
            </ul>
        </div>
        <div>
          <h3>How to test application:</h3>
          Test this application by open 2 different browser and login with different user, the chatboard will be changed in realtime while the user send the messages.
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import SignupForm from "../components/SingupForm.vue"
import LoginForm from "../components/LoginForm.vue"
import { useRouter } from "vue-router"
import { ref } from 'vue'
export default {
    setup() {
        const showLogin = ref(true);
        const router = useRouter();
        const enterChat = () => {
          router.push('/chatroom')
        }
        return { showLogin, enterChat }
    },
    components: { SignupForm, LoginForm }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }  
    /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 12rem;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  span {
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
  }
</style>
