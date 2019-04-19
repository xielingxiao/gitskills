/**
 * xxx模块接口列表
 */

import base from '@/api/base' // 导入接口域名列表
import axios from '@/utils/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const home = {
  // post提交
  login (params) {
    return axios.post(`${base.dev}/accesstoken`, qs.stringify(params))
  },
  getProductList (params) {
    return axios.get(`${base.dev}/api/SellerAdmin/Cashier/SearchProduct`, params)
  }
  // 其他接口…………
}

export default home
