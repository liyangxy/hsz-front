<template>
    <div class="course_card_div">
        <div class="course_div">
            <router-link tag="a"
                         class="course_img_a"
                         :to="{ name: 'course', params: {id: data.id} }">
                <!-- <div class="course_img_div">
                    <img :src="data.picture_url" class="course_img_img">
                </div> -->
                <div class="course_body">
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
                </div>
            </router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'CourseCard',
    data () {
        return {
            course_type_class: {
                'free': 'free_course_p',
                'member': 'vip_course_p',
                'bootcamp': 'training_course_p',
                '': ''
            },
            course_type_name: {
                'free': '免费',
                'member': '会员',
                'bootcamp': '训练营',
                '': ''
            }
        }
    },
    props: {
        data: {
            // type: Object,
            require: true,
        }
    }
}
</script>
