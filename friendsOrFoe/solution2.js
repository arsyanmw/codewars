export function friend(friends){
  //your code here
  var realFriends = [];
  for(var i=0; i<friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      realFriends.push(friends[i]);
    }
  }
  
  return realFriends;
}