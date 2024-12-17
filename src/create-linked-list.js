import { createNode } from "./create-node.js"

export function createLinkedList() {
  let head = null

  const isEmpty = () => head === null

  const setFirst = (value) => {
    head = createNode(value, head)
  }

  const getFirst = () => {
    if (!head) return null
    return head.data
  }

  const setLast = (value) => {
    if (!head) createNode(value, head)
    let tempHead = head.next
    while (tempHead.next !== null) {
      tempHead = tempHead.next
    }
    tempHead.next = createNode(value)
  }

  const getLast = () => {
    if (!head) return null

    let tempHead = head.next
    while (tempHead.next !== null) {
      tempHead = tempHead.next
    }
    return tempHead
  }

  return { isEmpty, setFirst, getFirst, setLast, getLast }
}
