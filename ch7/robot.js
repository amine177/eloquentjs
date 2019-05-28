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
  let graph = Object.create({});

  function addEdge(from, to) {
    if (graph[from] == null) {
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
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
    let parcels = this.parcels.map(parcel => {
      if (parcel.place != this.place) return parcel;
      return {place: destination, address: parcel.address};
    }).filter(parcel => parcel.address != parcel.place);
    return new VillageState(destination, parcels);
    }
  }
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    // action {direction: ...., memory: ...}
    let action = robot(state, memory);
    state  = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}


function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}
const roadGraph = buildGraph(roads);
console.log("Our graph:")
console.log("**************"); 
console.log(roadGraph);
console.log("**************"); 


console.log("running random robot");
let randomVillage = VillageState.random();
console.log(randomVillage);
runRobot(randomVillage, randomRobot);
