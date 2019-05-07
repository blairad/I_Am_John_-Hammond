const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.collectionOfDinosaurs = function(){
    return this.collectionOfDinosaurs.length;
}
Park.prototype.addDinosaur = function (dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}
module.exports = Park;