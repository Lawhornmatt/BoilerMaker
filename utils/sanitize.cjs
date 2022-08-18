function sanitize(data) {

  for (const thing in data) {

    // Removes code for coloring text in terminal
    if (data[thing].includes(`\x1B[32m`)) {
      data[thing] = data[thing].slice(5, (data[thing].length - 4));
    };

    // Makes GNU GPL v3 easier to type out over and over
    if (data[thing] == `GNU GPL v3`) {
      data[thing] = `GNU`;
    };

    // TODO: Here would go more if-statements removing curse words,
    // or any code submitted,
    // or anything else one wouldnt want users submitting

  }

  return data;
}


module.exports = sanitize;
