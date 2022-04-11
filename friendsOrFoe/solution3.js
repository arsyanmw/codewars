export function friend(friends){
    let result = []
    friends.forEach(fr => {
      if (fr.length === 4) result.push(fr)
    })
    return result
  }