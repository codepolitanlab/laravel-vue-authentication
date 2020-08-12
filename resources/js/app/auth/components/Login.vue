<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">

            <div class="alert alert-danger" v-if="errors.root">{{ errors.root }}</div>

            <form @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    name="email"
                    autocomplete="email"
                    autofocus
                    v-model="email"
                  />
                  <span class="invalid-feedback" role="alert" v-if="errors.email">
                    <strong>{{ errors.email[0] }}</strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    :class="{
                        'is-invalid': errors.password
                    }"
                    name="password"
                    autocomplete="current-password"
                    v-model="password"
                  />
                  <span class="invalid-feedback" role="alert" v-if="errors.password">
                    <strong>
                      {{
                      errors.password[0]
                      }}
                    </strong>
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label class="form-check-label" for="remember">Remember Me</label>
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            email: null,
            password: null,
            errors: []
        }
    },
    methods: {
        ...mapActions({
            login: "auth/login"
        }),

        submit() {
            this.login({
                payload: {
                    email: this.email,
                    password: this.password
                },
                context: this
            });
        }
    }
}
</script>
