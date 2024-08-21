<template>
  <div
    class="width-full d-flex flex-column flex-center"
    style="
      height: 100%;
      min-height: 400px;
      padding: 10px;
      background-color: #d4d4d4;
    "
  >
    <div
      class="max-width-1200 width-full d-flex flex-center flex-column gap-4 bg-white form"
    >
      <h1 class="font-sm-res text-center persian-font">ورود به پنل کاربری</h1>
      <div class="d-flex flex-center flex-column gap-4">
        <input
          type="email"
          v-model="email"
          class="input cv-login-input persian-font"
          placeholder="email"
        />
        <input
          type="password"
          v-model="password"
          class="input cv-login-input persian-font"
          placeholder="password"
        />
        <button class="btn btn-login persian-font" @click.prevent="login">
          ورود
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const snackbar = useSnackbar();
const router = useRouter();
function login() {
  const user = {
    email: email.value,
    password: password.value,
    isLogin: true
  };
  if (validateEmail(email.value) && validatePassword(password.value)) {
    localStorage.setItem("user", JSON.stringify(user));
    snackbar.add({
      type: "success",
      text: "ورود شما با موفقیت بود",
    });
    router.push('/cvForm')
    window.location.reload()
  }else if (!validateEmail(email.value) && validatePassword(user.password)) {
    snackbar.add({
      type: "error",
      text: "خطا در ایمیل، لطفا ایمیل درست را وارد کنید",
    });
  }else if (validateEmail(email.value) && !validatePassword(user.password)) {
    snackbar.add({
      type: "error",
      text: "خطا در رمز عبور، لطفا حداقل هشت کارکتر وارد کنید",
    });
  }else{
    snackbar.add({
      type: "error",
      text: "لطفا اطلاعات را بدرستی وارد کنید",
    });
  }
}

function validateEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|.+\.ir)$/;
  return emailPattern.test(email);
}

function validatePassword(password: string) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
</script>

<style lang="scss" scoped>
@import url("../../assets/interfaces/login.scss");
</style>
