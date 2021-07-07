import View from './one/View/index.js'
import world from './world.js'
import version from './_version.js'

const nlp = function (document, lex) {
  // add user-given words to lexicon
  if (lex) {
    Object.assign(world.model.lexicon, lex)
  }
  // vroom!)
  world.parsers.forEach(fn => {
    document = fn(document, world)
  })
  return new View(document)
}

/** log the decision-making to console */
nlp.verbose = function (set) {
  let env = typeof process === undefined ? self.env : process.env //use window, in browser
  env.DEBUG_TAGS = set === undefined ? true : Set // assume true
  return this
}

/** pre-parse any match statements */
nlp.parseMatch = world.methods.parseMatch

/** extend compromise functionality */
nlp.plugin = function (fn) {
  fn(world, View)
  return this
}

/** reach-into compromise internals */
const { methods, model } = world
nlp.methods = () => world.methods
nlp.model = () => world.model

nlp.version = version

// apply our only default plugins
export default nlp
const { parseMatch, plugin } = nlp
export { parseMatch, plugin, methods, model, version, plugin as extend }
