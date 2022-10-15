class Formatter {
  //add static methods here
  static capitalize(word) {
    word.charAt(0).toUpperCase()
    return word
  }
  static sanitize(string) {
    const splittedString = string.split(' ')
    splittedString.map(word => {
      const sanitizedWord = word.split('')
      .filter((char) => typeof char == 'string' || typeof char == 'number')
      return sanitizedWord.join('')
    })
  }
}

