<template>
  <b-row class="align-items-center h-100 justify-content-center">
    <b-col col lg="3" sm="10">
      <b-form class="bg-lighten-grey p-3 my-form rounded">
        <h1 class="text-center txt-grey py-3 text-uppercase">Login</h1>
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            name="email"
            v-model="email"
            type="email"
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
            type="password"
            v-validate="{ required: true }"
            :state="validateState('password')"
            aria-describedby="password-feedback"
            data-vv-as="password"
          />
          <form-error :errors-text="errors.collect('password')" />
        </b-form-group>
        <b-button
          block
          class="btn-blue"
          :disabled="isLoginLoading"
          @click="onSubmit"
          >Login</b-button
        >
        <span class="txt-dark mt-3 d-block">
          Dont't have account?
          <router-link to="/register" class="font-weight-bold"
            >Register Now</router-link
          >
        </span>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
import authLayout from "@/layouts/auth.vue";
import formError from "@/components/shared/form-error.vue";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
      isLoginLoading: false,
    };
  },
  components: {
    formError,
  },
  methods: {
    ...mapActions({
      loginUser: "auth/loginUser",
    }),
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.isLoginLoading = true;
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.loginUser(payload).then(() => {
          this.isLoginLoading = false;
          this.showAlert({
            type: "success",
            title: "Login Successfull!",
            message: "Welcome to dashboard",
          });
          this.$router.push({ path: "/articles" });
        });
      });
    },
  },
  created() {
    this.$emit("update:layout", authLayout);
  },
};
</script>
