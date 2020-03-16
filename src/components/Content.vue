<template>
    <div class="courses_category">
        <div class="courses_category_div">
            <div class="courses_category_diretion courses_selection">
                <div class="courses_category_title"> 城市：</div>
                <div class="courses_selection_card">
                    <a class="selection_button_a"
                       href="javascript:;"
                       v-for="city in citys"
                       :key="city['code']"
                       :class="query.current_city==city['code'] ? 'selected' : ''"
                       @click="change_current_city(city['code'])"
                    >
                        {{ city['name'] }}
                    </a>
                </div>
            </div>
            <div class="courses_category_tag courses_selection" v-show="show_district">
                <div class="courses_category_title"> 地区： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="district in districts"
                           :key="district.code"
                           :class="query.current_district==district.code ? 'selected' : ''"

                           @click="change_current_district(district.code)"
                        >
                           {{ district.name }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_area">
                <div class="courses_category_title"> 商圈： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="area in areas"
                           :key="area.id"
                           :class="query.current_area == area.id ? 'selected' : ''"
                           @click="change_current_area(area.id)"
                        >
                           {{ area.name }}
                        </a>
                </div>
            </div>

            <div class="area courses_selection recovery_category">
                <div class="courses_category_title"> 类别： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="category in recovery_category"
                           :key="category.code"
                           :class="query.current_level_one==category.code ? 'selected' : ''"
                           @click="change_current_level_one(category.code)"
                        >
                           {{ category.name }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_level_two">
                <div class="courses_category_title"> 二级： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="level_two_category in level_two_data"
                           :key="level_two_category.code"
                           :class="query.current_level_two==level_two_category.code ? 'selected' : ''"

                           @click="change_current_level_two(level_two_category.code)"
                        >
                           {{ level_two_category.name }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_level_three">
                <div class="courses_category_title"> 细类： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="level_three_category in level_three_data"
                           :key="level_three_category.code"
                           :class="query.current_level_three==level_three_category.code ? 'selected' : ''"

                           @click="change_current_level_three(level_three_category.code)"
                        >
                           {{ level_three_category.name }}
                        </a>
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
        <!-- <div class="courses_div">
            <CourseCard
                class="courses_selection_course_card"
                v-for="(course_info, index) in courses_content['results']"
                :key="index"
                :data="course_info"
            >

            </CourseCard>
        </div> -->
        <!-- <div class="courses_div">
            <TempCard
                class="courses_selection_course_card"
                v-for="(course_info, index) in courses_content['results']"
                :key="index"
                :data="course_info"
            >

            </TempCard>
        </div> -->
        <div class="courses_div">
            <CustomerCard
                class="courses_selection_course_card"
                v-for="(course_info, index) in business_data"
                :key="index"
                :data="course_info"
            >

            </CustomerCard>
        </div>

        <div>
          <TabPage :page_info = "page_data" @changePage="updateCurrentPage">
          </TabPage>
        </div>

    </div>
</template>

<script type="text/javascript">
// import CourseCard from '@/components/CourseCard.vue';
// import CourseCard from '@/components/CourseCard.vue';
import CustomerCard from '@/components/CustomerCard.vue';
import TabPage from '@/components/TabPage.vue';

export default {
    components: {
        CustomerCard,
        TabPage
    },
    data () {
        return {
          citys: [],
          recovery_category: [],
          page_info : {},
          courses_content: {},
          business_data: [],
          page_data : {},
          districts : [],
          level_two_data : [],
          level_three_data : [],
          areas : [],
          temp_area : [],
          temp_sub : [],
          current_base_order: '综合',
          show_district: false,
          show_area: false,
          show_level_two: false,
          show_level_three: false,
          currentPage: null,
          query : {
              current_city: '',
              current_district: '',
              current_area: '',
              current_level_one: '',
              current_level_two: '',
              current_level_three: '',
              page: 1,
          },
        }
    },

    created() {
        if (localStorage.getItem("citys")) {
            console.log('local.citys')
            this.citys = JSON.parse(localStorage.getItem("citys"));
        } else {
            this.$api.api.city().then((res) => {
                console.log('api.citys')
                // console.log(res)
                this.citys = res.data;
                localStorage.setItem("citys", JSON.stringify(res.data));
            }).catch((err) => {
                this.$message({
                    showClose: true,
                    message: '发生错误',
                    type: 'error'
                })
            })
        }

        if (localStorage.getItem("recovery_category")) {
            console.log('local.recovery_category')
            this.recovery_category = JSON.parse(localStorage.getItem("recovery_category"));
        } else {
            this.$api.api.allRecycleCategory().then((res) => {
                console.log('api.recovery_category')
                // console.log(res)
                this.recovery_category = res.data;
                localStorage.setItem("recovery_category", JSON.stringify(res.data));
            }).catch((err) => {
                this.$message({
                    showClose: true,
                    message: '发生错误',
                    type: 'error'
                })
            })
        }
        this.getShowData();
    },

    watch: {
        query: {
            handler(newVal, oldVal) {
                this.getShowData();
            },
            immediate: true,
            deep: true,
        },
    },

    methods: {
        getShowData() {
            let params = {};
            for(let key  in this.query){
                if (this.query[key] != '') {
                    params[key] = this.query[key];
                }
            }
            this.$api.api.getBusinessData(params).then((res) => {
                // console.log(res)
                this.business_data = res.data;
                this.page_data = res.pages;
            }).catch((err) => {
                this.$message({
                    showClose: true,
                    message: '发生错误',
                    type: 'error'
                })
            })
        },
        change_current_city(city) {
            if (city == this.query.current_city) {
                this.query.current_city = '';
                this.query.current_district = '';
                this.query.current_area = '';
                this.show_district = false;
            } else {
                this.districts = [];
                this.citys.some((item) => {
                    if (item.code == city) {
                        this.temp_area = item.children;
                        item.children.some((item) => {
                            this.districts.push(item)
                        });
                        return true;
                    }
                    return false;
                });
                this.query.current_city = city;
                this.query.current_district = '';
                this.query.current_area = '';
                this.show_district = true;
            }
            this.query.page = 1;
            this.show_area = false;
        },
        change_current_district(district) {
            if (district == this.query.current_district) {
                this.query.current_district = '';
                this.query.current_area = '';
                this.show_area = false;
            } else {
                this.query.current_district = district;
                this.query.current_area = '';
                this.temp_area.some((item) => {
                    if (item.code == district) {
                      this.areas = item.business_circles;
                      return true;
                    }
                    return false;
                });
                this.show_area = this.areas.length > 0 ? true : false;
            }
            this.query.page = 1;
        },
        change_current_area(area) {
            if (area == this.query.current_area) {
                this.query.current_area = '';
            } else {
                this.query.current_area = area;
            }
            this.query.page = 1;
        },
        change_current_level_one(level_one) {
            if (level_one == this.query.current_level_one) {
                this.query.current_level_one = '';
                this.query.current_level_two = '';
                this.query.current_level_three = '';
                this.show_level_two = false;
            } else {
                this.level_two_data = [];
                this.recovery_category.some((item) => {
                    if (item.code == level_one) {
                        this.temp_sub = item.children;
                        item.children.some((item) => {
                            let temp_data = {};
                            temp_data.code = item.code;
                            temp_data.name = item.name;
                            this.level_two_data.push(temp_data)
                        });
                        return true;
                    }
                    return false;
                });
                this.query.current_level_one = level_one;
                this.query.current_level_two = '';
                this.query.current_level_three = '';
                this.show_level_two = true;
            }
            this.query.page = 1;
            this.show_level_three = false;
        },
        change_current_level_two(level_two) {
            if (level_two == this.query.current_level_two) {
                this.query.current_level_two = '';
                this.query.current_level_three = '';
                this.show_level_three = false;
            } else {
                this.temp_sub.some((item) => {
                    if (item.code == level_two) {
                        this.level_three_data = item.children;
                        return true;
                    }
                    return false;
                });
                this.query.current_level_two = level_two;
                this.query.current_level_three = '';
                this.show_level_three = true;
            }
            this.query.page = 1;
        },
        change_current_level_three(level_three) {
            if (level_three == this.query.current_level_three) {
                this.query.current_level_three = '';
            } else {
                this.query.current_level_three = level_three;
            }
            this.query.page = 1;
        },
        change_current_base_order(order) {
            this.current_base_order = order;
            this.current_page = 1;
        },
        updateCurrentPage(page) {
            this.currentPage = page;
            this.query.page = page;
        }
    }
}

</script>
<style type="text/css" scoped>
.courses_category {
    /* width: 1170px; */
    max-width: 960px;
    padding: 0 10px;
    margin: 10px auto;
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
    max-width: 80px;
    min-width: 50px;
    /* margin-right: auto; */
}

.courses_selection {
    display: flex;
    margin-bottom: 10px;
    /* position: relative; */
    /*flex-wrap: wrap;*/
}

.area {
    /* border-bottom: 2px solid #eee; */
}

.recovery_category {
    padding-top: 10px;
    border-top: 2px solid #eee;
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
    width: 100%;
    margin: 0 0 20px;
    padding: 0 15px ;
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
    border-radius: 2px;
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

@media (max-width: 480px) {
   .selection_button_a {
     font-size: 10px;
   }
   .courses_category_title, .order_button {
     font-size: 13px;
   }
   .tab_page_a {
     font-size: 10px;
   }
}
</style>
