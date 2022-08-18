function sanitize(data) {

  for (const thing in data) {

    // Removes code for coloring text in terminal
    if (data[thing].includes(`\x1B[32m`)) {
      data[thing] = data[thing].slice(5, (data[thing].length - 4));
    };

    // TODO: Here would go more if-statements removing curse words,
    // or any code submitted,
    // or anything else one wouldnt want users submitting

  }

  return data;
}


module.exports = sanitize;
