const occurrences = Number.parseInt(process.argv[2], 10);

if (Number.isNaN(occurrences)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < occurrences; i += 1) {
    console.log('C is fun');
  }
}

