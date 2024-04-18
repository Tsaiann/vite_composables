import { ElMessage, ElMessageBox } from 'element-plus'
import Decimal from 'decimal.js';


export function usePaymentCard(){
  const messageBox = (detail, success, confirm, callBack) => {
    ElMessageBox.confirm(detail, '警告', {
      confirmButtonText: '確定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then((res) => {
        callBack(res)
        ElMessage({
          type: 'success',
          message: success
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: confirm
        })
      })
  }
	
  // 去掉comma
	const minusComma = (val) => {
		let num = val ? val.replace(/,/g, '') * 1 : 0
		return num
	}
  // 每三位數增加comma
	const addComma = (val) => {
		let num = val ? val.toLocaleString('zh', { style: 'decimal' }) : 0
		return num
	}

  // 轉換成正整數
	const handleInteger  = (val) => {
		let num = val ? val.replace(/[^\d]/g, '') : ''
		return num
	}

  const percentMethod = (percent, div, times, fixed) => {
		let num = percent ? new Decimal(percent).div(div).times(times).toFixed(fixed) : 0
		return num
	}


  return { messageBox, addComma, minusComma, percentMethod, handleInteger }
}