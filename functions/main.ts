######################
# Contextual Keyboard
######################

@func XMLNode.contextual_keyboard(Text %xpath, Text %type){
  #log(%type)
  $(%xpath){
    match(%type){
      with(/tel/){
        attribute("type","tel")
      }
      with(/email/){
        attribute("type","email")
      }
      with(/numeric/){
        attribute("pattern", "\\d*")
      }
      with(/url/){
        attribute("type", "url")
      }
    }
  }
  
}

@func XMLNode.keyboard(Text %type){
  #log(%type)
  match(%type){
    with(/tel/){
      attribute("type","tel")
    }
    with(/email/){
      attribute("type","email")
    }
    with(/numeric/){
      attribute("pattern", "\\d*")
    }
    with(/url/){
      attribute("type", "url")
    }
  }
}