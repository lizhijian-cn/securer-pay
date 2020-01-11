// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { collection, docid, data } = event

  try {
    await db.collection(collection)
      .doc(docid)
      .update({
        ...data
      })
    return {
      code: 0,
      msg: 'success'
    }
  } catch (error) {
    console.log(error.message)
    return {
      code: 1,
      msg: error.message
    }
  }
}