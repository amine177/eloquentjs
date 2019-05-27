const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

/* My code, it lacks on the functionnal programming side
function buildGraph(roads) {
  let graph = Object.create(null);
  for (let road of roads) {
    let end = road.split('-');
    if (graph[end[0]] === undefined)
      graph[end[0]] = [end[1]]
    else
      graph[end[0]].push(end[1])
  }

  return graph;
}
*/

function buildGraph(roads) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] === undefined) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of roads.map(road => road.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);
