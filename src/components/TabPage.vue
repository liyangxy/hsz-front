<template>
    <div class="tab_page_div">
            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page(current_page-1)"
            >
                上一页
            </a>
            <!-- 具体的页数有3种显示模式：
                 1. 当前页的前后2个。
                 2. '...' 会在当前页的前后2个没有涉及到third 和 last-third 时出现。
                 3. 最前面的两个和最后面的两个恒出现。

                 为了区分：
                 前面一个...用了'...'，
                 后面一个...用了'... '。
             -->
            <a href="javascript:;" class="tab_page_a"
               v-for="(page_info, page_index) in showing_page_info"
               :key="page_index"
               :class="current_page==page_info ? 'page_active':''"
               v-show="(current_page - 2 <= page_info && page_info <= current_page + 2)
                        || (page_info == 1 || page_info == 2 )
                        || (page_info == all_page || page_info == all_page - 1)
                        || (page_info == '...' && current_page - 2 > 1)
                        || (page_info == '... ' && current_page + 2 < all_page - 1)"
               @click="change_current_page(page_info)"
            >
            {{ page_info }}
            </a>

            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page(current_page+1)"
            >
                下一页
            </a>
    </div>
</template>
<script type="text/javascript">
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'TabPage',

    data () {
        return {
            current_page: 1,
            all_page: 1,
            page_size: 10,
            previous: null,
            next: null,
            showing_page_info: [],
        }
    },
    props: {
        page_info: {
            type: Object,
            require: true
        }
    },

    // computed: {
    //     ...mapState({
    //         current_page: state => state.coursesCategory.current_page,
    //         all_page: state => state.coursesCategory.all_page
    //     }),
    //     ...mapGetters({
    //         showing_page_info: 'coursesCategory/showing_page_info'
    //     })
    //
    // },

    created() {
        this.init();
    },

    methods: {
        init() {
            console.log(this.page_info)
            this.current_page = this.page_info.page;
            this.all_page = Math.ceil(this.page_info.count / this.page_info.page_size);
            this.previous = this.page_info.previous;
            this.next = this.page_info.next;
            console.log(this.all_page)
            let page_num = [];
            for (var i = 1; i <= this.all_page; i++) {
                page_num.push(i)
                if (i === 2) {
                    page_num.push('...')
                } else if (i === this.all_page - 2) {
                    page_num.push('... ')
                }
            }
            console.log(page_num)
            this.showing_page_info = page_num;
        },

        change_current_page(page) {
            if (page > this.all_page || page < 1 || page === '...') {
                return;
            }
            this.current_page = page;
            this.$router.push( { path : '/' } ).catch(() =>{});
        },

    },

}

</script>
<style type="text/css" scoped>
.tab_page_div {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.tab_page_a {
    display: block;
    font-size: 14px;
    color: #565a61;
    background: #fff;
    padding: 6px 12px;
    margin: 0 2px;
    text-decoration: none;
}

.tab_page_a:hover, .page_active {
    color: #fff;
    background: #0c9;
}

@media (max-width: 480px) {
   .tab_page_div {
     margin: 10px 0;
   }
   .tab_page_a {
     font-size: 8px;
     padding: 2px 3px;
     margin: 1px;
   }
}
</style>
