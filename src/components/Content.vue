<template>
    <div class="courses_category">
        <div class="courses_category_div">
            <div class="courses_category_diretion courses_selection">
                <div class="courses_category_title"> 方向：</div>
                <div class="courses_selection_card">
                    <a class="selection_button_a"
                       href="javascript:;"
                       v-for="title in courses_category"
                       :key="title['name']"
                       :class="current_category==title['name'] ? 'selected' : ''"
                       @click="change_current_category(title['name'])"
                    >
                        {{ title['name'] }}
                    </a>
                </div>
            </div>
            <div class="courses_category_tag courses_selection">
                <div class="courses_category_title"> 标签： </div>
                <div class="courses_selection_card">
                    <div
                        v-for="tags in courses_category"
                        :key="tags['name']"
                    >
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="tag_information in tags['tags']"
                           :key="tag_information"
                           :class="current_tag==tag_information ? 'selected' : ''"
                           v-show="tags['name'].indexOf(current_category) != -1"
                           @click="change_current_tag(tag_information)"
                        >
                           {{ tag_information }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="courses_order_div">
                <div class="left_order_button_div">
                    <div class="base_order_div order_div">
                        <a class="order_button"
                           href="javascript:;"
                           v-for="name in ['综合', '最新', '最热']"
                           :key="name"
                           :class="current_base_order==name ? 'order_button_selected' : ''"
                           @click="change_current_base_order(name)"
                        >
                           {{ name }}
                        </a>
                    </div>
                </div>
              </div>
        </div>
        <div class="courses_div">
            <CourseCard
                class="courses_selection_course_card"
                v-for="(course_info, index) in courses_content['results']"
                :key="index"
                :data="course_info"
            >

            </CourseCard>
        </div>
        <!-- <TabPage>
        </TabPage> -->
    </div>
</template>

<script type="text/javascript">
// import CourseCard from '@/components/CourseCard.vue';
import CourseCard from '@/components/CourseCard.vue';

export default {
    components: {
        CourseCard
    },
    data () {
        return {
          courses_category: [
                {
                  name: '全部',
                  tags: ["Python","机器学习","Linux","Web","大数据","C","Java","PHP","C++","R","计算机专业课","Spark","NodeJS","Web安全","Hadoop","GO","CSS","网络安全","HTML5","JavaScript","系统安全","网络","Git","jQuery",
                          "安全开发","SQL","Scala","NoSQL","Shell","Flask","OpenCV","渗透测试","HTML","算法","MySQL","ThinkPHP","SDN","Vuejs","加密解密","区块链","云计算","OpenStack","Docker","新手入门","设计模式","Redis",
                          "React","Django","SSM","Kali","Ruby","Laravel","Bootstrap","SSH","Spring","Ansible","ROS","信息隐藏","SHH","信息安全","Swift","汇编","MongoDB","Hbase","Nginx","Kafka","TensorFlow"]
                },
                {
                  "name":"后端开发",
                  "tags":["Python","PHP","Java","Ruby","Laravel","C","C++","NodeJS","Go","Flask","OpenCV","ThinkPHP","爬虫","Django","Spring","SSM","SpringBoot"]
                },
                {
                  "name":"Linux运维",
                  "tags":["Linux","Shell","网络","Nginx","Ansible","Git"]
                },
                {
                  "name":"云计算与大数据",
                  "tags":["Hadoop","Spark","Scala","Docker","机器学习","SDN","Hbase","Hive","Mahout","Kafka","云计算","大数据","TensorFlow","知识图谱"]
                },
                {
                  "name":"数据库",
                  "tags":["SQL","NoSQL","MongoDB","MySQL","Redis","Neo4j"]
                },
                {
                  "name":"信息安全",
                  "tags":["Web安全","安全开发","网络安全","Kali","加密解密","系统安全","渗透测试","信息隐藏"]
                },
                {
                  "name":"Web前端",
                  "tags":["HTML5","Web","NodeJS","HTML","JavaScript","jQuery","Bootstrap","React","Vuejs","CSS"]
                },
                {
                  "name":"计算机专业课",
                  "tags":["新手入门","算法","计算机专业课","设计模式","汇编"]
                },
                {
                  "name":"其他技术",
                  "tags":["Swift","Windows","Electron","Android","R"]
                }
          ],
          courses_content: {
              "count":477,
              "page_size":16,
              "page":1,
              "next":"https://www.shiyanlou.com/api/v2/courses/?base_order=%E7%BB%BC%E5%90%88&category=%E5%85%A8%E9%83%A8&category_order=%E5%B7%B2%E4%B8%8A%E7%BA%BF&fee=all&page=2&preview=false&sort=default&tag=%E5%85%A8%E9%83%A8&type_order=%E5%85%A8%E9%83%A8",
              "previous":null,
              "results":[
                  {
                      "id":1,
                      "name":"Linux 基础入门（新版）",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/ncn1.jpg",
                      "description":"要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。",
                      "students_count":255460,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1330,
                      "name":"Python 新手入门课",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/courses/uid8504-20190712-1562930274699",
                      "description":"极度舒适的新手入门课程，面向完全没有编程基础的同学。你将在一下午入门 Linux、Python 基础和Github 常用命令，为未来的编程大楼打下稳固的基础。",
                      "students_count":12585,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1330",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1330/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1330/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":63,
                      "name":"新手指南之玩转实验楼",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1542592005404_【63】-【新手指南之玩转实验楼】.png",
                      "description":"本实验通过一个 C 语言的编程例子学习实验楼的使用方法，面向完全没有编程经验的用户。从中我们将了解到实验楼的实验精神：“从实践切入，依靠交互性、操作性更强的课程，理论学习+动手实践共同激发你的创造力。”",
                      "students_count":392767,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/63",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/63/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/63/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":608,
                      "name":"C++ 实现简易 Docker 容器",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1542592873707_【608】-【C++实现简易Docker容器】.png",
                      "description":"Docker 的本质是使用 LXC 实现类似虚拟机的功能，进而节省的硬件资源提供给用户更多的计算资源。本项目将 C++ 与 Linux 的 Namespace 及 Control Group 技术相结合，实现一个简易 Docker 容器。",
                      "students_count":1600,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/608",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/608/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/608/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":810,
                      "name":"Spring MVC 简易教程",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/1517283015763.png",
                      "description":"Spring MVC 属于 SpringFrameWork 的后续产品，已经融合在 Spring Web Flow 里面，是一个强大灵活的 Web 框架。Spring MVC 提供了一个 DispatcherServlet 作为前端控制器来分配请求。通过策略接口，Spring 框架是高度可配置的。Spring MVC 还包含多种视图技术，如 Java Server Pages（JSP）、Velocity、Tiles、iText 和 POI 等。",
                      "students_count":3338,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/810",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/810/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/810/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":146,
                      "name":"C语言版 Flappy Bird",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1542592227963_【146】-【C语言版FlappyBird】.png",
                      "description":"Flappy Bird 是之前十分热门的小游戏，后来出现多个衍生版本。本节课程将使用 C 语言来实现一个字符版 Flappy Bird，感受不一样的风采。本课程学习后将会熟悉C语言，以及绘图库ncurses的使用。本课程适合有C语言基础，想做练手项目的同学，可以有效的学习ncurses绘图库的使用，做一些有趣的事情。",
                      "students_count":5880,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/146",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/146/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/146/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1250,
                      "name":"使用 Python 批量爬取网站信息",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1553137229452_【1250】-【使用Python批量爬取网站信息】(1).png",
                      "description":"本实验主要通过 Python 实现一个命令行参数控制的爬虫程序，可以批量爬取网站的 URLs、JS 文件及其中的端点、子域名和 DNS 有关的数据信息等，能够匹配自定义正则表达式的字符串，还支持将最终结果导出为 JSON 格式或 CSV 格式。",
                      "students_count":919,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1250",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1250/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1250/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1035,
                      "name":"Git 与 GitHub 入门实践",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1550728729236_【1035】-【Git与GitHub入门实践】(1).png",
                      "description":"本课程为 Git 与 GitHub 的入门课程，本着实用的原则，针对零基础同学，以图文的形式详细介绍了 Git & GitHub 结合使用的基本操作。包括以下知识点：在 GitHub 上创建仓库、克隆 GitHub 上的仓库到本地、添加修改到暂存区以及撤销修改、配置个人信息、版本回退、处理提交时间线分叉问题、使用本地提交变化记录、添加 SSH 关联授权、为 Git 命令设置别名、刷新本地分支信息、创建新的本地分支、将新分支中的提交推送至远程仓库、本地分支跟踪远程分支、删除远程分支、本地分支的更名与删除等。",
                      "students_count":6768,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1035",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1035/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1035/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1380,
                      "name":"基于 Ansible + Celery 的运维开发平台",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/courses/uid770606-20190926-1569464739617",
                      "description":"这篇课程为大家提供一种管理服务器在 1000 台以内的自动化运维方案，主要实现自动化运维方案里的集中化管理的核心部分；可以为运维工作的同学提供一种解决日常工作中批量处理服务器维护性工作的方案，为从事自动化运维开发的同学提供一种自动化运维的实现思路。",
                      "students_count":19,
                      "fee_type":"bootcamp",
                      "price":9900,
                      "real_price":9900,
                      "html_url":"/courses/1380",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1380/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1380/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1127,
                      "name":"Django 基础教程",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1531706079197_【1127】-【Django基础教程】.png",
                      "description":"本课程主要讲解了Python的Django框架的基础知识。通过学习本课程，可以熟悉Django框架的组成结构，并能在学习过程中了解Django的强大功能。",
                      "students_count":12804,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1127",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1127/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1127/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":109,
                      "name":"JDK 核心 API",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/ncn109.jpg",
                      "description":"本次课程讲解了 JDK 中常用的 API，了解这些 API 对日常的开发十分重要。课程讲解了常用的字符串数字处理函数，之后还讲解了 Java 开发中最基础也是最重要的集合框架，中间还讲解了 Java 中的输入输出流，最后讲解了多线程的相关知识。",
                      "students_count":13835,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/109",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/109/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/109/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1165,
                      "name":"Java 单元测试实战",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1539678059878_[1182]-[Java-单元测试实战].jpg",
                      "description":"Java 单元测试实战，本节课程主要讲解如何使用Junit来进行单元测试，会学习到单元测试的基本概念以及Junit的基本操作。",
                      "students_count":201,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1165",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1165/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1165/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":596,
                      "name":"Python3  简明教程",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1542592801417_【596】-【Python3简明教程】.png",
                      "description":"简明易懂的 Python3 课程，不仅适用于那些有其它语言基础的同学，对没有编程经验的同学也非常友好。本课程不仅讲解了 Python3 基础知识，还介绍了 PEP8、Virtualenv、测试、项目结构以及 Flask 相关内容",
                      "students_count":65947,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/596",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/596/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/596/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1236,
                      "name":"HTML 基础课程",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/1548126810319.png",
                      "description":"课程从网站的基础概念开始，让你了解网站的运行机制之后，开始逐步深入。带领你学习网页制作所需要的 HTML 基础知识，了解各种常用标签的意义以及基本用法。丰富的代码实例，让你直观的看到各类标签的具体效果，加深对 HTML 内容的理解。",
                      "students_count":5596,
                      "fee_type":"free",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/1236",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1236/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1236/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":335,
                      "name":"Pandas 时间序列数据处理",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/1543913883545.png",
                      "description":"本课程主要讲解利用 Pandas 对数据集进行快速读取、转换、过滤、分析等一系列操作。同样，Pandas 已经被证明为是非常强大的用于处理时间序列数据的工具。重点介绍所有 Pandas 在时间序列数据上的处理方法。",
                      "students_count":670,
                      "fee_type":"member",
                      "price":0,
                      "real_price":0,
                      "html_url":"/courses/335",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/335/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/335/follow/",
                      "status":"online_public"
                  },
                  {
                      "id":1162,
                      "name":"Python 使用机器学习玩转 Flappy Bird 游戏",
                      "picture_url":"https://dn-simplecloud.shiyanlou.com/course/1540797923928_[1162]-[Python-使用机器学习玩转FlappyBird游戏].jpg",
                      "description":"Flappy bird 是一款 2014 年 2 月突然爆红的趣味小游戏，玩家通过点击屏幕来控制一只小鸟飞行，并避开沿途高低不平的管子。本训练营通过学习使用纯人工操作，传统计算机视觉，深度学习这三种不同的方式来玩转 pygame 版的 flappy bird 游戏。让用户掌握 python 的基本操作，图像基本操作和深度学习相关知识。",
                      "students_count":830,
                      "fee_type":"bootcamp",
                      "price":6900,
                      "real_price":6900,
                      "html_url":"/courses/1162",
                      "api_url":"https://www.shiyanlou.com/api/v2/courses/1162/",
                      "follow_url":"https://www.shiyanlou.com/api/v2/courses/1162/follow/",
                      "status":"online_public"
                  }
              ]
          },
          current_category: '全部',
          current_tag: '全部',
          current_base_order: '综合',
          current_page: 1,
          all_page: 1,
        }
    },

    methods: {
        change_current_category(category) {
            console.log(category)
            this.current_category = category;
        },
        change_current_tag(tag) {
            this.current_tag = tag;
        },
        change_current_base_order(order) {
            this.current_base_order = order;
            this.current_page = 1;
        }
    }
}

</script>
<style type="text/css" scoped>
.courses_category {
    width: 1170px;
    padding: 0 50px;
    margin-left: auto;
    margin-right: auto;
}

/* 课程分类区域 */
.courses_category_div {
    width: 100%;
    background: #fff;
    padding: 20px;
    border: 1px solid #eee;
    margin-bottom: 10px;
}

.courses_category_title {
    font-size: 16px;
    color: #666;
    width: 50px;
    min-width: 50px;
}

.courses_selection {
    display: flex;
    margin-bottom: 10px;
    /*flex-wrap: wrap;*/
}

.courses_category_tag {
    border-bottom: 2px solid #eee;

}

.courses_selection_card {
    display: flex;
    flex-wrap: wrap;
    /* margin-bottom: 20px; */
}

/* 分为左右两部分 */
.courses_order_div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 0;
}

