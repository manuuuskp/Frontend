function connectedComponentsCount(graph) {
    const visited = new Set();
    let count = 0;
    for(let current in graph) {
        if(findConnectedComponent(graph, current, visited)){
            count += 1;
        }
    }
    return count;
}

function findConnectedComponent(graph, current, visited) {
    if(visited.has(String(current))) return false;
    visited.add(String(current));

    for(let neighbour of graph[current]) {
        findConnectedComponent(graph, neighbour, visited);
    }
    return true;
}

connectedComponentsCount({
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
});