// 6.1 A Vector Type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus = (vector) => {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus = (vector) => {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

// 6.2 Groups
class Group {
  constructor() {
    this.members = [];
  }

  add = (value) => {
    if (!this.has(value)) this.members.push(value);
  }

  delete = (value) => {
    this.members.splice(this.members.indexOf(value), 1);
  }

  has = (value) => {
    return this.members.includes(value);
  }

  static from(items) {
    const newGroup = new Group();
    for (let item of items) {
      newGroup.add(item);
    }
    return newGroup;
  }
}

// 6.3 Iterable Groups
class Group {
  constructor() {
    this.members = [];
  }

  add = (value) => {
    if (!this.has(value)) this.members.push(value);
  }

  delete = (value) => {
    this.members.splice(this.members.indexOf(value), 1);
  }

  has = (value) => {
    return this.members.includes(value);
  }

  get = (index) => {
    return this.members[index];
  }

  static from(items) {
    const newGroup = new Group();
    for (let item of items) {
      newGroup.add(item);
    }
    return newGroup;
  }

  get length() {
    return this.members.length;
  }

  [Symbol.iterator] = () => {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next = () => {
    if (this.index === this.group.length) return {done: true};

    let value = this.group.get(this.index);
    this.index++;

    return {value, done: false};
  }
}

// 6.4 Borrowing a Method
let map = {one: true, two: true, hasOwnProperty: true};
Object.prototype.hasOwnProperty.call(map, 'one');
