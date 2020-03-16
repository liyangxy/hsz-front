<template>
    <div class="edit">
        <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="标题描述">
                <el-input v-model="form.title" class="input_class" placeholder="一句话描述（不超过30个字符）" minlength="2" maxlength="30" show-word-limit></el-input>
              </el-form-item>
              <el-form-item label="详细介绍">
                <el-input type="textarea" placeholder="详细介绍（不超过200个字符）" :autosize="{ minRows: 6, maxRows: 10}" v-model="form.desc" minlength="2" maxlength="200" show-word-limit></el-input>
              </el-form-item>
              <el-form-item label="所在城市">
                  <el-cascader
                      size="small"
                      :options="options"
                      v-model="selectedOptions"
                      @change="handleChange">
                  </el-cascader>
              </el-form-item>
              <el-form-item label="经常出没" v-show="showBusinessCircle">
                <el-checkbox-group v-model="selectAreas" :max="6">
                    <el-checkbox v-for="item in form.areas" :label="item.id" :key="item.id">{{item.name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <!-- <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item> -->
              <el-form-item label="联系电话">
                <el-input  size="small" class="input_width"  v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="联系地址">
                <el-input v-model="form.address" placeholder="请输入详细地址" minlength="2" maxlength="30" show-word-limit></el-input>
              </el-form-item>

              <el-form-item label="服务类别">
                  <el-cascader
                      v-model="category"
                      :options="categoryOptions"
                      @change="handleCategoryChange">
                  </el-cascader>
              </el-form-item>
              <el-form-item label="细分类别" v-show="showRecycleCategory">
                <el-checkbox-group v-model="selectCategory" :max="6">
                    <el-checkbox v-for="item in recycleCategory" :label="item.code" :key="item.code">{{item.name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="服务范围">
                  <el-radio-group v-model="serve_area">
                      <el-radio :label="1">全国</el-radio>
                      <el-radio :label="2">全省</el-radio>
                      <el-radio :label="3">全市</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/javascript">
import {regionDataPlus} from 'element-china-area-data';

export default {
    data() {
      return {
        form: {
          title: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          areas: [],
          resource: '',
          desc: '',
          phone: '',
          address: '',
          is_country: false,
        },
        options: regionDataPlus,
        selectedOptions: [],
        serve_area: '',
        province_id: null,
        city_id: null,
        district_id: null,
        user_id : null,
        selectAreas : [],
        showBusinessCircle : false,
        original_district_id : null,
        original_select_areas : [],
        category: [],
        categoryOptions: [],
        showRecycleCategory : false,
        selectCategory : [],
        recycleCategory : [],
        code_level_one : null,
        code_level_two : null,
        code_level_three : [],
        original_code_level_two : null,
        original_select_category : [],
      }
    },
    methods: {
        onSubmit() {
          if (this.selectedOptions.length > 0) {
              this.province_id = this.selectedOptions[0];
              if (this.selectedOptions[1] != '') {
                  this.city_id = this.selectedOptions[1];
                  if (this.selectedOptions[2] != '') {
                      this.district_id = this.selectedOptions[2];
                  }
              }
          }
          if (this.category.length > 0) {
              this.code_level_one = this.category[0];
              if (this.category[1] != '') {
                  this.code_level_two = this.category[1];
              }
          }
          let edit_info = {
              title: this.form.title,
              dec: this.form.desc,
              selectedOptions: this.selectedOptions,
              business_circles: this.selectAreas,
              contact_phone: this.form.phone,
              address: this.form.address,
              serve_area: this.serve_area,
              recycle_categories: this.selectCategory,
          };
          let user_id = this.user_id;
          let isErr = this.rule(edit_info);
          if (isErr) {
              return ;
          } else {
              if (this.province_id) {
                  edit_info.province_id = this.province_id;
                  if (this.city_id) {
                      edit_info.city_id = this.city_id;
                      if (this.district_id) {
                          edit_info.district_id = this.district_id;
                      }
                  }
              }
              if (this.code_level_one) {
                  edit_info.code_level_one = this.code_level_one;
                  if (this.code_level_two) {
                      edit_info.code_level_two = this.code_level_two;
                  }
              }
              this.$api.api.edit(edit_info, user_id).then((res) => {
                  this.$message(
                      {
                          message: '保存成功',
                          type: 'success',
                          center: true,
                  });
                  localStorage.removeItem("citys");
                  this.$router.push({path: '/'});
              }).catch((err) => {
                  this.$message({
                      showClose: true,
                      message: '保存失败',
                      type: 'error'
                  })
              })
            }
        },
        rule(data) {
            if (data.title.replace(/\s+/g, "").length == 0) {
                this.errorMsg('标题不能为空');
                return true;
            }
            if (data.dec.replace(/\s+/g, "").length == 0) {
                this.errorMsg('详细介绍不能为空');
                return true;
            }
            if (data.selectedOptions.length == 0) {
                this.errorMsg('请选择所在城市');
                return true;
            }
            if (this.validPhone(data.contact_phone) == 0) {
                this.errorMsg('联系电话不正确');
                return true;
            }
            if (data.address.replace(/\s+/g, "").length == 0) {
                this.errorMsg('联系地址不能为空');
                return true;
            }
            return false;
        },
        errorMsg(msg) {
            this.$message.error(msg);
        },
        validPhone(phone) {
            var re = /^1[3456789]\d{9}$/;
            return re.test(phone);
        },
        handleChange (value) {
            // console.log(value)
        },
        handleCategoryChange (value) {
            // console.log(value)
        }
    },

    created() {
        this.$api.api.getRecycleCategory().then((res) => {
            res.data.forEach((item) => {
                let level1 = {};
                level1.value = item.code;
                level1.label = item.name;
                level1.children = [];
                item.children.forEach((child) => {
                    let level2 = {};
                    level2.value = child.code;
                    level2.label = child.name;
                    level1.children.push(level2);
                });
                this.categoryOptions.push(level1);
            });
        }).catch((err) => {
            this.$message({
                showClose: true,
                message: '发生错误',
                type: 'error'
            });
            // this.$router.push({path: '/'});
        });

        this.user_id = this.$store.getters.user_id;
        this.$api.api.show(this.user_id).then((res) => {
            this.form.title = res.data.title;
            this.form.desc = res.data.dec;
            this.selectedOptions = [];
            res.data.province_id = (res.data.province_id == '' || res.data.province_id == 0 ? '' : res.data.province_id);
            this.selectedOptions.push(res.data.province_id);
            if (res.data.province_id != '') {
                res.data.city_id = (res.data.city_id == '' || res.data.city_id == 0 ? '' : res.data.city_id);
                this.selectedOptions.push(res.data.city_id);
                if (res.data.city_id != '') {
                    res.data.district_id = (res.data.district_id == '' || res.data.district_id == 0 ? '' : res.data.district_id);
                    this.selectedOptions.push(res.data.district_id);
                    this.original_district_id = res.data.district_id;
                }
            }
            this.form.phone = res.data.contact_phone;
            this.form.address = res.data.address;
            this.serve_area = res.data.serve_area;
            this.original_code_level_two = res.data.code_level_two;
            res.data.business_circles.forEach((item) => {
                this.selectAreas.push(item.id)
            });
            this.original_select_areas = this.selectAreas;
            this.category = [res.data.code_level_one, res.data.code_level_two];
            res.data.codeLevelThree.forEach((item) => {
                this.selectCategory.push(item.code_level_three.toString());
            });
            this.original_select_category = this.selectCategory;
            if (this.selectCategory.length > 0) {
                this.showRecycleCategory = true;
            }

        }).catch((err) => {
            this.$message({
                showClose: true,
                message: '发生错误，请尝试重新登录',
                type: 'error'
            });
            this.$router.push({path: '/'});
        })

    },

    watch: {
        selectedOptions() {
            if (this.selectedOptions.length == 3 && this.selectedOptions[2] != '') {
                let districtCode = this.selectedOptions[2];
                let params = {
                    district_code : districtCode,
                };
                this.$api.api.getBusinessCircles(params).then((res) => {
                    if (this.original_district_id != params.district_code) {
                        this.selectAreas = [];
                    } else {
                        this.selectAreas = this.original_select_areas;
                    }
                    if (res.data.length > 0) {
                        this.form.areas = res.data;
                        this.showBusinessCircle = true;
                    } else {
                        this.form.areas = [];
                        this.showBusinessCircle = false;
                    }

                }).catch((err) => {
                    this.$message({
                        showClose: true,
                        message: '发生错误',
                        type: 'error'
                    })
                })
            }
        },
        category() {
            if (this.category.length == 2) {
                let categoryTwo = this.category[1];
                let params = {
                    recycle_category_code : categoryTwo,
                };
                this.$api.api.lastRecycleCategory(params).then((res) => {
                    if (this.original_code_level_two != params.recycle_category_code) {
                        this.selectCategory = [];
                    } else {
                        this.selectCategory = this.original_select_category;
                    }
                    this.recycleCategory = res.data;
                    if (this.recycleCategory.length > 0) {
                        this.showRecycleCategory = true;
                    }
                }).catch((err) => {
                    this.$message({
                        showClose: true,
                        message: '发生错误',
                        type: 'error'
                    })
                })
            }
        },

        selectAreas () {
            // console.log(this.selectAreas)
        }
    },

}
</script>

<style type="text/css" scoped>
.edit {
    max-width: 960px;
    margin: 50px auto;
    padding: 0 15px;
    min-height: 76%;
}
.input_width {
    max-width: 194px;
}

.el-cascader--small {
    width: 280px;
}

>>> .el-input__inner:focus, >>> .el-textarea__inner:focus, >>> .el-cascader .el-input__inner:focus {
    /* border-color: #08bf91; */
    /* outline: none; */
    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 5px #5794f2; */
}

@media (max-width: 480px) {

}

</style>