.left_order_button_div {
    display: flex;
    align-items: center;
}

.right_order_button_div {
    display: flex;
    /*flex-basis: baseline;*/
    align-items: baseline;
}

/* 排序按钮区域 */
.order_div {
    display: flex;
}

.base_order_div {
    /*display: flex;*/
    margin-right: 50px;
}

.order_button {
    margin-left: -1px;
    text-decoration: none;
}

/* type order 的二级子菜单及其父组件 */
.type_order_div {
    position: relative;
    padding-right: 20px;
    padding-bottom: 10px;

}

.type_order_div:hover #sub_type_order_ul{
    display: block;

}

.sub_type_order_li {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-bottom: 5px;
}

.sub_type_order_a, .courses_selection_sub_selection_a {
    display: block;
    color: #3a3a3a;
    padding: 6px 0 0;
    font-size: 14px;
    cursor: pointer;
}

.courses_selection_sub_selection_a:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .225rem;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
}

.sub_type_order_a:hover, .courses_selection_sub_selection_a:hover{
    color: #08bf91;
}

#sub_type_order_ul {
    display: none;
    position: absolute;
    min-width: 105px;
    background: #fff;
    padding: 0;
    margin: 2px 0;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-bottom: 5px;
    right: -20px;
}

/* 加入私有课按钮 */
.add_to_person_courses_button {
    display: block;
    font-size: 14px;
    color: #08BF91;
    background: #fff;
    padding: 3px 20px;
    border: 1px solid #08BF91;
    border-radius: 36px;
    box-shadow: none;
}

/* 课程 card 区域的样式 */

.courses_div {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.courses_selection_course_card {
    width: 25%;
    margin: 0 0 20px;
    padding: 0 15px;
}

/* 换页区域 */

.tab_page_div {
    margin: 0 auto;
}

/* buttons */
.selection_button_a {
    display: inline-block;
    margin: 0 8px 10px 0;
    padding: 1px 5px;
    font-size: 15px;
    color: #666;
    border-radius: 15px;
    cursor: pointer;
    transition: color 1s ease;
    transition: background .5s ease;
    text-decoration: none;
}

.selection_button_a:hover {
    color: #fff;
    background: #08bf91;
}

.selected {
    color: #fff;
    background: #08bf91;
}

.order_button {
    display: block;
    color: #999;
    border: 1px solid #c9c9c9;
    padding: 3px 5px;
    font-size: 14px;
}

.order_button:hover, .order_button_selected {
    border: 1px solid #08bf91;
    color: #39cca7;
}
</style>
