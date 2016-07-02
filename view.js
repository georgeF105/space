import $ from 'jquery'

export default class View {
  create (model) {
    console.log("creating ufo", model.name)
    $('#draw-window').append('<div class="ufo" id="' + model.id + '"></div>')
    console.log("made thing: #" + model.id)
    let xPos = model.getXPosition() - (model.size / 2)
    let yPos = model.getYPosition() - (model.size / 2)
    $('#' + model.id).css({width: model.size, height: model.size, top:yPos, left:xPos, background: model.colour, position:'absolute'})
  }
  render (model) {
    let xPos = model.getXPosition() - (model.size / 2)
    let yPos = model.getYPosition() - (model.size / 2)
    // console.log("rendering ufo:", model.name)
    // console.log("        X pos:", model.getXPosition())
    // console.log("        Y pos:", model.getYPosition())
    if(xPos > $('#draw-window').width() || xPos < 0 || yPos > $('#draw-window').height() || yPos < 0){
      $('#' + model.id).css({display: 'none'})
    }
    else{
      $('#' + model.id).css({display: 'inital',top: yPos, left: xPos})
    }
  }
}
