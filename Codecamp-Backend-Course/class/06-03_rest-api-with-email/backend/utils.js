export function getToday() {
  const createdDate = new Date()
  const year = createdDate.getFullYear()
  const month = String(createdDate.getMonth() + 1).padStart(2, '0')
  const date = String(createdDate.getDate()).padStart(2, '0')
  return `${year}-${month}-${date}`
}