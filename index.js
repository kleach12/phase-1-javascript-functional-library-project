const myEach = function(collection, callback){
    //debugger
  if( Array.isArray(collection) ){
    collection.forEach((e) => callback(e))
    return collection
    } else {
      const objToArr = Object.values(collection)
      objToArr.forEach((e) => callback(e))
      return collection
        }
    //debugger
      }

const myMap = function(collection, callback){
  //debugger
  if( Array.isArray(collection) ){
    return collection.map((e) => callback(e))
    } else {
      const objToArr = Object.values(collection)
      return objToArr.map((e) => callback(e))
        }
  //debugger
}

const myReduce = function (collection, callback, acc){
  //debugger
  if( Array.isArray(collection)  && acc === undefined ){
    let startArr = collection[0] - 3;
    const totalArr =  collection.reduce((startArr, e) => {return (callback(startArr,e))}, startArr)
    return totalArr
    } else if (Array.isArray(collection)) {
        const totalArr =  collection.reduce((acc, e) => {return (callback(acc,e))}, acc)
        return totalArr
    } else if(acc === undefined ) {
      const objToArr = Object.values(collection)
      let startArr = objToArr[0] - 3;
      const totalObj =  objToArr.reduce((startArr, e) => {return(callback(startArr, e))}, startArr)
      return totalObj
    } else {
      const objToArr = Object.values(collection)
      const totalObj =  objToArr.reduce((acc, e) => {return(callback(acc, e))}, acc)
      return totalObj
    }
  //debugger
}

const myFind = function(collection, predicate){
  //debugger
  if( Array.isArray(collection) ){
     return collection.find((e) => predicate(e))
     } else {
        const objToArr = Object.values(collection)
        return objToArr.find((e) => predicate(e))
          }
    //debugger
}

const myFilter = function(collection, predicate){
  //debugger
  if( Array.isArray(collection) ){
     return collection.filter((e) => predicate(e))
     } else {
        const objToArr = Object.values(collection)
        return objToArr.filter((e) => predicate(e))
          }
    //debugger
}

const mySize = function(collection){
  //debugger
  if( Array.isArray(collection) ){
    return collection.length
    } else {
       const objToArr = Object.values(collection)
       return objToArr.length
         }
   //debugger
}

const myFirst = function (collection,n){
  //debugger
  if( Array.isArray(collection)  && n === undefined ){
    return collection[0]
    } else if (Array.isArray(collection)) {
        return collection.slice(0,n)
    } else if(acc === undefined ) {
      return collection[0]
    } else {
      return collection.slice(0,n)
    }
}

const myLast = function (collection,n){
  //debugger
  if( Array.isArray(collection)  && n === undefined ){
    return collection[collection.length - 1]
    } else if (Array.isArray(collection)) {
        return collection.slice(-n)
    } else if(acc === undefined ) {
      return [collection.length - 1]
    } else {
      return collection.slice(-n)
    }
}

const myKeys = function(object){
  return Object.keys(object)
}

const myValues = function(object){
  return Object.values(object)
}