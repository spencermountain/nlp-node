const here = 'shift-tagger'
//
const shiftTagger = function (doc) {
  if (doc.has('#Date')) {
    //'two days before'/ 'nine weeks frow now'
    doc.match('#Cardinal #Duration (before|after|ago|from|hence)').tag('#DateShift', here)
    // in two weeks
    doc.match('in #Cardinal #Duration').tag('#DateShift', here)
    //two weeks and three days before
    doc.match('#Cardinal #Duration and? #DateShift').tag('#DateShift', here)
    doc.match('#DateShift and #Cardinal #Duration').tag('#DateShift', here)
    // 'day after tomorrow'
    doc.match('[#Duration (after|before)] #Date', 0).tag('#DateShift', here)
  }
  return doc
}
module.exports = shiftTagger
