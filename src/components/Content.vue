<template>
    <div class="courses_category">
        <div class="courses_category_div">
            <div class="courses_category_diretion courses_selection">
                <div class="courses_category_title"> 城市：</div>
                <div class="courses_selection_card">
                    <a class="selection_button_a"
                       href="javascript:;"
                       v-for="city in citys"
                       :key="city['city']"
                       :class="current_city==city['city'] ? 'selected' : ''"
                       @click="change_current_city(city['city'])"
                    >
                        {{ city['city'] }}
                    </a>
                </div>
            </div>
            <div class="courses_category_tag courses_selection" v-show="show_district">
                <div class="courses_category_title"> 地区： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="district in districts"
                           :key="district"
                           :class="current_district==district ? 'selected' : ''"

                           @click="change_current_district(district)"
                        >
                           {{ district }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_area">
                <div class="courses_category_title"> 商圈： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="area_information in areas"
                           :key="area_information"
                           :class="current_area==area_information ? 'selected' : ''"
                           @click="change_current_area(area_information)"
                        >
                           {{ area_information }}
                        </a>
                </div>
            </div>

            <div class="area courses_selection recovery_category">
                <div class="courses_category_title"> 类别： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="level1 in recovery_category"
                           :key="level1['level1']"
                           :class="current_level_one==level1['level1'] ? 'selected' : ''"
                           @click="change_current_level_one(level1['level1'])"
                        >
                           {{ level1['level1'] }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_level_two">
                <div class="courses_category_title"> 二级： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="level_two in level_two_data"
                           :key="level_two"
                           :class="current_level_two==level_two ? 'selected' : ''"

                           @click="change_current_level_two(level_two)"
                        >
                           {{ level_two }}
                        </a>
                </div>
            </div>
            <div class="area courses_selection" v-show="show_level_three">
                <div class="courses_category_title"> 细类： </div>
                <div class="courses_selection_card">
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="level_three in level_three_data"
                           :key="level_three"
                           :class="current_level_three==level_three ? 'selected' : ''"

                           @click="change_current_level_three(level_three)"
                        >
                           {{ level_three }}
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
          courses_category1: ['全部', '深圳', '北京', '上海', '广州'],
          tags_category1: [
            ["Python","机器学习","Linux","Web","大数据","C","Java","PHP","C++","R","计算机专业课","Spark","NodeJS","Web安全","Hadoop","GO","CSS","网络安全","HTML5","JavaScript","系统安全","网络","Git","jQuery",
            "安全开发","SQL","Scala","NoSQL","Shell","Flask","OpenCV","渗透测试","HTML","算法","MySQL","ThinkPHP","SDN","Vuejs","加密解密","区块链","云计算","OpenStack","Docker","新手入门","设计模式","Redis",
            "React","Django","SSM","Kali","Ruby","Laravel","Bootstrap","SSH","Spring","Ansible","ROS","信息隐藏","SHH","信息安全","Swift","汇编","MongoDB","Hbase","Nginx","Kafka","TensorFlow"],
            ['宝安', '南山', '龙华', '福田', '龙岗', '罗湖', '布吉', '光明', '坪山', '盐田', '大棚新区', '深圳周边'],
            ["Linux","Shell","网络","Nginx","Ansible","Git"],
            ["Hadoop","Spark","Scala","Docker","机器学习","SDN","Hbase","Hive","Mahout","Kafka","云计算","大数据","TensorFlow","知识图谱"],
            ["SQL","NoSQL","MongoDB","MySQL","Redis","Neo4j"],
            ["Web安全","安全开发","网络安全","Kali","加密解密","系统安全","渗透测试","信息隐藏"],
            ["HTML5","Web","NodeJS","HTML","JavaScript","jQuery","Bootstrap","React","Vuejs","CSS"],
            ["新手入门","算法","计算机专业课","设计模式","汇编"],
            ["Swift","Windows","Electron","Android","R"],
          ],
          citys: [
                {
                  'city': '上海',
                  'districts': [
                    {
                       "district":"浦东",
                       "area":[
                           "北蔡",
                           "八佰伴",
                           "碧云",
                           "川沙",
                           "曹路",
                           "大团",
                           "东昌路站",
                           "高行",
                           "高桥",
                           "航头 ",
                           "花木",
                           "合庆",
                           "惠南",
                           "金桥",
                           "金杨新村",
                           "江镇",
                           "康桥",
                           "陆家嘴",
                           "老港",
                           "临港新城",
                           "联洋",
                           "芦潮港",
                           "龙阳路站",
                           "梅园",
                           "泥城",
                           "南码头",
                           "南汇周边",
                           "浦东周边",
                           "三林",
                           "世博滨江",
                           "上南",
                           "书院",
                           "三灶",
                           "世纪公园",
                           "世博",
                           "上钢新村",
                           "唐镇",
                           "塘桥",
                           "外高桥",
                           "潍坊新村",
                           "王港",
                           "万祥",
                           "新场",
                           "宣桥",
                           "源深",
                           "杨思",
                           "御桥",
                           "洋泾",
                           "杨东",
                           "张江",
                           "祝桥 ",
                           "周浦",
                           "竹园"
                       ]
                   },
                   {
                       "district":"闵行",
                       "area":[
                           "北桥",
                           "漕宝路",
                           "春申",
                           "古美罗阳",
                           "航华",
                           "华漕",
                           "虹桥",
                           "静安新城",
                           "金虹桥",
                           "江川路",
                           "老闵行",
                           "龙柏金汇",
                           "梅陇",
                           "马桥",
                           "闵行周边",
                           "浦江",
                           "七宝",
                           "七莘路",
                           "吴泾",
                           "莘庄",
                           "莘庄工业区",
                           "颛桥",
                           "诸翟"
                       ]
                   },
                   {
                       "district":"松江",
                       "area":[
                           "车墩",
                           "洞泾",
                           "大港",
                           "九亭",
                           "泖港",
                           "茸北",
                           "佘山",
                           "泗泾",
                           "松江大学城",
                           "松江新城",
                           "松江老城",
                           "松江工业区",
                           "松江周边",
                           "小昆山",
                           "莘闵",
                           "新浜",
                           "新桥",
                           "岳阳",
                           "永丰",
                           "叶榭",
                           "中山"
                       ]
                   },
                   {
                       "district":"宝山",
                       "area":[
                           "大华",
                           "大场",
                           "顾村",
                           "共富新村",
                           "高境",
                           "共康",
                           "罗店",
                           "罗泾",
                           "刘行",
                           "罗南",
                           "上海大学",
                           "淞南",
                           "泗塘",
                           "水产路站",
                           "淞宝",
                           "通河新村",
                           "杨行",
                           "友谊路",
                           "月浦",
                           "张庙"
                       ]
                   },
                   {
                       "district":"嘉定",
                       "area":[
                           "安亭",
                           "曹王",
                           "丰庄",
                           "方泰",
                           "封浜",
                           "黄渡",
                           "华亭",
                           "江桥新城",
                           "嘉定城区",
                           "菊园新区",
                           "金鹤新城",
                           "嘉定新城",
                           "嘉定周边",
                           "娄塘",
                           "马陆",
                           "南翔",
                           "唐行",
                           "外冈",
                           "徐行",
                           "真新",
                           "朱桥"
                       ]
                   },
                   {
                       "district":"徐汇",
                       "area":[
                           "漕河泾",
                           "漕宝路站",
                           "复兴中路",
                           "湖南路",
                           "华东理工",
                           "华泾",
                           "衡山路",
                           "淮海西路",
                           "建国西路",
                           "康建",
                           "龙华",
                           "上海南站",
                           "上海师大",
                           "上海植物园",
                           "田林",
                           "万体馆",
                           "徐汇滨江",
                           "徐家汇",
                           "斜土路",
                           "襄阳公园",
                           "徐汇周边",
                           "长桥",
                           "肇嘉浜路站"
                       ]
                   },
                   {
                       "district":"青浦",
                       "area":[
                           "白鹤 ",
                           "凤溪",
                           "华新",
                           "金泽",
                           "练塘",
                           "青浦工业园区",
                           "青浦周边",
                           "青浦新城",
                           "徐泾 ",
                           "香花桥",
                           "夏阳",
                           "徐泾北城",
                           "朱家角",
                           "赵巷",
                           "重固"
                       ]
                   },
                   {
                       "district":"静安",
                       "area":[
                           "北京西路",
                           "宝山路",
                           "场中路",
                           "曹家渡",
                           "大宁",
                           "江宁路",
                           "静安寺",
                           "老北站",
                           "南京西路",
                           "彭浦",
                           "市北工业园",
                           "天目西路",
                           "西康路",
                           "新闸路 ",
                           "新客站",
                           "西藏北路",
                           "延长路",
                           "玉佛寺 ",
                           "阳城永和",
                           "闸北公园",
                           "中环共和新路",
                           "芷江西路"
                       ]
                   },
                   {
                       "district":"普陀",
                       "area":[
                           "曹杨",
                           "甘泉宜川",
                           "光新",
                           "华东师大",
                           "环球港",
                           "李子园",
                           "普陀周边",
                           "轻纺市场",
                           "桃浦",
                           "武宁",
                           "万里城",
                           "中远两湾城",
                           "长寿路",
                           "真光",
                           "真如",
                           "长征",
                           "长风"
                       ]
                   },
                   {
                       "district":"杨浦",
                       "area":[
                           "鞍山",
                           "东外滩",
                           "黄兴",
                           "江浦路",
                           "控江路",
                           "平凉路",
                           "五角场",
                           "五角场北",
                           "新华医院",
                           "新江湾城",
                           "运光/复旦",
                           "杨浦公园",
                           "杨浦大桥",
                           "杨浦周边",
                           "中原",
                           "周家嘴路",
                           "长阳路",
                           "长白新村"
                       ]
                   },
                   {
                       "district":"奉贤",
                       "area":[
                           "金汇",
                           "南桥",
                           "庄行",
                           "奉城",
                           "柘林",
                           "海湾",
                           "青村",
                           "奉贤周边",
                           "西渡"
                       ]
                   },
                   {
                       "district":"黄浦",
                       "area":[
                           "打浦桥",
                           "董家渡",
                           "复兴公园",
                           "淮海中路",
                           "黄浦世博滨江",
                           "黄浦周边",
                           "鲁班路",
                           "老西门",
                           "南京东路",
                           "南浦大桥",
                           "蓬莱公园",
                           "人民广场",
                           "五里桥",
                           "外滩/十六铺",
                           "新天地",
                           "斜桥",
                           "西藏南路 ",
                           "豫园"
                       ]
                   },
                   {
                       "district":"虹口",
                       "area":[
                           "北外滩",
                           "大柏树",
                           "和平公园",
                           "虹口周家嘴路",
                           "虹口足球场",
                           "江湾",
                           "凉城",
                           "鲁迅公园",
                           "临平路",
                           "曲阳",
                           "四川北路",
                           "四平路",
                           "提篮桥"
                       ]
                   },
                   {
                       "district":"长宁",
                       "area":[
                           "北新泾",
                           "动物园",
                           "古北",
                           "虹桥路",
                           "江苏路站",
                           "天山",
                           "新华路",
                           "仙霞",
                           "西郊公园",
                           "镇宁路",
                           "中山公园",
                           "长宁周边",
                           "周家桥"
                       ]
                   },
                   {
                       "district":"金山",
                       "area":[
                           "漕泾",
                           "枫泾",
                           "金山新城",
                           "金山卫",
                           "金山工业区",
                           "金山周边",
                           "廊下",
                           "吕巷",
                           "石化",
                           "山阳",
                           "亭林",
                           "兴塔",
                           "朱泾",
                           "张堰",
                           "朱行"
                       ]
                   },
                   {
                       "district":"崇明",
                       "area":[
                           "城桥",
                           "堡镇 ",
                           "陈家",
                           "长兴岛"
                       ]
                   },
                   {
                       "district":"上海周边",
                       "area":[
                           "昆山",
                           "其他",
                           "嘉兴",
                           "苏州",
                           "慈溪",
                           "湖州",
                           "南通"
                       ]
                   }
                  ],
                },
                {
                  'city': '深圳',
                  'districts': [
                    {
                       "district":"宝安",
                       "area":[
                           "宝安中心区",
                           "宝安",
                           "宝安周边",
                           "宝安机场",
                           "碧头",
                           "宝华",
                           "宝体",
                           "碧海湾",
                           "福永",
                           "翻身路",
                           "固戍",
                           "港隆城",
                           "后亭",
                           "领航城",
                           "流塘",
                           "马安山",
                           "坪洲",
                           "桥头",
                           "石岩",
                           "沙井",
                           "松岗",
                           "桃源居",
                           "塘尾",
                           "西乡",
                           "新安"
                       ]
                   },
                   {
                       "district":"南山",
                       "area":[
                           "白石洲",
                           "大冲",
                           "大学城",
                           "后海",
                           "海上世界",
                           "华侨城",
                           "海岸城",
                           "科技园",
                           "科苑",
                           "南油",
                           "南山地铁口",
                           "南头",
                           "南山医院",
                           "南山中心区",
                           "前海",
                           "蛇口",
                           "深圳湾",
                           "桃源村",
                           "桃园",
                           "西丽"
                       ]
                   },
                   {
                       "district":"龙华",
                       "area":[
                           "大浪",
                           "观澜",
                           "金地梅陇镇",
                           "锦绣江南",
                           "莱蒙水榭春天",
                           "龙华区政府",
                           "龙华中心区",
                           "龙华",
                           "龙华周边",
                           "梅林关口",
                           "民治",
                           "美丽365花园",
                           "清湖",
                           "深圳北站",
                           "万众城",
                           "油松"
                       ]
                   },
                   {
                       "district":"福田",
                       "area":[
                           "八卦岭",
                           "笔架山",
                           "保税区",
                           "百花",
                           "赤尾",
                           "车公庙",
                           "彩田村",
                           "福华新村",
                           "福民新村",
                           "福田区委",
                           "福田口岸",
                           "福田中心区",
                           "购物公园",
                           "岗厦",
                           "华强北",
                           "华强南",
                           "皇岗",
                           "景田北",
                           "景田南",
                           "莲花村",
                           "莲花北",
                           "荔枝公园",
                           "农科中心",
                           "上梅林",
                           "上步",
                           "石厦",
                           "上沙",
                           "沙尾",
                           "沙嘴",
                           "下梅林",
                           "香蜜湖",
                           "新洲",
                           "下沙",
                           "园岭",
                           "益田村",
                           "竹子林"
                       ]
                   },
                   {
                       "district":"龙岗",
                       "area":[
                           "爱联",
                           "坂田",
                           "大运",
                           "横岗",
                           "龙岗中心城",
                           "龙岗周边",
                           "龙城国际",
                           "南联",
                           "平湖",
                           "坪地",
                           "万科城"
                       ]
                   },
                   {
                       "district":"罗湖",
                       "area":[
                           "布心",
                           "蔡屋围",
                           "翠竹",
                           "草埔",
                           "东门",
                           "东湖",
                           "国贸",
                           "火车站",
                           "洪湖",
                           "湖贝",
                           "黄贝岭",
                           "红岗花园",
                           "莲塘",
                           "泥岗",
                           "清水河",
                           "人民南",
                           "水库",
                           "水贝",
                           "笋岗",
                           "田贝",
                           "文锦渡",
                           "银湖"
                       ]
                   },
                   {
                       "district":"布吉",
                       "area":[
                           "布吉关",
                           "布吉街",
                           "百鸽笼",
                           "丹竹头",
                           "大芬",
                           "康桥",
                           "丽湖",
                           "李朗",
                           "木棉湾",
                           "慢城",
                           "南岭",
                           "上水径",
                           "沙湾",
                           "信义",
                           "下水径",
                           "长龙"
                       ]
                   },
                   {
                       "district":"光明",
                       "area":[
                           "光明",
                           "公明"
                       ]
                   },
                   {
                       "district":"坪山",
                       "area":[
                           "坪山",
                           "坑梓"
                       ]
                   },
                   {
                       "district":"盐田",
                       "area":[
                           "沙头角",
                           "盐田",
                           "大梅沙",
                           "小梅沙"
                       ]
                   },
                   {
                       "district":"大鹏新区",
                       "area":[
                           "大鹏",
                           "南澳",
                           "葵涌"
                       ]
                   },
                   {
                       "district":"深圳周边",
                       "area":[
                           "东莞",
                           "惠州"
                       ]
                   }
                ],
              },
              {
                'city' : '广州',
                'districts' : [
                  {
                       "district":"白云",
                       "area":[
                           "白云大道北",
                           "白云大道南",
                           "东平",
                           "广园路",
                           "桂花岗",
                           "广州大道北",
                           "广花",
                           "黄边",
                           "黄石",
                           "江夏",
                           "景泰",
                           "机场路",
                           "京溪",
                           "金沙洲",
                           "嘉禾望岗",
                           "九佛",
                           "江高镇",
                           "罗冲围 ",
                           "龙归",
                           "梅花园",
                           "南湖",
                           "庆丰",
                           "人和",
                           "三元里",
                           "石井",
                           "沙太北",
                           "沙太中",
                           "沙贝",
                           "石槎路",
                           "同德围",
                           "同和",
                           "太和",
                           "新市",
                           "西槎路",
                           "永泰",
                           "鸦岗",
                           "云城西路",
                           "竹料",
                           "钟落潭",
                           "增槎路"
                       ]
                   },
                   {
                       "district":"天河",
                       "area":[
                           "车陂",
                           "岑村",
                           "东圃",
                           "东莞庄",
                           "岗顶",
                           "黄村",
                           "黄埔大道西",
                           "汇景新城",
                           "科韵路",
                           "柯木塱",
                           "猎德",
                           "林和",
                           "龙口西",
                           "龙洞",
                           "龙口东",
                           "龙怡路",
                           "石牌",
                           "沙河",
                           "沙太南",
                           "棠下",
                           "天河公园",
                           "天河客运站",
                           "体育中心",
                           "天河北",
                           "天平架",
                           "体育西路",
                           "棠德南路",
                           "五山",
                           "小新塘",
                           "员村",
                           "粤垦",
                           "燕塘",
                           "珠江新城中",
                           "长兴",
                           "中山大道",
                           "珠村",
                           "长湴",
                           "珠江新城西",
                           "珠江新城东"
                       ]
                   },
                   {
                       "district":"番禺",
                       "area":[
                           "大石",
                           "大学城",
                           "番禺广场",
                           "广州雅居乐",
                           "华南",
                           "金山谷",
                           "洛溪",
                           "南浦",
                           "南村镇",
                           "南站",
                           "祈福",
                           "桥南",
                           "市桥",
                           "石碁",
                           "沙湾",
                           "顺德碧桂园",
                           "石楼",
                           "厦滘",
                           "市桥北",
                           "星河湾",
                           "亚运城",
                           "钟村"
                       ]
                   },
                   {
                       "district":"海珠",
                       "area":[
                           " 昌岗",
                           "宝岗 ",
                           "滨江中",
                           "滨江东",
                           "滨江西",
                           "赤岗",
                           "东晓南",
                           "工业大道南",
                           "工业大道北",
                           "广州大道南",
                           "官洲",
                           "江南西",
                           "江南大道中",
                           "江燕路",
                           "客村",
                           "沥滘",
                           "南洲",
                           "琶洲",
                           "前进路",
                           "沙园",
                           "上渡路",
                           "万胜围",
                           "新港西",
                           "晓港",
                           "下渡路",
                           "中大"
                       ]
                   },
                   {
                       "district":"花都",
                       "area":[
                           "旧区",
                           "建设路",
                           "狮岭",
                           "花东",
                           "山前大道",
                           "新区",
                           "镜湖大道",
                           "铁路西"
                       ]
                   },
                   {
                       "district":"越秀",
                       "area":[
                           "北京路",
                           "东风东",
                           "东山口",
                           "东湖",
                           "东风路",
                           "东川",
                           "大沙头",
                           "二沙岛",
                           "共和路",
                           "公园前",
                           "环市东",
                           "黄花岗",
                           "海珠广场",
                           "解放南",
                           "解放北",
                           "建设",
                           "解放中路",
                           "流花",
                           "麓湖",
                           "梅花村",
                           "农林下路",
                           "农讲所",
                           "盘福",
                           "水荫路",
                           "淘金",
                           "五羊新城",
                           "小北",
                           "西门口",
                           "杨箕",
                           "越秀南",
                           "一德路",
                           "中山路"
                       ]
                   },
                   {
                       "district":"增城",
                       "area":[
                           "凤凰城",
                           "广园东",
                           "荔城",
                           "荔城中区",
                           "荔城增江",
                           "荔城富鹏",
                           "石滩",
                           "新塘",
                           "新塘大道东",
                           "新塘大道西",
                           "永和",
                           "中新镇",
                           "朱村"
                       ]
                   },
                   {
                       "district":"黄埔",
                       "area":[
                           "大沙地",
                           "黄埔区府",
                           "黄埔新村",
                           "开发区西",
                           "开发区东",
                           "开创大道北",
                           "开发东区",
                           "开发西区",
                           "科学城",
                           "庙头",
                           "石化路",
                           "文冲",
                           "夏园",
                           "鱼珠",
                           "知识城"
                       ]
                   },
                   {
                       "district":"荔湾",
                       "area":[
                           "陈家祠",
                           "芳村",
                           "环市西",
                           "黄沙",
                           "花地湾",
                           "菊树",
                           "滘口",
                           "龙溪",
                           "荔湾路",
                           "龙津",
                           "南岸",
                           "桥中 ",
                           "沙面",
                           "文昌南路",
                           "西塱",
                           "西关",
                           "西村",
                           "西华路",
                           "长寿路",
                           "中山八路",
                           "周门",
                           "站前路"
                       ]
                   },
                   {
                       "district":"南沙",
                       "area":[
                           "黄阁",
                           "东涌",
                           "大岗",
                           "榄核",
                           "万顷沙",
                           "进港大道",
                           "金洲",
                           "东升",
                           "横沥"
                       ]
                   },
                   {
                       "district":"从化",
                       "area":[
                           "街口中心区",
                           "太平镇",
                           "温泉",
                           "鳌头"
                       ]
                   },
                   {
                       "district":"广州周边",
                       "area":[
                           "中山",
                           "肇庆",
                           "清远",
                           "东莞",
                           "佛山"
                       ]
                   }
                ]
              },
              {
                'city' : '北京',
                'districts' : [
                    {
                        "district":"朝阳",
                        "area":[
                            "安贞",
                            "安慧桥",
                            "奥林匹克公园",
                            "北沙滩",
                            "北苑",
                            "百子湾",
                            "八里庄",
                            "CBD ",
                            "朝外大街",
                            "朝阳公园",
                            "朝青板块",
                            "慈云寺",
                            "常营",
                            "朝阳周边",
                            "大望路",
                            "东大桥",
                            "大屯",
                            "大山子",
                            "东坝",
                            "定福庄",
                            "豆各庄",
                            "垡头",
                            "国贸",
                            "工体",
                            "国展",
                            "甘露园",
                            "高碑店",
                            "管庄",
                            "呼家楼",
                            "和平街",
                            "花家地",
                            "红庙",
                            "惠新西街",
                            "欢乐谷",
                            "惠新里",
                            "华威桥",
                            "劲松",
                            "建外大街",
                            "酒仙桥",
                            "将台路",
                            "健翔桥",
                            "柳芳",
                            "来广营",
                            "麦子店",
                            "媒体村",
                            "南磨房",
                            "南沙滩",
                            "农业展览馆",
                            "潘家园",
                            "四惠",
                            "双井",
                            "三里屯",
                            "三元桥",
                            "芍药居",
                            "首都机场",
                            "水碓子",
                            "石佛营",
                            "十里堡",
                            "双桥",
                            "十八里店",
                            "十里河",
                            "胜古",
                            "松榆里",
                            "孙河",
                            "团结湖",
                            "太阳宫",
                            "甜水园",
                            "望京",
                            "西坝河",
                            "小关",
                            "小红门",
                            "燕莎",
                            "亚运村",
                            "亚运村小营",
                            "姚家园",
                            "左家庄"
                        ]
                    },
                    {
                        "district":"海淀",
                        "area":[
                            "安宁庄",
                            "北京大学",
                            "北航",
                            "北太平庄",
                            "白石桥",
                            "北洼路",
                            "厂洼",
                            "车道沟",
                            "大钟寺",
                            "定慧寺",
                            "二里庄",
                            "恩济里",
                            "甘家口",
                            "公主坟",
                            "花园桥",
                            "航天桥",
                            "海淀周边",
                            "蓟门桥",
                            "交通大学",
                            "军博",
                            "金沟河",
                            "联想桥",
                            "牡丹园",
                            "马连洼",
                            "明光桥",
                            "马甸",
                            "清华大学",
                            "清河",
                            "人民大学",
                            "上地",
                            "双榆树",
                            "四季青",
                            "世纪城",
                            "苏州桥",
                            "苏州街",
                            "上庄",
                            "田村",
                            "五道口",
                            "魏公村",
                            "万寿路",
                            "五棵松",
                            "万泉河",
                            "万柳",
                            "万寿寺",
                            "温泉",
                            "五彩城",
                            "五路居",
                            "西三旗",
                            "西二旗",
                            "学院路",
                            "小西天",
                            "西八里庄",
                            "香山",
                            "西苑",
                            "西北旺",
                            "西山",
                            "学院路北",
                            "肖家河",
                            "永定路",
                            "中关村",
                            "知春路",
                            "皂君庙",
                            "紫竹桥",
                            "增光路"
                        ]
                    },
                    {
                        "district":"昌平",
                        "area":[
                            "北七家",
                            "百善",
                            "城北",
                            "城南",
                            "昌平县城",
                            "昌平周边",
                            "东小口",
                            "霍营",
                            "回龙观",
                            "立水桥",
                            "龙泽",
                            "龙域",
                            "南口",
                            "南邵镇",
                            "沙河",
                            "天通苑",
                            "小汤山北",
                            "小汤山南",
                            "阳坊"
                        ]
                    },
                    {
                        "district":"丰台",
                        "area":[
                            "北大地",
                            "菜户营",
                            "草桥",
                            "成寿寺",
                            "东大街",
                            "东铁匠营",
                            "大红门",
                            "东高地",
                            "丰台路",
                            "丰台体育馆",
                            "方庄",
                            "丰益桥",
                            "丰台周边",
                            "花乡",
                            "和义",
                            "角门",
                            "科技园区",
                            "看丹桥",
                            "六里桥",
                            "卢沟桥",
                            "丽泽桥",
                            "刘家窑",
                            "莲花池",
                            "木樨园",
                            "马家堡",
                            "南苑",
                            "蒲黄榆",
                            "青塔",
                            "七里庄",
                            "世界公园",
                            "宋家庄",
                            "石榴庄",
                            "太平桥",
                            "五里店",
                            "西客站",
                            "小屯路",
                            "新宫",
                            "西罗园",
                            "新发地",
                            "岳各庄",
                            "云岗",
                            "玉泉营",
                            "右安门",
                            "洋桥",
                            "长辛店",
                            "赵公口",
                            "左安门",
                            "总部基地"
                        ]
                    },
                    {
                        "district":"大兴",
                        "area":[
                            "磁各庄",
                            "大兴周边",
                            "观音寺",
                            "高米店",
                            "海子角",
                            "河西区",
                            "黄村",
                            "旧宫 ",
                            "林校路",
                            "庞各庄",
                            "清源",
                            "生物医药基地",
                            "同兴园",
                            "西红门",
                            "兴华大街",
                            "兴丰大街",
                            "兴业大街",
                            "亦庄",
                            "郁花园",
                            "亦庄东区",
                            "亦庄西区",
                            "瀛海镇",
                            "枣园"
                        ]
                    },
                    {
                        "district":"通州",
                        "area":[
                            "北关",
                            "八里桥",
                            "八通轻轨沿线",
                            "次渠",
                            "果园",
                            "九棵树",
                            "漷县",
                            "梨园",
                            "临河里",
                            "潞城",
                            "潞苑",
                            "马驹桥",
                            "乔庄",
                            "宋庄",
                            "通州北苑",
                            "土桥",
                            "通州周边",
                            "台湖镇",
                            "物资学院路",
                            "武夷花园",
                            "新华大街",
                            "永顺",
                            "运河大街",
                            "玉桥",
                            "永乐店",
                            "中仓",
                            "张家湾"
                        ]
                    },
                    {
                        "district":"房山",
                        "area":[
                            "窦店",
                            "房山城关",
                            "房山周边",
                            "韩村河",
                            "良乡",
                            "琉璃河",
                            "阎村",
                            "迎风",
                            "燕山",
                            "长阳",
                            "周口店"
                        ]
                    },
                    {
                        "district":"顺义",
                        "area":[
                            "东方太阳城",
                            "光明 ",
                            "后沙峪",
                            "机场",
                            "李桥",
                            "马坡",
                            "南彩",
                            "石门",
                            "胜利",
                            "石园",
                            "顺义城区",
                            "顺义周边",
                            "天竺",
                            "新国展",
                            "裕龙",
                            "杨镇",
                            "中央别墅区"
                        ]
                    },
                    {
                        "district":"西城",
                        "area":[
                            "百万庄",
                            "白纸坊",
                            "白广路",
                            "车公庄",
                            "菜市口",
                            "德胜门",
                            "地安门",
                            "大栅栏",
                            "阜成门",
                            "复兴门",
                            "广安门外",
                            "广安门内",
                            "官园",
                            "鼓楼",
                            "虎坊桥",
                            "和平门",
                            "金融街",
                            "积水潭",
                            "六铺炕",
                            "马连道",
                            "木樨地",
                            "牛街",
                            "南礼士路",
                            "什刹海",
                            "三里河",
                            "天宁寺",
                            "陶然亭",
                            "天桥",
                            "西直门",
                            "西四",
                            "西单",
                            "宣武门",
                            "新街口",
                            "西便门",
                            "宣武周边",
                            "月坛",
                            "展览路",
                            "长椿街",
                            "珠市口",
                            "真武庙"
                        ]
                    },
                    {
                        "district":"东城",
                        "area":[
                            "安定门",
                            "北新桥",
                            "北京站",
                            "崇文门",
                            "磁器口",
                            "朝阳门",
                            "东直门",
                            "东直门外",
                            "东花市",
                            "东四十条",
                            "灯市口",
                            "东单",
                            "东四",
                            "广渠门",
                            "光明楼",
                            "和平里",
                            "海运仓",
                            "交道口",
                            "建国门",
                            "景山",
                            "龙潭湖",
                            "前门",
                            "沙滩 ",
                            "体育馆路",
                            "天坛",
                            "王府井",
                            "雍和宫",
                            "永定门"
                        ]
                    },
                    {
                        "district":"密云",
                        "area":[
                            "密云城区",
                            "不老屯",
                            "溪翁庄",
                            "密云周边"
                        ]
                    },
                    {
                        "district":"石景山",
                        "area":[
                            "八宝山",
                            "八角",
                            "八大处",
                            "古城",
                            "广宁",
                            "金顶街",
                            "鲁谷",
                            "老山",
                            "模式口",
                            "苹果园",
                            "石景山周边",
                            "五里坨",
                            "玉泉路",
                            "衙门口",
                            "杨庄 "
                        ]
                    },
                    {
                        "district":"怀柔",
                        "area":[
                            "雁栖",
                            "桥梓",
                            "怀柔城区",
                            "渤海镇",
                            "庙城",
                            "怀柔周边"
                        ]
                    },
                    {
                        "district":"门头沟",
                        "area":[
                            "大峪",
                            "东辛房",
                            "龙泉",
                            "城子街道 ",
                            "永定",
                            "潭柘寺",
                            "军庄",
                            "门头沟周边"
                        ]
                    },
                    {
                        "district":"延庆",
                        "area":[
                            "延庆城区",
                            "大榆树",
                            "八达岭",
                            "康庄",
                            "延庆周边"
                        ]
                    },
                    {
                        "district":"平谷",
                        "area":[
                            "金海湖",
                            "滨河路",
                            "平谷城区",
                            "兴谷",
                            "渔阳",
                            "王辛庄",
                            "平谷周边"
                        ]
                    },
                    {
                        "district":"北京周边",
                        "area":[
                            "廊坊",
                            "其他",
                            "保定",
                            "烟台",
                            "唐山",
                            "秦皇岛",
                            "威海",
                            "张家口",
                            "燕郊"
                        ]
                    }
                ]
              }
          ],
          recovery_category: [
              {
                  "level1":"废金属",
                  "sub":[
                      {
                          "level2":"有色金属",
                          "sub":[
                              "废铝",
                              "废铜",
                              "废锡",
                              "废铅",
                              "废锌",
                              "铝合金",
                              "废镍",
                              "废锑",
                              "废锰",
                              "废镁",
                              "废镉",
                              "废钠",
                              "废钙",
                              "废钾",
                              "废锶",
                              "废硼",
                              "废铋",
                              "废钴",
                              "其他有色金属"
                          ]
                      },
                      {
                          "level2":"稀有金属",
                          "sub":[
                              "废钛",
                              "废钒",
                              "废铌",
                              "废钽",
                              "废钨",
                              "废钼",
                              "废铍",
                              "废锆",
                              "废锂",
                              "废铼",
                              "废镓",
                              "废铟",
                              "废硒",
                              "废铷",
                              "废铪",
                              "废锗",
                              "废碲",
                              "硬质合金",
                              "其他稀有金属"
                          ]
                      },
                      {
                          "level2":"废钢铁",
                          "sub":[
                              "废钢",
                              "废不锈钢",
                              "废钢材",
                              "废钢轨",
                              "合金钢",
                              "废铁",
                              "废铁屑",
                              "边角料",
                              "铁矿石",
                              "钢铁制品",
                              "废钢管",
                              "废矽钢",
                              "废钢筋",
                              "废钢板",
                              "废钨钢",
                              "钢结构",
                              "其他废钢铁"
                          ]
                      },
                      {
                          "level2":"贵金属",
                          "sub":[
                              "废金",
                              "废银",
                              "废铑",
                              "废钯",
                              "废铂",
                              "废钌",
                              "废锇",
                              "废铱",
                              "黄金",
                              "白银",
                              "铂金",
                              "钯金",
                              "其他贵金属"
                          ]
                      },
                      {
                          "level2":"再生金属",
                          "sub":[
                              "再生铜",
                              "再生铅",
                              "再生镍",
                              "再生铁",
                              "再生铝",
                              "再生钢",
                              "再生镁",
                              "再生锡",
                              "再生锌",
                              "再生钼",
                              "再生金",
                              "再生银",
                              "其他再生金属"
                          ]
                      },
                      {
                          "level2":"其它金属",
                          "sub":[
                              "废五金",
                              "废合金",
                              "废硅",
                              "废阀门",
                              "废轴承",
                              "金属制品",
                              "金属材料",
                              "废尾矿",
                              "废模具",
                              "废磁铁",
                              "金属助剂",
                              "其他废金属"
                          ]
                      }
                  ]
              },
              {
                  "level1":"废塑料",
                  "sub":[
                      {
                          "level2":"通用塑料",
                          "sub":[
                              "ABS塑料",
                              "PP塑料",
                              "PE塑料",
                              "PS塑料",
                              "PVS塑料",
                              "EVA塑料",
                              "PPR塑料",
                              "PPN塑料",
                              "PPC塑料",
                              "HDPE塑料",
                              "BOPP塑料",
                              "LEPE塑料",
                              "其他通用塑料"
                          ]
                      },
                      {
                          "level2":"工程塑料",
                          "sub":[
                              "PA塑料",
                              "PC塑料",
                              "PET塑料",
                              "POM塑料",
                              "TPU塑料",
                              "LCP塑料",
                              "PPO塑料",
                              "PBT塑料",
                              "PFA塑料",
                              "MPPO塑料",
                              "PVB塑料",
                              "AS塑料",
                              "PTFE塑料",
                              "PMMA塑料",
                              "其他工程塑料"
                          ]
                      },
                      {
                          "level2":"再生塑料",
                          "sub":[
                              "PP再生料",
                              "PE再生料",
                              "PS再生料",
                              "ABS再生料",
                              "PVC再生料",
                              "PC再生料",
                              "PA再生料",
                              "EVA再生料",
                              "PET再生料",
                              "PPO再生料",
                              "PPS再生料",
                              "其他再生塑料"
                          ]
                      },
                      {
                          "level2":"特种塑料",
                          "sub":[
                              "氟塑料",
                              "增强塑料",
                              "泡沫塑料",
                              "有机硅塑料",
                              "PPS塑料",
                              "PAR塑料",
                              "POB塑料",
                              "PSF塑料",
                              "PES塑料",
                              "PASF塑料",
                              "PI塑料",
                              "PEI塑料",
                              "PAI塑料",
                              "PEK塑料",
                              "PASF塑料",
                              "PEEK塑料",
                              "其他特种塑料"
                          ]
                      },
                      {
                          "level2":"塑料助剂",
                          "sub":[
                              "催化剂",
                              "发泡剂",
                              "改性剂",
                              "光亮剂",
                              "粘合剂",
                              "润滑剂",
                              "色母剂",
                              "增白剂",
                              "增塑剂",
                              "着色剂",
                              "阻燃剂",
                              "增韧剂",
                              "助燃剂",
                              "增溶剂",
                              "抗氧剂",
                              "稳定剂",
                              "填充剂",
                              "清洗剂",
                              "防霉剂",
                              "涂料/油漆",
                              "颜料",
                              "染料",
                              "其它塑料助剂"
                          ]
                      },
                      {
                          "level2":"塑料制品",
                          "sub":[
                              "塑料袋",
                              "塑料瓶",
                              "塑料桶",
                              "塑料板",
                              "塑料管",
                              "塑料丝线",
                              "塑料薄膜",
                              "塑料托盘",
                              "塑料泡沫",
                              "塑料颗粒",
                              "其他塑料制品",
                              "吨袋",
                              "食品包装袋"
                          ]
                      }
                  ]
              },
              {
                  "level1":"废纸",
                  "sub":[
                      {
                          "level2":"包装废纸",
                          "sub":[
                              "废纸板",
                              "废纸箱",
                              "牛皮纸",
                              "瓦楞纸",
                              "箱板纸",
                              "淋膜纸",
                              "打包纸",
                              "灰卡纸",
                              "黄板纸",
                              "羊皮纸",
                              "鸡皮纸",
                              "玻璃纸",
                              "利乐包",
                              "无菌包"
                          ]
                      },
                      {
                          "level2":"印刷废纸",
                          "sub":[
                              "废报纸",
                              "废书刊",
                              "铜版纸",
                              "新闻纸",
                              "书写纸",
                              "旧书本",
                              "证券纸",
                              "商标纸",
                              "封面纸",
                              "宣传册",
                              "印花纸",
                              "胶版纸",
                              "标签纸",
                              "白卡纸",
                              "白板纸",
                              "不干胶纸"
                          ]
                      },
                      {
                          "level2":"工业废纸",
                          "sub":[
                              "白油纸",
                              "黄油纸",
                              "离型纸",
                              "碳素纸",
                              "绝缘纸",
                              "无尘纸",
                              "防锈纸",
                              "浸渍纸",
                              "压板纸",
                              "废滤纸",
                              "白纸边",
                              "防潮纸",
                              "防油纸",
                              "废砂纸"
                          ]
                      },
                      {
                          "level2":"生活废纸",
                          "sub":[
                              "面巾纸",
                              "餐巾纸",
                              "湿巾纸",
                              "卫生纸",
                              "纸尿裤",
                              "卫生巾",
                              "擦手纸",
                              "纸杯",
                              "纸袋",
                              "厨房纸",
                              "其他生活废纸"
                          ]
                      },
                      {
                          "level2":"办公废纸",
                          "sub":[
                              "复印纸",
                              "打印纸",
                              "传真纸",
                              "复写纸",
                              "拷贝纸",
                              "绘图纸",
                              "广告纸",
                              "热敏纸",
                              "彩喷纸",
                              "艺术纸",
                              "描图纸",
                              "文件纸"
                          ]
                      },
                      {
                          "level2":"其他废纸",
                          "sub":[
                              "废纸浆",
                              "复合纸",
                              "废卡纸",
                              "废纸边",
                              "纸制品",
                              "废纸管",
                              "废纸盒",
                              "信封纸",
                              "废墙纸",
                              "再生纸"
                          ]
                      }
                  ]
              },
              {
                  "level1":"二手设备",
                  "sub":[
                      {
                          "level2":"化工设备",
                          "sub":[
                              "反应设备",
                              "换热设备",
                              "加热设备",
                              "结晶设备",
                              "成型设备",
                              "粉碎设备",
                              "干燥设备",
                              "输送设备",
                              "石油设备",
                              "传质设备",
                              "混合设备",
                              "实验设备",
                              "管道设备",
                              "储运设备",
                              "分离设备",
                              "环保设备",
                              "压力设备"
                          ]
                      },
                      {
                          "level2":"电力设备",
                          "sub":[
                              "发电机",
                              "电动机",
                              "变压器",
                              "锅炉设备",
                              "电梯设备",
                              "电线电缆",
                              "电池电瓶",
                              "仪器仪表",
                              "电热设备",
                              "焊接设备",
                              "防静电设备",
                              "配电输电设备",
                              "电动工具",
                              "配电柜",
                              "激光切割机",
                              "母线槽"
                          ]
                      },
                      {
                          "level2":"制冷设备",
                          "sub":[
                              "中央空调",
                              "制冷机组",
                              "冷凝器",
                              "蒸发器",
                              "冷库设备",
                              "冷却塔",
                              "压缩机",
                              "冷水机",
                              "冷冻机",
                              "冷水机组",
                              "螺杆机"
                          ]
                      },
                      {
                          "level2":"机床设备",
                          "sub":[
                              "数控机床",
                              "锻压机床",
                              "铸造机床",
                              "木工机床",
                              "特种机床",
                              "金属切削机床",
                              "加工中心",
                              "组合机床",
                              "精密机床",
                              "热处理机床",
                              "机床工具",
                              "机床配件"
                          ]
                      },
                      {
                          "level2":"纺织设备",
                          "sub":[
                              "纺纱设备",
                              "棉纺设备",
                              "化纤设备",
                              "染整设备",
                              "针织设备",
                              "织造设备",
                              "无纺布设备",
                              "毛纺设备",
                              "纺织仪器",
                              "纺机配件",
                              "纺织配套设备",
                              "梭织设备",
                              "皮革设备",
                              "麻纺设备",
                              "纺织机械"
                          ]
                      },
                      {
                          "level2":"橡塑设备",
                          "sub":[
                              "塑料设备",
                              "橡胶设备",
                              "注塑机",
                              "吹塑机",
                              "吹膜机",
                              "吸塑机",
                              "造粒机",
                              "密炼机",
                              "挤出机",
                              "破碎机",
                              "压延机",
                              "成型机",
                              "拉丝机",
                              "压塑机",
                              "制袋机",
                              "淋膜机",
                              "发泡机",
                              "颗粒机",
                              "压力机",
                              "切胶机",
                              "混炼机",
                              "裁断机",
                              "硫化机",
                              "硫化罐",
                              "定型机",
                              "炼胶机",
                              "其他橡塑设备"
                          ]
                      },
                      {
                          "level2":"包装设备",
                          "sub":[
                              "二手包装机械",
                              "塑料包装设备",
                              "纸品包装设备",
                              "金属包装设备",
                              "竹木包装设备",
                              "玻璃包装设备",
                              "布料包装设备",
                              "复合材料包装设备",
                              "包装检测设备",
                              "包装辅助设备",
                              "打包机",
                              "封口机",
                              "灌装机",
                              "喷码机",
                              "捆扎机",
                              "缠绕机",
                              "打标机",
                              "贴标机",
                              "裹包机",
                              "打码机",
                              "充填机"
                          ]
                      },
                      {
                          "level2":"印刷设备",
                          "sub":[
                              "印刷机械",
                              "印前设备",
                              "印后设备",
                              "成套印刷设备",
                              "印刷配套设备",
                              "印刷耗材",
                              "广告设备",
                              "印刷机",
                              "制版机",
                              "装订机",
                              "胶印机",
                              "模切机",
                              "分切机",
                              "喷绘机",
                              "丝印机",
                              "移印机"
                          ]
                      },
                      {
                          "level2":"造纸设备",
                          "sub":[
                              "造纸机械",
                              "备料设备",
                              "漂白设备",
                              "制浆设备",
                              "蒸煮设备",
                              "纸制品设备",
                              "碱回收设备",
                              "纸加工设备",
                              "造纸机",
                              "压光机",
                              "复卷机",
                              "卷纸机",
                              "切纸机",
                              "涂布机",
                              "预印机",
                              "裱纸机",
                              "切角机",
                              "纸杯机"
                          ]
                      },
                      {
                          "level2":"木工设备",
                          "sub":[
                              "木工机械",
                              "钻孔设备",
                              "刃磨设备",
                              "锯切设备",
                              "铣削设备",
                              "封边设备",
                              "制板设备",
                              "砂光设备",
                              "木工辅助设备",
                              "油漆涂装设备",
                              "木工生产线",
                              "营林及木材采伐机械",
                              "其他木工设备"
                          ]
                      },
                      {
                          "level2":"服装设备",
                          "sub":[
                              "服装机械",
                              "缝制设备",
                              "缝前设备",
                              "缝中设备",
                              "缝后设备",
                              "缝纫设备",
                              "裁剪设备",
                              "熨烫设备",
                              "刺绣设备",
                              "制鞋设备",
                              "手套设备",
                              "织袜设备",
                              "箱包设备",
                              "制帽设备",
                              "服装配套设备"
                          ]
                      },
                      {
                          "level2":"食品设备",
                          "sub":[
                              "食品机械",
                              "粮食设备",
                              "米面设备",
                              "果蔬设备",
                              "饼干设备",
                              "炊事设备",
                              "酿酒设备",
                              "糖果设备",
                              "肉制品加工设备",
                              "屠宰设备",
                              "饮料设备",
                              "豆制品设备",
                              "乳制品设备",
                              "调味品设备",
                              "休闲食品设备",
                              "烘焙设备",
                              "茶叶设备",
                              "油炸设备",
                              "油脂设备",
                              "烟草设备",
                              "酒精设备",
                              "辣椒设备",
                              "食品配套设备",
                              "食品生产线",
                              "食品包装设备"
                          ]
                      },
                      {
                          "level2":"矿山设备",
                          "sub":[
                              "矿山机械",
                              "破碎设备",
                              "浮选设备",
                              "筛分设备",
                              "磁选设备",
                              "粉磨设备",
                              "采矿设备",
                              "选矿设备",
                              "砖机设备",
                              "勘探设备",
                              "支护设备",
                              "救护设备"
                          ]
                      },
                      {
                          "level2":"冶炼设备",
                          "sub":[
                              "冶金设备",
                              "炼铁设备",
                              "炼钢设备",
                              "轧钢设备",
                              "焦化设备",
                              "切断设备",
                              "铸造设备",
                              "轧制设备",
                              "窑炉设备",
                              "液压设备",
                              "电镀设备",
                              "拉丝设备",
                              "钢球设备",
                              "钢带设备",
                              "钢管设备",
                              "钢丝设备",
                              "热处理设备",
                              "金属处理设备",
                              "冶炼成套设备",
                              "板金厂设备",
                              "铝厂设备",
                              "不锈钢厂设备",
                              "烧结机",
                              "制氧机",
                              "卷管机",
                              "压铸机",
                              "轧机",
                              "冷轧机",
                              "中频炉"
                          ]
                      },
                      {
                          "level2":"农林设备",
                          "sub":[
                              "农业机械",
                              "林业机械",
                              "渔业机械",
                              "畜牧机械",
                              "牧草机械",
                              "园林机械",
                              "种植机械",
                              "饲料机械",
                              "榨油机械",
                              "农副加工机械",
                              "温室设备",
                              "农机配件"
                          ]
                      },
                      {
                          "level2":"风机设备",
                          "sub":[
                              "鼓风机",
                              "通风机",
                              "排风机",
                              "引风机",
                              "抽风机",
                              "罗茨风机",
                              "离心风机",
                              "高温风机",
                              "冷却风机",
                              "排尘风机",
                              "诱导风机",
                              "轴流风机",
                              "烧结风机",
                              "防腐风机",
                              "节能风机",
                              "湿帘风机",
                              "防爆风机",
                              "高压风机",
                              "屋顶风机",
                              "管道风机",
                              "隧道风机",
                              "矿用风机",
                              "空调风机",
                              "纺织风机",
                              "消防风机",
                              "锅炉风机",
                              "风机箱",
                              "风机配件"
                          ]
                      },
                      {
                          "level2":"医药设备",
                          "sub":[
                              "医疗器械",
                              "医疗设备",
                              "制药设备",
                              "制剂机械",
                              "饮片机械",
                              "医疗保健器械",
                              "医药粉碎机械",
                              "原料处理机械",
                              "药品包装机械",
                              "药物检测设备",
                              "中药制药设备",
                              "消毒灭菌设备",
                              "制药用水设备",
                              "医药净化设备",
                              "医药制冷设备",
                              "医药干燥设备",
                              "其他医药设备"
                          ]
                      },
                      {
                          "level2":"水泥设备",
                          "sub":[
                              "水泥机械",
                              "窑体设备",
                              "烧成设备",
                              "水泥粉磨设备",
                              "水泥破碎设备",
                              "水泥除尘设备",
                              "水泥烘干设备",
                              "水泥环保设备",
                              "水泥输送设备",
                              "水泥包装设备",
                              "水泥冷却设备",
                              "水泥生产线",
                              "耐磨材料",
                              "耐火材料",
                              "水泥配套设备",
                              "其他水泥设备"
                          ]
                      },
                      {
                          "level2":"建材设备",
                          "sub":[
                              "建材机械",
                              "建筑设备",
                              "砖瓦设备",
                              "石材设备",
                              "玻璃设备",
                              "陶瓷设备",
                              "制钉设备",
                              "地板设备",
                              "门窗设备",
                              "卷管设备",
                              "喷涂设备",
                              "制砂设备",
                              "铝型材设备",
                              "五金机电"
                          ]
                      },
                      {
                          "level2":"其他设备",
                          "sub":[
                              "洗涤设备",
                              "酒店设备",
                              "宾馆设备",
                              "KTV设备",
                              "厨房设备",
                              "娱乐会所设备",
                              "火锅店设备",
                              "美容美发设备",
                              "整厂设备",
                              "流水线"
                          ]
                      }
                  ]
              },
              {
                  "level1":"纺织皮革",
                  "sub":[
                      {
                          "level2":"废旧布料",
                          "sub":[
                              "库存布料",
                              "棉布",
                              "麻布",
                              "呢绒布",
                              "毛纺布",
                              "无纺布",
                              "化纤布",
                              "混纺布",
                              "丝绸",
                              "坯布",
                              "漂白布",
                              "染色布",
                              "印花布",
                              "色织布",
                              "法兰绒",
                              "其他布料"
                          ]
                      },
                      {
                          "level2":"废旧面料",
                          "sub":[
                              "库存面料",
                              "服装面料",
                              "针织面料",
                              "梭织面料",
                              "纯棉面料",
                              "真丝面料",
                              "麻纱面料",
                              "羊绒面料",
                              "皮革面料",
                              "化纤面料",
                              "混纺面料",
                              "毛料",
                              "其他面料"
                          ]
                      },
                      {
                          "level2":"废旧辅料",
                          "sub":[
                              "库存辅料",
                              "服装辅料",
                              "服装里料",
                              "服装衬料",
                              "服装垫料",
                              "服装填料",
                              "缝纫线",
                              "扣紧材料",
                              "松紧带",
                              "其他辅料"
                          ]
                      },
                      {
                          "level2":"废旧皮革",
                          "sub":[
                              "库存皮革",
                              "猪皮革",
                              "牛皮革",
                              "羊皮革",
                              "马皮革",
                              "驴皮革",
                              "貂皮革",
                              "人造皮革",
                              "库存皮草",
                              "其他皮革",
                              "皮带"
                          ]
                      },
                      {
                          "level2":"废旧家纺",
                          "sub":[
                              "库存家纺",
                              "床上用品",
                              "酒店布草",
                              "窗帘窗纱",
                              "毛巾浴巾",
                              "四件套",
                              "旧床单",
                              "旧被套",
                              "旧枕套",
                              "旧被褥",
                              "旧枕头",
                              "旧被子",
                              "旧毛毯",
                              "旧地毯",
                              "凉席蚊帐",
                              "桌布台布",
                              "其他家纺"
                          ]
                      },
                      {
                          "level2":"服装鞋帽",
                          "sub":[
                              "库存服装",
                              "库存鞋袜",
                              "库存帽子",
                              "库存箱包",
                              "库存玩具",
                              "旧衣服",
                              "旧男装",
                              "旧女装",
                              "旧童装",
                              "老年装"
                          ]
                      }
                  ]
              },
              {
                  "level1":"电子电器",
                  "sub":[
                      {
                          "level2":"电子产品",
                          "sub":[
                              "照相机",
                              "摄像机",
                              "手机",
                              "手表",
                              "安防器材",
                              "台式电脑",
                              "平板电脑",
                              "笔记本",
                              "显示器",
                              "服务器",
                              "数码摄影",
                              "电脑配件"
                          ]
                      },
                      {
                          "level2":"工控产品",
                          "sub":[
                              "PLC",
                              "工控机",
                              "变频器",
                              "机器人",
                              "伺服电机",
                              "传感器",
                              "触摸屏",
                              "通信模块",
                              "气动元件",
                              "交换机",
                              "开关电源",
                              "电磁阀",
                              "编码器",
                              "温控器",
                              "伺服驱动",
                              "低压电器",
                              "高压电器",
                              "防爆电器",
                              "节能电器",
                              "工控配件"
                          ]
                      },
                      {
                          "level2":"家用电器",
                          "sub":[
                              "空调",
                              "电视机",
                              "洗衣机",
                              "冰箱冰柜",
                              "音响功放",
                              "热水器",
                              "饮水机",
                              "小家电",
                              "厨房电器",
                              "卫浴电器",
                              "VCD/DVD",
                              "家庭影院",
                              "电暖气",
                              "电风扇",
                              "净水器",
                              "油烟机",
                              "除湿机",
                              "榨汁机",
                              "咖啡机",
                              "其他家用电器"
                          ]
                      },
                      {
                          "level2":"办公设备",
                          "sub":[
                              "打印机",
                              "复印机",
                              "传真机",
                              "扫描仪",
                              "硒鼓墨盒",
                              "投影机",
                              "碎纸机",
                              "考勤机",
                              "电话机",
                              "办公用品",
                              "多功能一体机",
                              "3D打印机",
                              "点钞机",
                              "绘图仪"
                          ]
                      },
                      {
                          "level2":"电子元器件",
                          "sub":[
                              "电子元件",
                              "处理器",
                              "存储器",
                              "连接器",
                              "集成电路（IC）",
                              "电阻",
                              "电容",
                              "电路板",
                              "二三极管",
                              "电子材料",
                              "电位器",
                              "继电器",
                              "电子管",
                              "散热器",
                              "滤波器",
                              "充电器",
                              "断路器",
                              "接触器",
                              "控制器",
                              "振荡器",
                              "变送器",
                              "插头插座"
                          ]
                      },
                      {
                          "level2":"仪器仪表",
                          "sub":[
                              "分析仪器",
                              "实验仪器",
                              "电子电工仪器",
                              "天平衡器",
                              "检测仪器",
                              "测量仪器",
                              "工业仪表",
                              "压力仪表",
                              "流量仪表",
                              "温度仪表",
                              "工业自动化仪表",
                              "汽车仪表",
                              "光学仪器",
                              "电子仪器",
                              "测试仪器",
                              "电化学仪器",
                              "光谱仪",
                              "色谱仪",
                              "量具量仪",
                              "仪器仪表配件"
                          ]
                      },
                      {
                          "level2":"其他电子电器",
                          "sub":[
                              "游戏机",
                              "健身器材",
                              "钢琴乐器"
                          ]
                      }
                  ]
              },
              {
                  "level1":"轮胎橡胶",
                  "sub":[
                      {
                          "level2":"废旧轮胎",
                          "sub":[
                              "轿车轮胎",
                              "货车轮胎",
                              "客车轮胎",
                              "工程车胎",
                              "工业车胎",
                              "农用车胎",
                              "摩托轮胎",
                              "电动车胎",
                              "力车轮胎",
                              "飞机轮胎",
                              "汽车外胎",
                              "汽车内胎"
                          ]
                      },
                      {
                          "level2":"天然橡胶",
                          "sub":[
                              "胶片",
                              "生胶",
                              "乳胶",
                              "橡胶颗粒",
                              "橡胶原料",
                              "烟片橡胶",
                              "绉片橡胶",
                              "胶清橡胶",
                              "橡胶发泡",
                              "废天然胶"
                          ]
                      },
                      {
                          "level2":"合成橡胶",
                          "sub":[
                              "硅橡胶",
                              "氟橡胶",
                              "丁苯橡胶",
                              "顺丁橡胶",
                              "乙丙橡胶",
                              "丁腈橡胶",
                              "丁基橡胶",
                              "异戊橡胶",
                              "氯丁橡胶",
                              "硫化橡胶",
                              "聚硫橡胶",
                              "氯醇橡胶"
                          ]
                      },
                      {
                          "level2":"橡胶制品",
                          "sub":[
                              "橡胶板",
                              "橡胶管",
                              "橡胶带",
                              "橡胶垫",
                              "橡胶条",
                              "橡胶辊",
                              "橡胶鞋",
                              "橡胶袋",
                              "橡胶手套",
                              "橡胶卷材",
                              "塑胶跑道",
                              "沥青胶",
                              "橡胶地砖",
                              "橡胶地板",
                              "电缆皮",
                              "玻璃胶"
                          ]
                      },
                      {
                          "level2":"再生橡胶",
                          "sub":[
                              "轮胎再生胶",
                              "乳胶再生胶",
                              "丁基再生胶",
                              "丁腈再生胶",
                              "乙丙再生胶",
                              "胶鞋再生胶",
                              "再生硅胶",
                              "橡胶粉",
                              "橡胶废料",
                              "废再生胶"
                          ]
                      },
                      {
                          "level2":"其他橡胶",
                          "sub":[
                              "废旧橡胶",
                              "橡胶助剂",
                              "密封材料",
                              "防水材料",
                              "化工原料",
                              "废旧树脂",
                              "海绵橡胶",
                              "氯化橡胶",
                              "热熔胶",
                              "废胶水"
                          ]
                      }
                  ]
              },
              {
                  "level1":"交通运输",
                  "sub":[
                      {
                          "level2":"二手汽车",
                          "sub":[
                              "二手轿车",
                              "二手货车",
                              "二手客车",
                              "二手MPV",
                              "二手SUV",
                              "二手跑车",
                              "面包车",
                              "皮卡车",
                              "农用车",
                              "越野车",
                              "汽车配件"
                          ]
                      },
                      {
                          "level2":"二手工程车",
                          "sub":[
                              "挖掘机",
                              "推土机",
                              "压路机",
                              "装载机",
                              "平地机",
                              "叉车",
                              "吊车",
                              "油罐车",
                              "洒水车",
                              "搅拌车",
                              "自卸车",
                              "水泥罐车",
                              "随车吊",
                              "起重机",
                              "清障车",
                              "加油车",
                              "垃圾车",
                              "扫路车",
                              "吸污车",
                              "高空作业车",
                              "拖车",
                              "挂车",
                              "房车",
                              "消防车",
                              "冷藏车",
                              "危险品车",
                              "工程抢险车",
                              "工程车配件",
                              "其他工程车",
                              "行车"
                          ]
                      },
                      {
                          "level2":"二手摩托车",
                          "sub":[
                              "弯梁摩托车",
                              "踏板摩托车",
                              "跨骑摩托车",
                              "太子摩托车",
                              "越野摩托车",
                              "摩托跑车",
                              "农用摩托车",
                              "助力摩托车",
                              "三轮摩托车",
                              "四轮摩托车",
                              "摩托车配件"
                          ]
                      },
                      {
                          "level2":"二手电动车",
                          "sub":[
                              "电动汽车",
                              "电动摩托车",
                              "电动自行车",
                              "电动滑板车",
                              "电动平衡车",
                              "电动独轮车",
                              "电动三轮车",
                              "电动四轮车",
                              "混合动力电动车",
                              "燃料电池汽车",
                              "电动车配件"
                          ]
                      },
                      {
                          "level2":"二手自行车",
                          "sub":[
                              "普通自行车",
                              "公路自行车",
                              "山地自行车",
                              "折叠自行车",
                              "死飞自行车",
                              "旅行自行车",
                              "儿童自行车",
                              "场地自行车",
                              "多人自行车",
                              "共享单车",
                              "自行车配件"
                          ]
                      },
                      {
                          "level2":"其他交通运输",
                          "sub":[
                              "二手船舶",
                              "二手飞机",
                              "二手火车",
                              "铁路物资",
                              "游乐设备",
                              "集装箱",
                              "升降设备",
                              "输送机械",
                              "物流设备",
                              "其他运输设备"
                          ]
                      }
                  ]
              },
              {
                  "level1":"家具木材",
                  "sub":[
                      {
                          "level2":"民用家具",
                          "sub":[
                              "二手桌子",
                              "二手椅子",
                              "二手凳子",
                              "二手沙发",
                              "二手茶几",
                              "二手床",
                              "二手床垫",
                              "二手衣柜",
                              "书桌书柜",
                              "儿童家具",
                              "二手鞋柜",
                              "二手橱柜",
                              "储物柜",
                              "电视柜",
                              "床头柜",
                              "梳妆台",
                              "上下床"
                          ]
                      },
                      {
                          "level2":"办公家具",
                          "sub":[
                              "办公桌",
                              "办公椅",
                              "办公沙发",
                              "办公茶几",
                              "屏风隔断",
                              "文件柜",
                              "会议桌椅",
                              "办公前台",
                              "培训桌椅",
                              "洽谈桌椅",
                              "休闲桌椅",
                              "老板桌椅",
                              "保险柜/箱",
                              "电脑桌椅"
                          ]
                      },
                      {
                          "level2":"酒店家具",
                          "sub":[
                              "酒店桌椅",
                              "酒店衣柜",
                              "酒店沙发",
                              "酒店套床",
                              "酒店茶几",
                              "行李柜",
                              "二手酒柜",
                              "酒店梳妆台",
                              "酒店床头柜",
                              "酒店用品",
                              "酒店电视柜",
                              "宾馆家具",
                              "吧台吧椅"
                          ]
                      },
                      {
                          "level2":"餐厅家具",
                          "sub":[
                              "中餐厅家具",
                              "西餐厅家具",
                              "咖啡厅家具",
                              "茶楼家具",
                              "快餐厅家具",
                              "餐厅桌椅",
                              "餐厅沙发",
                              "餐边柜",
                              "二手餐具",
                              "餐厅用品"
                          ]
                      },
                      {
                          "level2":"废旧木材",
                          "sub":[
                              "木托盘",
                              "木包装箱",
                              "木地板",
                              "胶合板",
                              "木制品",
                              "旧木材",
                              "废旧木方",
                              "原木",
                              "竹材",
                              "废旧板材",
                              "废旧木料",
                              "木屑锯末",
                              "建筑木材"
                          ]
                      },
                      {
                          "level2":"其他家具",
                          "sub":[
                              "二手家具",
                              "红木家具",
                              "展柜柜台",
                              "网吧桌椅",
                              "美容美发用品",
                              "二手货架",
                              "二手门窗",
                              "台球桌",
                              "麻将桌",
                              "课桌椅",
                              "樟木箱"
                          ]
                      }
                  ]
              },
              {
                  "level1":"其它废品",
                  "sub":[
                      {
                          "level2":"烟酒礼品",
                          "sub":[
                              "名烟",
                              "名酒",
                              "老酒",
                              "洋酒",
                              "购物卡",
                              "冬虫夏草",
                              "燕窝",
                              "鹿茸",
                              "鱼翅",
                              "海参",
                              "阿胶",
                              "中药材"
                          ]
                      },
                      {
                          "level2":"奢侈品",
                          "sub":[
                              "名表",
                              "名包",
                              "名鞋",
                              "名服装",
                              "名配饰",
                              "珠宝首饰",
                              "黄金饰品",
                              "钻石钻戒",
                              "玉器翡翠",
                              "其他奢侈品"
                          ]
                      },
                      {
                          "level2":"废油",
                          "sub":[
                              "废燃料油",
                              "废润滑油",
                              "生物废油",
                              "化工废油",
                              "再生油品",
                              "废机油",
                              "废柴油",
                              "废煤油",
                              "废齿轮油",
                              "废液压油",
                              "废导轨油",
                              "变压器油",
                              "废切削油",
                              "废重油",
                              "废汽油",
                              "废矿物油",
                              "废溶剂油",
                              "废植物油",
                              "废动物油",
                              "废食用油",
                              "废煤焦油",
                              "废油脂",
                              "废蜡油",
                              "废黄油",
                              "废油墨",
                              "其他废油"
                          ]
                      },
                      {
                          "level2":"废旧玻璃",
                          "sub":[
                              "原片玻璃",
                              "深加工玻璃",
                              "玻璃纤维",
                              "特种玻璃",
                              "玻璃制品",
                              "碎玻璃",
                              "器皿玻璃",
                              "建筑玻璃",
                              "装饰玻璃",
                              "家电玻璃",
                              "家具玻璃",
                              "艺术玻璃",
                              "玻璃原材料",
                              "平板玻璃",
                              "有机玻璃",
                              "钢化玻璃",
                              "其他玻璃",
                              "玻璃瓶",
                              "啤酒瓶"
                          ]
                      },
                      {
                          "level2":"工艺艺术品",
                          "sub":[
                              "瓷器",
                              "玉器",
                              "书画",
                              "钱币",
                              "邮票",
                              "金银币",
                              "纪念币",
                              "老家具",
                              "老物件",
                              "古玩杂项",
                              "工艺品"
                          ]
                      },
                      {
                          "level2":"废品物资",
                          "sub":[
                              "文体用品",
                              "食品饮料",
                              "母婴用品",
                              "保健用品",
                              "建筑建材",
                              "化工废物",
                              "绿植苗木",
                              "照明灯具",
                              "农业物资",
                              "库存物资",
                              "废品回收",
                              "头发回收",
                              "垃圾分类回收"
                          ]
                      },
                      {
                          "level2":"工程拆除",
                          "sub":[
                              "厂房拆除",
                              "酒店拆除",
                              "宾馆拆除",
                              "商场拆除",
                              "设备拆除",
                              "办公楼拆除",
                              "钢结构拆除",
                              "广告牌拆除",
                              "桥梁拆除",
                              "烟囱拆除",
                              "室内拆除",
                              "建筑物拆除",
                              "混凝土切割",
                              "地基加固",
                              "其他工程服务"
                          ]
                      }
                  ]
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
          current_city: '',
          current_district: '',
          current_area: '',
          current_level_one: '',
          current_level_two: '',
          current_level_three: '',
          districts : [],
          level_two_data : [],
          level_three_data : [],
          areas : [],
          temp_area : [],
          temp_sub : [],
          current_base_order: '综合',
          current_page: 1,
          all_page: 1,
          show_district: false,
          show_area: false,
          show_level_two: false,
          show_level_three: false,
        }
    },

    methods: {
        change_current_city(city) {
            this.districts = [];
            this.citys.some((item) => {
                if (item.city == city) {
                    this.temp_area = item.districts;
                    item.districts.some((item) => {
                        this.districts.push(item.district)
                    });
                    return true;
                }
                return false;
            });
            this.current_city = city;
            this.show_district = true;
            this.show_area = false;
        },
        change_current_district(district) {
            this.temp_area.some((item) => {
                if (item.district == district) {
                  this.areas = item.area;
                  return true;
                }
                return false;
            });
            this.current_district = district;
            this.show_area = true;
        },
        change_current_area(area) {
            this.current_area = area;
        },
        change_current_level_one(level_one) {
            this.level_two_data = [];
            this.recovery_category.some((item) => {
                if (item.level1 == level_one) {
                    this.temp_sub = item.sub;
                    item.sub.some((item) => {
                        this.level_two_data.push(item.level2)
                    });
                    return true;
                }
                return false;
            });
            this.current_level_one = level_one;
            this.show_level_two = true;
            this.show_level_three = false;
        },
        change_current_level_two(level_two) {
          this.temp_sub.some((item) => {
              if (item.level2 == level_two) {
                this.level_three_data = item.sub;
                return true;
              }
              return false;
          });
          this.current_level_two = level_two;
          this.show_level_three = true;
        },
        change_current_level_three(level_three) {
            this.current_level_three = level_three;
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
    /* width: 1170px; */
    max-width: 1200px;
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
