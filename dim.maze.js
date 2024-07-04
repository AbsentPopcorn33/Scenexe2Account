!function() {
    const dim = dimension.create({
      mapSize: 6400,
      basePolygonRadiant: 1,
      baseRadiantExponent: 0.75,
      radiantExponent: 0.85,               // mapsize
      name: 'mazeffa',                         // internal name of dim
      type: 'ffa',                       // leave this
      freeJoin: true,                       // whether tank can join from server select
      allowScale: false,                     // allow use of /mapsize command
      removeFallens: true,                  // remove tanks that go fallen
      displayName: 'Maze FFA',               // name of dim shown on server select
      displayRadiant: 0,                  // make color radiant on server select
      displayColor: -5, // color on server select
      darkness: 0,
      fillWalls: true,
      gleaming: 0,
      walls: [null,null,null,null,[-5800,5400,200,600],[-4800,5600,400,400],[-3800,5600,200,400],[-3400,4800,200,400],null,[-2400,4800,400,400],[-1800,4600,200,200],[-1800,5600,200,400],[-2200,5800,200,200],[-800,5200,400,800],[600,5200,600,800],[2000,4600,800,200],[1800,5400,200,600],[3200,5600,400,400],[3400,4600,200,200],[4000,4200,400,200],[4200,5200,200,400],[5000,5600,200,400],[5800,4200,200,200],[4600,3400,200,200],[5400,3000,600,200],[5600,2600,400,200],[4600,2600,200,200],[4800,1800,400,200],[5000,1000,200,200],[4600,600,200,600],[5800,800,200,400],[4600,-600,200,200],[5400,-1000,200,200],[5000,-1400,200,200],[5200,-1800,800,200],[4600,-2200,200,200],[5400,-2200,200,200],[4800,-3200,400,400],[3800,-3000,200,1000],[3400,-3600,200,400],[5000,-4200,600,200],[5000,-4600,200,200],[5600,-5600,400,400],[4200,-5200,200,400],[2800,-5600,400,400],[2600,-4600,200,200],[1800,-4800,200,400],[1600,-5800,400,200],[1000,-5400,200,200],[600,-4800,200,400],[600,-5800,200,200],[-400,-5800,400,200],[-200,-5400,200,200],[-200,-4600,200,200],[-1400,-5600,200,400],[-1000,-4800,200,400],[-2000,-4800,400,400],[-2200,-5800,200,200],[-3000,-4800,200,400],[-3000,-5800,200,200],[-4000,-4800,400,400],[-4800,-5600,400,400],[-4800,-4200,400,200],[-5000,-4600,200,200],[-5800,-4400,200,400],[-5800,-5400,200,200],[-5000,-3000,600,600],[-5800,-3200,200,400],[-5800,-2200,200,200],[-4800,-1800,400,200],[-5000,-1400,200,200],[-5800,-1400,200,200],[-4600,-600,200,600],[-5400,200,200,200],[-4600,1000,200,600],[-5000,1400,200,200],[-5600,2000,400,400],[-5800,3200,200,400],[-5000,3600,200,800],[-4600,3200,200,400],[-4600,4200,200,200],[-4200,4600,200,200],[-3600,3600,400,400],[-3600,2600,400,200],[-2000,3000,800,200],[-2600,3800,200,200],[-2200,2600,200,200],[-2600,2200,200,200],[-3400,400,600,1600],[-3600,-1400,400,200],[-2600,800,200,800],[-2200,-600,200,600],[-1800,-200,200,1400],[-1800,1800,200,200],[-600,3600,600,400],[-1400,3800,200,200],[-200,2400,200,800],[600,2000,600,400],[1400,2200,200,200],[800,3200,400,800],[1400,3400,200,600],[2400,3800,800,200],[2200,2800,200,800],[3200,3000,400,600],[3800,3000,200,200],[3800,2200,200,200],[3200,1800,400,200],[3400,400,600,1200],[2600,200,200,1000],[2200,400,200,800],[1800,600,200,1000],[2800,-1400,400,200],[3000,-1800,200,200],[2600,-2200,200,200],[2200,-2600,200,200],[2600,-3000,200,200],[1400,-2000,600,400],[1000,-2800,200,400],[2000,-3800,400,200],[1800,-3400,200,200],[600,-3600,200,400],[200,-2200,200,600],[-200,-3600,200,400],[-1200,-3800,400,200],[-1400,-3400,200,200],[-1000,-3000,200,200],[-600,-2600,200,200],[-800,-1800,400,200],[-2600,-1800,200,200],[-3400,-2200,200,200],[-2200,-2400,200,400],[-3000,-3000,1000,200],[-3600,-3400,400,200],[-3000,-3800,1000,200]],
      gates: [
        
      ],
      background: {                         // background color
        r: 205,
        g: 205,
        b: 205
      },
      grid: {                               // grid color
        r: 200,
        g: 200,
        b: 200
      },
      gridSize: 25,
      maxPolygonSides: 9,
      maxPolygonCount: 250,
      spawnPlayer: function(team, tank) {
        tank.body = "NULL"
        dim.updatedTanks[tank.id] = tank;
        let s = dim.mapSize
        // if(tank.team > 4) { s -= 2000 }
        return [(2 * Math.random() - 1) * s, (2 * Math.random() - 1) * s]
        tank.invincible = true            // remove spawn invincibility
        tank.invincibleTime = 15000 // remove spawn invincibility timer
        setTimeout(function() {
        })                       // spawn all tanks at center
      },
      isMain: true,
        spawnPolygon: function ($) { //let me look at scen2.js - $ is the dim //so i can for example say if ($ = whatever dim i pick){whatever happens to something} //$ is the current dim data so you can get the length of the polygon list - how many polygons exist / let me make a thing to count polygons with more that _ sides // ok
//          console.log($.polygons[0].sides)
let PolygonSideCount = 0;
for (let a = $.polygons.length - 1; a >= 0; a--) {
  let n = $.polygons[a];
  if(n.sides >= 7){PolygonSideCount++}
}
if(PolygonSideCount >= 7){return false;}
console.log(PolygonSideCount)
        let limit = 1750;
        let Size = 6400; // it kept saying polygon is undefined so i was just confused
        let XPos = Math.random() * (Size * 2) - Size;
        let YPos = Math.random() * (Size * 2) - Size;
        while (
          limit * -1 < XPos &&
          XPos < limit &&
          limit * -1 < YPos &&
          YPos < limit
        ) {
          0.5 > Math.random()
            ? (XPos = Math.random() * (Size * 2) - Size)
            : (YPos = Math.random() * (Size * 2) - Size);
        }
        return [XPos, YPos];
      },
    })
  }()