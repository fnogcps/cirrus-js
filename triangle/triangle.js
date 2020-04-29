//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y, z) {
    this.x = x, this.y = y, this.z = z
    this.n = [...new Set([x, y, z].filter(i => i != 0))].length
    this.max = Math.max(this.x, this.y, this.z)
  }

  tIneq = () => this.max < this.x + this.y + this.z - this.max
  isScalene = () =>  this.tIneq() && (this.n == 3)
  isIsosceles = () =>  this.tIneq() && (this.n == 1 || this.n == 2)
  isEquilateral = () =>  this.tIneq() && (this.n == 1)

}
