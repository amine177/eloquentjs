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
      return turn;
    }

    // action {direction: ...., memory: ...}
    let action = robot(state, memory);
    state  = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function compareRobots(robot1, robot2, iterations=100) {
  let e1 = 0;
  let e2 = 0;
  for (let i = 0; i < iterations; i++) {
    let randomVillage = VillageState.random();
    e1 += runRobot(randomVillage, robot1, []);
    e2 += runRobot(randomVillage, robot2, []);
  }

  return {"e1" : e1/iterations, "e2": e2/iterations};
}


function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

/*
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}
*/


function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for(let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}


function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  let betterRoute = route.filter(r=>roadGraph[place] == r)
    .sort(
      (r1, r2) => {
        return numberOfParcels(r1, parcels) > numberOfParcels(r2, parcels) ? -1: 1;
      });
  if (betterRoute.length == 0)
    betterRoute = route;

    return {direction: betterRoute[0], memory: route.filter(r=>r!= betterRoute[0])};
}

function numberOfParcels(address, parcels) {
  let n = 0;
  for (let parcel of parcels)
    if (parcel.address == address)
      n += 1;

  return n;
}

function betterRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel;
    let filteredParcels = parcels.filter(
      p => roadGraph[p.place].indexOf(p.address) >= 0);
    if (filteredParcels.length > 0) {
      parcel = filteredParcels[0];
    }
    else
      parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

const roadGraph = buildGraph(roads);
console.log("Our graph:")
console.log("**************"); 
console.log(roadGraph);
console.log("**************"); 


console.log("running random robot");
let randomVillage = VillageState.random();
console.log(randomVillage);
runRobot(randomVillage, goalOrientedRobot, []);

console.log(compareRobots(goalOrientedRobot, betterRobot));
