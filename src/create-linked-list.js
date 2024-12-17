import { createNode } from "./create-node.js"

export function createLinkedList() {
  let head = null

  const isEmpty = () => head === null

  const setFirst = (value) => {
    head = createNode(value, head)
  }

  const getHead = () => {
    if (isEmpty()) return null
    return head.data
  }

  const setLast = (value) => {
    const newNode = createNode(value)

    if (isEmpty()) {
      head = newNode
    }

    let currentNode = head

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  const getTail = () => {
    if (isEmpty()) return null

    let currentNode = head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  const getSize = () => {
    let size = 0
    if (isEmpty()) return size

    let currentNode = head
    while (currentNode !== null) {
      size++
      currentNode = currentNode.next
    }
    return size
  }

  const getDataAtIndex = (index) => {
    let currentIndex = 0
    if (isEmpty()) return null

    let currentNode = head
    while (currentIndex < index) {
      if (currentIndex === index) return currentNode.data
      currentNode = currentNode.next
      currentIndex++
    }
    return null
  }

  const pop = () => {
    if (isEmpty()) return null

    if (head.next === null) {
      const data = head.data
      head = null
      return data
    }

    let currentNode = head
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next
    }

    const data = currentNode.next.data
    currentNode.next = null
    return data
  }

  return {
    isEmpty,
    setFirst,
    getHead,
    setLast,
    getTail,
    getSize,
    getDataAtIndex,
    pop,
  }
}
