function bounceOff(object1,obj2){
    if (object1.x - obj2.x < object1 + obj2.width/2
      && obj2.x - object1.x < object1.width/2 + obj2.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    obj2.velocityX = obj2.velocityX * (-1);
  }
  if (object1.y - obj2.y < obj2.height/2 + object1.height/2
    && obj2.y - object1.y < obj2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
    obj2.velocityY = ob2.velocityY * (-1);
  }
  
  
  
  }
   
  function isTouching(object1, object2){
    if (object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
       return true;
  }
  else {
  
      return false;
  }
  }