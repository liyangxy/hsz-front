<template>
    <div class="edit">
        <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="标题描述">
                <el-input v-model="form.title" placeholder="一句话描述（不超过30个字符）" minlength="2" maxlength="30" show-word-limit></el-input>
              </el-form-item>
              <el-form-item label="详细介绍">
                <el-input type="textarea" placeholder="详细介绍（不超过200个字符）" :autosize="{ minRows: 4, maxRows: 8}" v-model="form.desc" minlength="2" maxlength="200" show-word-limit></el-input>
              </el-form-item>
              <el-form-item label="所在城市">
                  <el-cascader
                      size="small"
                      :options="options"
                      v-model="selectedOptions"
                      @change="handleChange">
                  </el-cascader>
              </el-form-item>
              <el-form-item label="服务商圈">
                <el-checkbox-group v-model="form.areas">
                  <el-checkbox label="1" name="type">美食/餐厅线上活动</el-checkbox>
                  <el-checkbox label="2" name="type">地推活动</el-checkbox>
                  <el-checkbox label="3" name="type">线下主题活动</el-checkbox>
                  <el-checkbox label="4" name="type">单纯品牌曝光</el-checkbox>
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
              <!-- <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item> -->
              <el-form-item label="服务全国">
                <el-switch v-model="form.is_country"></el-switch>
              </el-form-item>
              <!-- <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item> -->
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
      }
    },
    methods: {
        onSubmit() {
          console.log('submit!');
          // console.log(this.form.areas);
          console.log(this.selectedOptions);

          let edit_info = {
              title: this.form.title,
              desc: this.form.desc,
              selectedOptions: this.selectedOptions,
              areas: this.form.areas,
              phone: this.form.phone,
              address: this.form.address,
              is_country: this.form.is_country,
          };
          let isErr = this.rule(edit_info);
          if (isErr) {
              return ;
          } else {
              this.$api.api.edit(edit_info).then((res) => {
                  console.log(res)
                  this.$message(
                      {
                          message: '保存成功',
                          type: 'success',
                          center: true,
                  });
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
            if (data.desc.replace(/\s+/g, "").length == 0) {
                this.errorMsg('详细介绍不能为空');
                return true;
            }
            if (data.selectedOptions.length == 0) {
                this.errorMsg('请选择所在城市');
                return true;
            }
            if (this.validPhone(data.phone) == 0) {
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
            console.log(value)
        }
    }
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

@media (max-width: 480px) {

}

</style>
