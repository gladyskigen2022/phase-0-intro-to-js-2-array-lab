// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
//this is like cloning an original list
function appendCat(name){
let newCatName = cats.slice()
newCatName.push(name)
return newCatName
}
function prependCat(name){
    let newCatName = cats.slice()
newCatName.unshift(name)
return newCatName
}
function removeLastCat(){
    let newCatName = cats.slice()
    newCatName.pop()
    return newCatName 
}
function removeFirstCat(){
    let newCatName = cats.slice()
    newCatName.shift()
    return newCatName 
}