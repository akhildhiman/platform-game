// creates a new vector object with x and y coordinates
class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y)
  }

  times(factor) {
    return new Vec(this.x * factor, this.y * factor)
  }
}

const simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`


const levelChars = {
  ".": "empty", "#": "wall", "+": "lava",
  "@": Player, "o": Coin,
  "=": Lava, "|": Lava, "v": Lava
}


class Level {
  constructor(plan) {
    let rows = plan.trim().split("\n").map(l => [...l])
    this.height = height
    this.width = rows[0].length
    this.startActors = []

    this.rows = rows.map((row, y) => {
    return row.map((ch, x) => {
      const type = levelChars[ch]
      if (typeof type === "string") return type
      this.startActors.push(
        type.create(new Vec(x, y), ch) // create a new actor
        )
        return empty
      })
   })
  }
}





