import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    const node = new Node();
    node.value = value.trim();

    if (!this.headNode) {
      this.headNode = node;
    } else {
      let current = this.headNode;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.tailNode = node;
  }

  prepend(value) {
    const node = new Node();
    node.value = value.trim();

    if (!this.headNode) {
      this.headNode = node;
    } else {
      node.nextNode = this.headNode;
      this.headNode = node;
    }
  }

  insertAt(value, index) {
    const node = new Node();
    node.value = value.trim();

    if (index === 0) {
      this.prepend(value);
    }

    if (index > 0 && this.headNode) {
      let currentIndex = 1;
      let previous = this.headNode;
      let current = previous.nextNode;

      while (current) {
        if (currentIndex === index) {
          node.nextNode = current;
          previous.nextNode = node;
          return;
        }

        currentIndex += 1;
        previous = previous.nextNode;
        current = current.nextNode;
      }

      // If currentIndex is 1, the loop didn't execute and there's only one node in the list
      if (currentIndex === 1 && index === 1) {
        this.headNode.nextNode = node;
        // If we reached the end of the list and the given index is the tail node's index + 1
      } else if (currentIndex === index) {
        previous.nextNode = node;
      }
    }
  }

  size() {
    if (!this.headNode) {
      return 0;
    }

    let current = this.headNode;
    let listSize = 0;

    while (current) {
      listSize += 1;
      current = current.nextNode;
    }

    return listSize;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let currentIndex = 0;
    let current = this.headNode;

    while (currentIndex !== index && current !== null) {
      currentIndex += 1;
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    if (!this.headNode) {
      return;
    }

    let current = this.headNode;

    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this.tailNode = current;
  }

  removeAt(index) {
    if (!this.headNode) {
      return;
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
    }

    if (index > 0) {
      let currentIndex = 1;
      let previous = this.headNode;
      let current = previous.nextNode;

      while (current) {
        if (currentIndex === index) {
          previous.nextNode = current.nextNode;
          return;
        }

        currentIndex += 1;
        previous = previous.nextNode;
        current = current.nextNode;
      }

      // If currentIndex is 1, the loop didn't execute and there's only one node in the list
      if (currentIndex === 1 && index === 1) {
        this.headNode = null;
        // If we reached the end of the list and the given index is the tail node's index
      } else if (current && !current.nextNode && currentIndex === index) {
        previous.nextNode = null;
      }
    }
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let currentIndex = 0;

    while (current) {
      if (current.value === value) {
        return currentIndex;
      }

      currentIndex += 1;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let current = this.headNode;
    let string = '';

    while (current) {
      string = string.concat(`( ${current.value} ) -> `);
      current = current.nextNode;
    }

    string = string.concat('null');
    return string;
  }
}
