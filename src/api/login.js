/**
 * xxx模块接口列表
 */

import axios from '@/utils/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
// import axios from 'axios'
const login = {
  // post提交
  login (params) {
    return axios.post(`api/SellerAdmin/Login/LoginForCashier`, qs.stringify(params))
  }
  // 其他接口…………
}

export default login
