function maxComponent(graph) {
    const visited = new Set();
    let maxSize = 0;
    for(let node in graph) {
        const size = explore(graph, node, visited);
        if(size > maxSize) maxSize = size;
    }
    return maxSize;
}

function explore(graph, current, visited) {
    if(visited.has(current)) return 0;

    visited.add(current);

    let size = 1;

    for(let neighbour of graph[current]) {
        size += explore(graph, neighbour, visited);
        console.log('the size is '+ current + ' ' + size);
    }

    return size;
}

maxComponent({
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
});