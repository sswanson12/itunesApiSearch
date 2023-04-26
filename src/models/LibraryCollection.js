import LibraryItem from "@/models/LibraryItem";

function LibraryCollection(){
    let arr = [];

    arr.addItem = function(item){
        console.log('addingItem');
        this.push(new LibraryItem(item));

        return this; // allows for chaining
    }

    return arr;
}

export default LibraryCollection;