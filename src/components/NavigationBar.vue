<template>
    <div id="navigation_bar" class="navigation_bar_header">
        <div id="navigation_logo_sign" class="navigation_logo_sign">
            <div id="navigation_logo" class="navigation_logo">
                <router-link :to="{ name:'home' }">
                    <a id="navigation_logo_a" href="javascript:;">
                        <img src="../assets/logo.png" class="logo"/>
                    </a>
                </router-link>
                    <span href="javascript:;" id="logo_text" class="logo_text">回收站</span>
            </div>
            <div id="navigation_sign" class="navigation_sign">
              <router-link :to="{ name:'content' }" class="navigation_link">
                <a id="contact_us" class="navigation_li">关于我们</a>
              </router-link>
            </div>
            <div class="navigation_login" v-show="!login_state">
                <router-link :to="{ name:'login' }" class="navigation_link">
                  <a href="javascript:;" id="login" class="navigation_li">登录</a>
                </router-link>
            </div>
            <div class="navigation_register" v-show="!login_state">
                <router-link :to="{ name:'register' }" class="navigation_link">
                  <a href="javascript:;" id="register" class="navigation_li">注册</a>
                </router-link>
            </div>
            <div class="selection_bar" v-show="login_state">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                      <router-link :to="{ name:'edit' }" class="navigation_link">
                          <el-dropdown-item class="dropdown_menu">编辑资料</el-dropdown-item>
                      </router-link>
                    <!-- <el-dropdown-item class="dropdown_menu">狮子头</el-dropdown-item>
                    <el-dropdown-item class="dropdown_menu">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item class="dropdown_menu" disabled>双皮奶</el-dropdown-item> -->
                    <el-dropdown-item class="dropdown_menu" divided @click.native="logout()">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </div>

        </div>
        <!-- <div>
          <Login v-show="show_login"></Login>
        </div> -->
    </div>
</template>

<script type="text/javascript">
import {mapGetters} from 'vuex'

export default {
    data: function () {
        return {
            show_login: false,
        }
    },

    // vuex 中的数据实时更新，使用watch
    computed: mapGetters (['login_state']),

    // watch: {
    //     login_state(val) {
    //         console.log('val')
    //         console.log(val)
    //         this.login = val;
    //     }
    // },

    methods: {
        logout() {
            console.log('qwqwqw')
            this.$api.api.loginOut().then((res) => {
                console.log(res)
                this.$store.dispatch('login_out');
                this.$message(
                    {
                        message: '退出成功',
                        type: 'success',
                        center: true,
                });
                this.$router.push({path: '/'});
            }).catch((err) => {
                this.$message({
                    showClose: true,
                    message: err.message || '操作失败',
                    type: 'error'
                })
            })
        },

    },

}


</script>


<style type="text/css" scoped>
.navigation_bar_header {
  background-color: #f7f7f7;
  position: relative;
}
.navigation_logo_sign {
  display: flex;
  flex-wrap: nowrap;
  max-width: 960px;
  padding: 10px 10px;
  margin: 0 auto;
}
.navigation_logo {
    display: inline-flex;
    justify-content: flex-start;
    margin-right: auto;
}
.logo {
  width: 50px;
  height: 50px;
}
.logo_text {
    display: block;
    font-size: 1.2em;
    color: #274A59;
    margin-top: auto;
    margin-bottom: auto;
    /* text-align: center; */
}
.navigation_sign, .navigation_login, .navigation_register, .selection_bar {
    align-self: center;
}
.navigation_login, .navigation_register, .selection_bar {
    margin-left: 10px;
}
.navigation_li {
    color: #274A59;
}
.navigation_li:hover {
    color: #08bf91;
}
.navigation_link, .navigation_li, .navigation_register {
    text-decoration: none;
}

.el-dropdown-link {
    cursor: pointer;
    font-size: 1.1em;
    /* color: #409EFF; */
}
.el-icon-arrow-down {
    font-size: 1.1em;
}
.dropdown_menu {
    font-size: 1em;
}
.dropdown_menu:hover {
    background-color: transparent;
    color: #08bf91;
}
/* .logo_text {
    text-decoration: none;
} */



/*总导航区域*/
/* #navigation_bar {
    display: flex;
    flex-wrap: wrap;
    background: #f7f7f7;
    height: 80px;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
}

.navigation_li {
    float: left;
} */

/* logo 切换/登陆/注册 区域 */
/* #navigation_logo_sign {
    display: flex;
    justify-content:space-between;
    align-content: center;
    width: 1170px;
    height: 84px;
} */

/* logo */
/* #navigation_logo {
    display: inline-flex;
    justify-content: flex-start;
}

#navigation_logo_a {
    display: block;
    border: 0;
    padding: 10px 0;
    margin-top: 8px;
    height: 40px;
}
.logo {
    height: 50px;
}

#logo_text {
    display: block;
    font-size: 18px;
    color: #274A59;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
}

#navigation_sign {
    align-self: center;
}

.navigation_li {
    color: #274A59;
}
.navigation_li:hover {
    color: #08bf91;
}

#contact_us {
    padding: 6px 22px;
    border-radius: 30px;
    margin: 5px 25px auto auto;
    font-size: 18px;
} */

</style>
