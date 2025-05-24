import { nanoid } from 'nanoid'
import MY_INVISIBLE_CHARS from './constants'

// 计算字符串字节长度（保持不变）
function calculateByteLength(str) {
  return [...str].reduce(
    (acc, char) => acc + (char.charCodeAt(0) > 255 ? 2 : 1),
    0
  )
}

export const generateBlankNames = (nameNumber = 10) => {
  const MAX_BYTES = 12
  const INVISIBLE_CHARS = MY_INVISIBLE_CHARS
  const result = new Set()

  // 直接处理空白名
  const availableBytes = MAX_BYTES // 12 - 0 = 12

  // 生成唯一名称的核心逻辑
  while (result.size < nameNumber) {
    let newName = []
    let remainingBytes = availableBytes

    while (remainingBytes > 0) {
      const insertPos = Math.floor(Math.random() * (newName.length + 1))
      const insertChar =
        INVISIBLE_CHARS[Math.floor(Math.random() * INVISIBLE_CHARS.length)]
      const charBytes = calculateByteLength(insertChar)

      // 预计算插入后的字节数
      const tempName = [...newName]
      tempName.splice(insertPos, 0, insertChar)
      const newByteLength = calculateByteLength(tempName.join(''))

      if (newByteLength > MAX_BYTES) {
        break // 提前终止插入循环
      }

      // 正式插入字符
      newName = tempName
      remainingBytes -= charBytes
    }

    result.add(newName.join(''))

    // 防止组合耗尽时无限循环
    if (result.size > nameNumber * 1000) break
  }

  // 格式转换与返回
  return Array.from(result)
    .slice(0, nameNumber)
    .map((name) => ({
      id: nanoid(5),
      name
    }))
}
