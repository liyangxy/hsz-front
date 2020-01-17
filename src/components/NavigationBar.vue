<template>
    <div id="navigation_bar" class="navigation_bar_header">
        <div id="navigation_logo_sign">
            <div id="navigation_logo">
                <a id="navigation_logo_a" href="/">
                    <img src="../assets/logo.png" class="logo"/>
                </a>
                <span id="logo_text">做实验，学编程</span>
            </div>
            <div id="navigation_sign">
              <router-link :to="{ name:'content' }">
                <a id="contact_us" class="navigation_li">关于我们</a>
              </router-link>
            </div>
        </div>
    </div>
</template>

<style type="text/css" scoped>

/*总导航区域*/
#navigation_bar {
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
}

/* logo 切换/登陆/注册 区域 */
#navigation_logo_sign {
    display: flex;
    justify-content:space-between;
    align-content: center;
    width: 1170px;
    height: 84px;
}

/* logo */
#navigation_logo {
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
}

</style>
