function isReadyToMove (maxDistance){
    let result = "да"
    this.maxDistance = maxDistance;
    if(this.maxDistance > 100){
        result = "нет";
    }
    return result;
   
}