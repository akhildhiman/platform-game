* Game plan consists of a static grid like background having characters overlaid on that background:
    * **Moving**: Player(@), Coins(o), Moving Lava(=, |, v)
    * **Non-Moving**: Empty Space(.), Wall(#), Lava(+)

* **Actors** are moving characters and the rest are non-moving.

* Game plan string:   
```js
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`
```

* Actors are stored in an array of objects whereas the rest will be an array of arrays of strings holding field types such as "empty", "wall", or "lava".

* Postion of the actor is stored in a Vec object.

* We'll use different classes in this game. For example:
    * Player
    * State- to keep track of the game state
    * Lava, Coin


* We can define the `levelChars` object that maps plan characters to either background grid types or actor classes:
```js
const levelChars = {
  ".": "empty", "#": "wall", "+": "lava",
  "@": Player, "o": Coin,
  "=": Lava, "|": Lava, "v": Lava
}
```


