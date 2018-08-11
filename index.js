var recipes = {
}

function updateObjectWithKeyAndValue(obj,key,val){
var obj1 = Object.assign({},obj);
obj1[key] = val;return obj1;
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  delete obj[key];
  return obj;
}