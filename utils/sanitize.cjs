function sanitize(data) {

  for (const thing in data) {

    if (data[thing] == '\x1B[32mMatty L\x1B[0m') {
      data[thing] = 'Matty L';
    };

  }

  return data;
}


module.exports = sanitize;
