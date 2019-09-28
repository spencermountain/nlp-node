module.exports = {
  hyphenate: {
    desc: 'remove whitespace and add a hyphenate between the words',
    returns: 'Text',
    example: `nlp('natural language processing').hyphenate().out()\n//natural-language-processing`,
  },
  dehyphenate: {
    desc: 'remove hyphens and add normal whitespace between words',
    returns: 'Text',
    example: `nlp('natural-language processing').dehyphenate().out()\n//natural language processing`,
  },
  trim: {
    desc: 'remove leading and trailing whitespace from each match',
    returns: 'Text',
    example: `nlp(' Lenny and Carl ').people().trim().out()\n//['Lenny', 'Carl']`,
  },
}