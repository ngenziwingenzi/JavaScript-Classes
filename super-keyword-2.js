class Tree {
  constructor(height = 10, leavesColor = "green") {
    this.height = height;
    this.leavesColor = leavesColor;
  }

  changeSeason(season) {
    if (season === "fall") this.leavesColor = "orange";
  }
}

class Maple extends Tree {
  constructor(height, leavesColor, syrupQty = 15) {
    // call super with height and leavesColor
    super(height, leavesColor)
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    // call super.changeSeason(season)
    super.changeSeason(season);
    // add Maple-specific behavior
    console.log('a log for Uwinzinge')
  }
}

// Test
const m = new Maple(12, "green");
m.changeSeason("fall");
console.log(m.leavesColor); // orange
console.log(m.syrupQty);    // 15
