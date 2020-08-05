const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];


const buildGraph = (edges) => {
  // create an object that doesn't inherit anything from Object
  const graph = Object.create(null);
  // for each node, store an array of connected nodes
  for (let edge of edges) {
    let [from, to] = edge.split('-');
    graph[from] ? graph[from].push(to) : graph[from] = [to];
    graph[to] ? graph[to].push(from) : graph[to] = [from];
  }
  return graph;
}


const roadGraph = buildGraph(roads);



