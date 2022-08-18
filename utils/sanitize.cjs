function sanitize(data) {

  for (const thing in data) {

    if (data[thing].includes(`\x1B[32m`)) {

      data[thing] = data[thing].slice(5, (data[thing].length - 4));
    };

  }

  return data;
}


module.exports = sanitize;
