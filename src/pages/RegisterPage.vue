<template>
    <div>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  
  export default {
    name: 'RegisterPage',
    setup() {
      const email = ref('');
      const password = ref('');
  
      const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          alert('Registration successful!');
        } catch (error) {
          alert(error.message);
        }
      };
  
      return { email, password, register };
    },
  };
  </script>
  