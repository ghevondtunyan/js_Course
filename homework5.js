/* #1. Given a sorted array and an element from that array. Find the index of that
element using binary search. */

function binSearchTask(arr, el) {

    let startIdx = 0;
    let endIdx = arr.length - 1;


    while (startIdx <= endIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (el === arr[middleIdx]) {
            return arr.indexOf(el);
        }
        if (el > arr[middleIdx]) {
            startIdx = middleIdx + 1;
            return arr.indexOf(el);
        } else if (el < arr[middleIdx]) {
            endIdx = middleIdx - 1;
            return arr.indexOf(el);
        } else {
            console.log("Nothing was found")
        }
    }
}
binSearchTask([], el)


// #2 Treenodes task

var treeNodes = [
    {parent: null, id:0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
];

function tree (arr, parent = null){
    let result = {};

    let nodes = arr.filter(el => el.parent === parent);

    nodes.forEach(el => {
        return result[el.id] = tree(arr, el.id);
    })
    return result;
}

tree(treeNodes)