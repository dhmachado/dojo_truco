function func(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

Array.prototype.duple = function() {
    this.forEach(func);
};