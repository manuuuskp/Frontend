const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

//convert this undirected graph into aadjacency list
//check if the path exists between node A and node B;

function undirectedPath(edges, nodeA, nodeB) {
    const graph = buildGraph(edges);
    console.log(graph);
    return hasPath(graph, nodeA, nodeB, new Set());
}

function hasPath(graph, src, dest, visited) {
    if(src === dest) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for(let path of graph[src]) {
         if(hasPath(graph, path, dest, visited) === true) return true;
    }
    return false;
}

function buildGraph(edges) {
    const adjacencyList = {};

    for(let [a, b] of edges) {
        //check if key is present in obj
        //if key present then push the value
        //if not create and object and push the value
        if(!adjacencyList[a]) {
            adjacencyList[a] = [];
        }
        if(!adjacencyList[b]) {
            adjacencyList[b] = [];
        }
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }

    return adjacencyList;
}

undirectedPath(edges, 'i', 'k');