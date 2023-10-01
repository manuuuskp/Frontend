const edge = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];

function shortestPath(edge, start, dest) {
    const graph = buildGraph(edge);
    const visited = new Set();
    const queue = [[start, 0]];
    while(queue.length > 0) {
        const [current, distance] = queue.shift();
        if(current === dest) return distance;
        for(let neighbour of graph[current]) {
            if(!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push([neighbour, distance + 1]);
            }
        }
    }
    return -1;
}


function buildGraph(edge) {
    let graph = {};
    for(let [a,b] of edge) {
        if(!graph[a]) {
            graph[a] = [];
        }
        if(!graph[b]) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

shortestPath(edge, 'w', 'z');