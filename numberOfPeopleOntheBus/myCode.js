export var number = function(busStops){
  let naik = 0, turun = 0;
  
  busStops.forEach((el, i) => {
    naik += el[0]
    turun += el[1]
  })
  
  return naik - turun
}