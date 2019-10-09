const pattern = /a+b+/g;

const text2 = 'aabbababaaaaaaabbbbbb';

while (true) {
  const match = pattern.exec(text2);

  if (match === null) {
    break;
  }

  console.log(match[0], pattern.lastIndex);
}

// Override `lastIndex` to start matching from a specific index

const pattern = /a+b+/g;

const text2 = 'aabbababaaaaaaabbbbbb';

pattern.lastIndex = 5;

console.log(pattern.exec(text2)[0], pattern.lastIndex); // ab, 8
