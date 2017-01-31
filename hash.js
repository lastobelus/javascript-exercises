class Hash {
  constructor(obj) {
    this.hash = {};
    Object.assign(this.hash, obj);
  }
  isEmpty() {
    if(Object.keys(this.hash).length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  merge(hash) { //merges both hashes into a new hash and returns it
    let newObject = Object.assign({}, hash.hash, this.hash);

    return new Hash(newObject);
  }
  hasKey(key) {  //checks if key is in hash)
    if(Object.keys(this.hash).indexOf(key) === -1) {
      return false;
    }
    else {
      return true;
    }
  }
  invert() { //returns a new Hash with keys & their values and vice versa
    let keys   = Object.keys(this.hash);
    let values = Object.values(this.hash);
    let newObj = {};

    keys.forEach(function(key, index, arr) {
      newObj[ values[index] ] = keys[index];
    });

    return new Hash(newObj);
  }
  inspect() { //display the hash ruby style as a string
    let keys   = Object.keys(this.hash);
    let values = Object.values(this.hash);
    let hashString = "";
    let k, v;
    let sq = "'";

    hashString += "{";

    keys.forEach(function(key, index, arr) {

      k = (typeof key === 'string')? `${sq}${key}${sq}`: key;
      v = (typeof values[index] === 'string')? `${sq}${values[index]}${sq}` : values[index];

      hashString += `${k} => ${v}`;

      if(index !== arr.length - 1) {
        hashString += `, `;
      }
      else {
        hashString += ``;
      }
    });
    hashString += "}";
    return hashString;
  }
  keys() { //returns all hash keys in an array
    return Object.keys(this.hash);
  }
  values() { //returns all hash values in an array
    return Object.values(this.hash);
  }

}


let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

console.log("Is hash empty?: ", hash.isEmpty() );// returns false
console.log("Is emptyHash empty? ", emptyHash.isEmpty() );// returns true

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
console.log("merged Hash object: ", merged);
// returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// should not mutate original hash

console.log("Is merged !== hash?", merged !== hash );// should be true

console.log("Does hash have the key 'a' ? ", hash.hasKey('a') );// returns true
console.log("Does hash have the key 'bob'? ", hash.hasKey('bob') );// returns false
console.log("Does merged have the key 'bob'? ", merged.hasKey('bob') );// returns true

// Values will have to made into strings
console.log("hash inverted: ", hash.invert() );// returns Hash {'1':'a', '2':'b', '3':'c'}

console.log("hash inspect: ",  hash.inspect() );// returns "{'a' => 1, 'b' => 2, 'c' => 3}"

console.log("hash's keys: ", hash.keys() );// returns ['a', 'b', 'c']
console.log("hash's values: ", hash.values() );// returns [1, 2, 3]

























/////////////
