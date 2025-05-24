import { nanoid } from 'nanoid'

// 计算字符串字节长度
function calculateByteLength(str) {
  return [...str].reduce(
    (acc, char) => acc + (char.charCodeAt(0) > 255 ? 2 : 1),
    0
  )
}

// 生成重复名函数
export const generateDuplicateNames = (gameName, nameNumber = 10) => {
  const MAX_BYTES = 12
  const INVISIBLE_CHARS = ['\u200B', '\uFEFF', '\u2060', '\u2063']
  const result = new Set()

  // 计算原始名称字节
  const originalBytes = calculateByteLength(gameName)
  const availableBytes = MAX_BYTES - originalBytes

  // 处理无法生成的情况
  if (availableBytes <= 0 || gameName === '') {
    /* eslint-disable */
    ElMessage.error('输入名字过长，尽量不超出5个字')
    return []
  }

  // 生成足够数量的唯一名称
  while (result.size < nameNumber) {
    let newName = [...gameName]
    let remainingBytes = availableBytes

    // 随机插入不可见字符
    while (remainingBytes > 0) {
      // 随机选择插入位置和字符
      const insertPos = Math.floor(Math.random() * (newName.length + 1))
      const insertChar =
        INVISIBLE_CHARS[Math.floor(Math.random() * INVISIBLE_CHARS.length)]

      newName.splice(insertPos, 0, insertChar)
      remainingBytes--

      // 检查字节长度
      if (calculateByteLength(newName.join('')) > MAX_BYTES) {
        newName.splice(insertPos, 1)
        remainingBytes++
        break
      }
    }

    result.add(newName.join(''))

    // 防止无限循环（当可能组合数不足时）
    if (result.size > nameNumber * 100) break
  }

  // 转换为最终结果格式
  return Array.from(result)
    .slice(0, nameNumber)
    .map((name) => ({
      id: nanoid(5),
      name
    }))
}
