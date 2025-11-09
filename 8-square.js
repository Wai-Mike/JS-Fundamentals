const size = Number.parseInt(process.argv[2], 10);

if (Number.isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  const row = 'X'.repeat(size);
  for (let i = 0; i < size; i += 1) {
    console.log(row);
  }
}

