// 8.1 Retry
class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
};

const reliablyMultiply = (a, b) = {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      return reliablyMultiply(a, b);
    } else {
      throw error;
    }
  }
};

// 8.2 The Locked Box
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

const withBoxUnlocked = (body) => {
  let isLocked = box.locked;
  box.unlock();
  try {
    body()
  } finally {
    if (isLocked) box.lock();
  }
}

