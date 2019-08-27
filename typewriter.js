const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  if (delay === (sentence.length) * 50) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, delay);
  }
}

