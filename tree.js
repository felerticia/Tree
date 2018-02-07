function SortTree(){
    this.arr = [];
}
SortTree.prototype.empty = function(){
    this.arr.length =0;
}
SortTree.prototype.add = function(val){
    this.arr.push(val);
    return this.arr;
}
sorted = new SortTree();

function Tree(){
    this.root = null
}
Tree.prototype.addNewNode = function (newNode){
    if (this.root == null)
        this.root = newNode;
    else{
        this.root.addNewNode(newNode)
    }
}
Tree.prototype.sortAsc = function (){
    sorted.empty();
    this.root.visit();
    return sorted.arr
}
Tree.prototype.sortDesc = function (){
    sorted.empty();
    this.root.visit();
    return sorted.arr.reverse()
}
Tree.prototype.search = function (srch){
    var found = this.root.search(srch);
    return found;
}
Tree.prototype.remove = function (val){
    var arr = this.sortAsc();
    if (arr.indexOf (val) == -1)
        return (-1);
    else {
        arr.splice (arr.indexOf(val),1);
        tree = new Tree();
        for (var i=0;i<=arr.length;i++) 
            tree.addNewNode(new Node(arr[i]));
    }
}


function Node(val){
    this.leftNode = null;
    this.rightNode = null;
    this.parentNode = null;
    this.value = val
}
Node.prototype.addNewNode = function (newNode){
    if (newNode.value < this.value)
        if (this.leftNode == null)
            this.leftNode = newNode;
        else   
            this.leftNode.addNewNode(newNode)
    else if (newNode.value > this.value)
        if (this.rightNode == null)
            this.rightNode = newNode;
        else   
            this.rightNode.addNewNode(newNode)

}
Node.prototype.visit = function(){
    if (this.leftNode !== null)
        this.leftNode.visit();
    sorted.add(this.value)
    if (this.rightNode !== null)
        this.rightNode.visit();
}
Node.prototype.search = function(srch){
    if (this.value == srch)
        return this;
    else if (this.leftNode!= null && this.value > srch)
        return this.leftNode.search (srch)
    else if (this.rightNode!= null && this.value < srch)
        return this.rightNode.search (srch)
    return null
}
Node.prototype.remove = function(srch){

}

var tree = new Tree();
for (var i = 1; i<=5; i++)
    tree.addNewNode(new Node(Math.round(Math.random()*90)))
tree.search(45);
tree.remove(33)