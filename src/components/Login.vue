<template>
  <div class="sign_on_dialog">
      <div class="input_bar">
          <div class="input-group input_group">
              <input class="form-control text_input"
                     type="text"
                     v-model="phone"
                     placeholder="请输入手机号"
                     >
          </div>
          <div class="input-group input_group">
            <input class="form-control text_input"
                   type="password"
                   v-model="password"
                   placeholder="请输入密码"
                   >
          </div>
      </div>
      <div class="custom_control_div">
      </div>

      <div class="login_button">
        <a class="enter_button"
           href="javascript:;"
           @click="loginBtn"
        >登录</a>
      </div>
  </div>
</template>

<script type="text/javascript">
// import * as types from '../store/mutation-types'

// import InputBar from '@/components/InputBar.vue';

// import SignOn from './sign_on.vue'
// import SignUp from './sign_up.vue'

// import {mapState, mapActions} from 'vuex'

export default {
    name : 'Login',
    data: function () {
        return {
            phone: null,
            password: null,
        }
    },
    methods: {
        loginBtn(evt) {
          let errors = null;

          if (!this.phone || !this.validPhone(this.phone)) {
              errors = '手机号码不正确';
          }
          if (!this.password || this.password.length < 6) {
              errors = errors ? errors + '，密码长度不能小于6位字符' : '密码长度不能小于6位字符';
          }

          if (errors) {
              this.$message.error(errors);
          } else {
              let login_info = {
                  phone: this.phone,
                  password: this.password
              };

              this.$api.api.login(login_info).then((res) => {
                  this.$store.dispatch('login', res.data);
                  this.$store.dispatch('user_name', this.phone);
                  this.$message(
                      {
                          message: '恭喜你，登录成功',
                          type: 'success',
                          center: true,
                  });
                  this.$router.push({path: '/'});
              }).catch((err) => {
                  this.$message({
                      showClose: true,
                      message: err.message || '用户名或密码错误，请重输入',
                      type: 'error'
                  })
              })
            }
        },

        validPhone(phone) {
            var re = /^1[3456789]\d{9}$/;
            return re.test(phone);
        }

    }
}
</script>
<style type="text/css" scoped>

.sign_on_dialog {
    display: flex;
    flex-flow: column nowrap;
    /* justify-content: center; */
    /* align-content: center; */


    min-height: 85%;
    margin: 30px auto;
    padding: 10px 20px;
    /* height: 100%; */
    width: 350px;
    /* position: fixed;
    background: rgb(0,0,0,0.5);
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
}

.login_button {
    /* margin-left: 110px; */
}
.custom_control_div {
    align-self: center;
}

.autologin_label {
    margin-right: 10px;
}

.input_group {
    display: flex;
    margin-bottom: 20px;
    height: 35px;
    width: 350px;
}

.input_bar {
    align-self: center;
    width: 100%;
}

.text_input {
    width: 300px;
}

.text_input {
    font-size: 14px;
}

.text_input::placeholder {
    color: #c6c6c6;
}

.text_input:focus {
    box-shadow: none;
    /* border-color: #ec0707; */
}


.enter_button {
    display: block;
    width: 300px;
    color: #fff;
    background: #0c9;
    padding: 6px 12px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #0c9;
    border-radius: 5px;
    margin-top: 10px;
    text-decoration: none;
}

.enter_button:hover {
    background: #2ee4b7;
    color: #fff;
    border: 1px solid #2ee4b7;
}

.login_state_message {
    padding: 5px 10px;
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
}

.custom_control_div {
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
    color: #999;
    font-size: 14px;
}

.autologin_label {
    position: relative;
}

.autologinbutton {
    opacity: 0;
}

.autologin_label:after {
    position: absolute;
    top: .25rem;
    /*top: 0;*/
    left: -1.1rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background: no-repeat 50%/50% 50%;
}

.autologin_label:before {
    content: "";
    border-radius: .25rem;
    border: 1px solid #adb5bd;
    background-color: #fff;
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .25rem;
    left: -1.1rem;
    display: block;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.label_checked:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E");
}

.label_checked:before {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
}

/* */
.forget_password {
    color: #c6c6c6;
}

.forget_password:hover {
    color: #c6c6c6;
}

</style>
