<template>
    <div class="course_card_div">
        <div class="course_div">
            <router-link tag="a"
                         class="course_img_a"
                         :to="{ name: '', params: {id: data.id} }">

                <div class="card">
                  <div class="card_one">
                    <div class="card_first">
                        <div class="card_title">
                          <span></span>{{ data.title }}
                        </div>
                        <div class="card_desc">
                          <span>简介：</span>{{ data.dec }}
                        </div>
                        <div class="card_label">
                          <span>服务区域：</span>{{ data.address }}
                        </div>
                    </div>
                    <div class="card_two">
                        <div class="card_name">
                          {{ data.name }}
                        </div>
                        <div class="card_phone">
                          <span>联系方式：</span>{{ data.contact_phone }}
                        </div>
                        <div class="card_address">
                          <span>地址：</span>{{ data.address }}
                        </div>
                    </div>
                  </div>

                </div>

                <!-- <div class="course_img_div">
                    <img :src="data.picture_url" class="course_img_img">
                </div> -->
                <!-- <div class="course_body">
                    <div class="course_description_title_div">
                        {{ data.name }}
                    </div>
                    <div class="course_description_div">
                        {{ data.description }}
                    </div>
                    <div class="course_information_div">
                        <div>
                            <i class="fa fa-users"></i>
                            <span class="members_p">{{ data.students_count }}</span>
                        </div>
                        <p class="course_type_p"
                        :class="course_type_class[data.fee_type]"
                        >{{ course_type_name[data.fee_type] }}</p>
                    </div>
                </div> -->
            </router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'CustomerCard',
    data () {
        return {

        }
    },
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>

<style type="text/css" scoped>


.course_card_div {
    min-height: 150px;
    /* border: 1px solid #ededed; */
    box-sizing: border-box;
}

/**/
.course_div {
    width: 100%;
    height: 100%;
}

.card {
  /* display: flex; */
  color: #666;
}
.card_one {
  display: flex;
  align-items: center;
}
.card_first {
  width: 60%;
  margin: 10px 40px 10px 20px;
  /* font-size: 1em; */
}
.card_two {
  width: 40%;
  margin-right: 5px;
}

.card_title, .card_desc, .card_label, .card_name, .card_phone, .card_address {
  margin-bottom: 8px;
}
.card_desc{
  padding: 10px 0;
}
.card_phone {
  color: #fd5f39;
  padding-top: 10px;
}
.card_title {
  color: #00b38a;
}
.card_label {
  background-color: #fafafa;
}
.card_desc, .card_label, .card_phone, .card_address {
  font-size: 14px;
}

.course_img_div {
    width: 100%;
    height: 150px;
}

.course_img_img {
    width: 100%;
}

.course_img_a {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #ededed;
    /* box-shadow: 1px 1px 1px 1px #ddd; */
    text-decoration: none;
}

.course_img_a:hover {
    /* box-shadow: 0 1px 30px 0 #d2d2d2; */
}

/**/
.course_body {
    position: relative;
    background: #fff;
    height: 100px;
    bottom: 0;
    width: 100%;
    transition: bottom .3s;
}

.course_img_a:hover .course_body {
    /* bottom: 54.5px; */
}

.course_img_a:hover .course_description_div {
    /* height: 54.5px; */
}

.course_description_title_div {
    box-sizing: border-box;
    color: #666;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 20px 10px 0;
}

.course_description_div {
    height: 0;
    bottom: 0;
    padding: 0 10px;
    margin-top: 10px;
    font-size: 13px;
    color: #666;
    position: relative;
    overflow: hidden;
    transition: height .3s;
}

.course_information_div {
    box-sizing: border-box;
    height: 43px;
    color: #9b9da2;
    width: 100%;
    margin-top: -12px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

/* course_type css设计 */
.course_type_p {
    min-height: 23px;
    color: #fff;
    padding: 3px 10px;
    border-radius: 100px;
}

.free_course_p {
    background: #59cf4a;
}

.training_course_p {
    background: #f66e6e;
}

.vip_course_p {
    background: #ffae0f;
}
@media (max-width: 480px) {
   .courses_category {
     font-size: 9px;
   }
   .card_first {
     margin: 10px;
     /* font-size: 1em; */
   }
   .card_desc, .card_label, .card_phone, .card_address {
     font-size: 7px;
   }
}

</style>
