const input = process.argv[2];
const parsed = Number.parseInt(input, 10);

if (Number.isNaN(parsed)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parsed}`);
}

