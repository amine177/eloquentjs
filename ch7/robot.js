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


class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination) {
      return this;
    } else {
    let parcels = this.parcels.map(parcel => {
      if (parcel.place != this.place) return p;
      return {place: destination, address: p.address};
    }).filter(parcel => {
      p.address != p.place
    });

    return new VillageState(destination, parcels);
    }
  }
}
const roadGraph = buildGraph(roads);
console.log(roadGraph);
