<template>
  <div class="sign_on_dialog">
      <InputBar
      @signOnInfo="update_u_p"
      @emit_login="login(loginArgs)"
      ></InputBar>
      <div class="custom_control_div">
          <!-- <div>
              <input type="checkbox" name="autologin" value="true" v-model="checked"
                     class="autologinbutton"
                     :id="input_id ? input_id : 'autologinbutton'">
              <label class="autologin_label"
                     :class="[checked ? 'label_checked' : '']"
                     :for="input_id ? input_id : 'autologinbutton'">下次自动登录</label>
          </div> -->
          <!-- <div>
              <a class="forget_password" target="_blank" href="https://www.shiyanlou.com/users/account/forget-password/">忘记密码</a>
          </div> -->
      </div>
      <div class="login_button">
        <a class="enter_button"
           href="javascript:;"
           @click="login(loginArgs)"
        >登录</a>
      </div>
  </div>
</template>

<script type="text/javascript">
import InputBar from '@/components/InputBar.vue';

// import SignOn from './sign_on.vue'
// import SignUp from './sign_up.vue'

// import {mapState, mapActions} from 'vuex'

export default {
    name : 'Login',
    data: function () {
        return {
            show_login_error_message: false,
            checked: '',
            update_u_p: '',
            input_id: '',
        }
    },
    components: {
        InputBar,
        // SignUp
    },

    computed: {
        // ...mapState({
        //     show_login_dialog: state => state.loginState.show_login_dialog,
        //     on_or_up: state => state.loginState.on_or_up,
        //     message: state => state.loginState.login_info.message,
        //     sign_on: state => state.loginState.sign_on
        // })
    },
    watch: {
        // message: function (newMessage, oldMesssage) {
        //     if (newMessage) {
        //         this.change_warning_message(newMessage)
        //         this.change_login_message('')
        //         this.change_warning_bar_style_class('alert')
        //     }
        // },
        // sign_on: function (newState, oldState) {
        //     console.log(newState)
        //     if (newState === true) {
        //         this.change_user_info()
        //     }
        // }
    },
    methods: {
        // ...mapActions({
        //     change_show_state: 'loginState/change_show_state',
        //     change_on_up_state: 'loginState/change_on_up_state',
        //     change_user_info: 'loginState/change_user_info',
        //     change_login_message: 'loginState/change_message',
        //     change_warning_message: 'warningBar/change_message',
        //     change_warning_bar_style_class: 'warningBar/change_warning_bar_style_class'
        // })
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


/*
https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean
for more ~ selector information.
 */
/* .autologinbutton:active~.autologin_label:before {
    color: #fff;
    background-color: #80fadb;
    border-color: #80fadb;
} */

/* .autologinbutton:focus~.autologin_label:before {
    box-shadow: 0 0 0 0.2rem rgba(8,191,145,.25);
} */

/* */
.forget_password {
    color: #c6c6c6;
}

.forget_password:hover {
    color: #c6c6c6;
}

</style>
