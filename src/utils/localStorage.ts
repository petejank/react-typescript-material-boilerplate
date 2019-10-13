export function setItem(itemKey: string, itemValue: any) {
  if (typeof itemValue === 'object') {
    itemValue = JSON.stringify(itemValue)
  }

  localStorage.setItem(itemKey, itemValue)
}

export function getItem(itemKey: string): any {
  const itemValue = localStorage.getItem(itemKey)
  if (!itemValue) return

  try {
    return JSON.parse(itemValue)
  } catch (err) {
    return itemValue
  }
}

export function removeItem(itemKey: string) {
  localStorage.removeItem(itemKey)
}
