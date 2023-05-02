const history = {
  records: [],
  get templateRecords() {
    const template = this.records.map(
      (record) =>
      '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
    );
    return (
      '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
    );
  },
  drawRecords() {
    document.write(this.templateRecords);
  },
};

const shape = {
  dependencies: Object.seal({
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),
  get perimeter() {

    if (history.records.length && (
      JSON.stringify(this.dependencies) ===
      JSON.stringify(history.records[history.records.length - 1].dependencies))) {
        return history.records[history.records.length - 1].perimeter;
      };

    // there are maybe heavy calculations
    const total = Object.values(this.dependencies).reduce(
      (accm, value) => accm + value,
      0
    );

    // side effect
    history.records.push({
      dependencies: Object.assign({}, this.dependencies), // (!) - because a link | інакше, при зміні властивостей dependencies модифікується і records 
      perimeter: total,
    });

    return total;
  },

  set perimeter(perimeter) {
    if (!Number.isInteger(perimeter) || perimeter < 400) {
      return;
    }

    const size = perimeter / 4;

    this.dependencies = Object.seal({
      left: size,
      right: size,
      top: size,
      bottom: size,
    });

    // side effect

    history.records.push({
      dependencies: Object.assign({}, this.dependencies), // (!) - because a link | інакше, при зміні властивостей dependencies модифікується і records 
      perimeter: perimeter,
    });
  },
};


shape.perimeter //read (primary values) - output to doc
shape.perimeter //read - no changes

shape.perimeter = 500; //set - output to doc
shape.perimeter //read - no changes

shape.dependencies.bottom = 200; //changes not through perimeter value

shape.perimeter //read - output to doc (because not the same)
shape.perimeter //read - no changes
shape.perimeter //read - no changes

shape.dependencies.bottom = 300; //changes not through perimeter value

shape.perimeter; //read - output to doc (because not the same)
shape.perimeter; //read - no changes

shape.perimeter = 900; //set - output to doc

// draw records on screen
history.drawRecords();
