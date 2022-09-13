<template>
  <b-row class="align-items-center h-100 justify-content-center">
    <b-col col lg="3" sm="10">
      <b-form class="bg-lighten-grey p-3 my-form rounded">
        <h1 class="text-center txt-grey py-3">Register</h1>
        <b-form-group label="User" label-for="user">
          <b-form-input
            id="user"
            name="user"
            v-model="user"
            v-validate="{ required: true }"
            :state="validateState('user')"
            aria-describedby="user-feedback"
            data-vv-as="user"
          />
          <form-error :errors-text="errors.collect('user')" />
        </b-form-group>
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            name="email"
            v-model="email"
            v-validate="{ required: true }"
            :state="validateState('email')"
            aria-describedby="email-feedback"
            data-vv-as="email"
          />
          <form-error :errors-text="errors.collect('email')" />
        </b-form-group>
        <b-form-group label="Password" label-for="password">
          <b-form-input
            id="password"
            name="password"
            v-model="password"
            v-validate="{ required: true }"
            :state="validateState('password')"
            aria-describedby="password-feedback"
            data-vv-as="password"
          />
          <form-error :errors-text="errors.collect('password')" />
        </b-form-group>
        <b-button block class="btn-blue" @click="onSubmit">Register</b-button>
        <span class="txt-dark mt-3 d-block">
          Already Registered?
          <router-link to="/login" class="font-weight-bold">Login</router-link>
        </span>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import authLayout from "@/layouts/auth.vue";
import formError from "@/components/shared/form-error.vue";

export default {
  name: "RegisterComponent",
  data() {
    return {
      user: "",
      email: "",
      password: "",
    };
  },
  components: {
    formError,
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        alert("Form submitted!");
      });
    },
  },
  created() {
    this.$emit("update:layout", authLayout);
  },
};
</script>
