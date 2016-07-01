import $ from 'jquery'

export default class View {
  create (model) {
    console.log("creating ufo", model.name)
    $('#draw-window').append('<div class="ufo" id="' + model.id + '"></div>')
    console.log("made thing: #" + model.id)
  }
  render (model) {
    let xPos = model.getXPosition()
    let yPos = model.getYPosition()
    // console.log("rendering ufo:", model.name)
    // console.log("        X pos:", model.getXPosition())
    // console.log("        Y pos:", model.getYPosition())
    $('#' + model.id).css({top: yPos, left: xPos})
  }
}
