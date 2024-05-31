<template>
    <div>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  
  export default {
    name: 'LoginPage',
    setup() {
      const email = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          alert('Login successful!');
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, login };
    },
  };
  </script>
  