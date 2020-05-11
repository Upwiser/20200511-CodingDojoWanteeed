import { expect } from "chai";
import calculate from "../src/calculate";

describe("Cart Potter", () => {
  it("Will return 0 if there is no books", () => {
    const costCart = calculate([]);
    expect(costCart).to.equal(0);
  });

  it("Will return 8 if there is book 1", () => {
    const costCart = calculate([1]);
    expect(costCart).to.equal(8);
  });

  it("Will return 8 + 8 = 16 if there is book 1 twice", () => {
    const costCart = calculate([1, 1]);
    expect(costCart).to.equal(8 + 8);
  });

  it("Will return 16 - 5% if there is book 1 and 2", () => {
    const costCart = calculate([1, 2]);
    expect(costCart).to.equal(8 * 2 * 0.95);
  });

  it("Will return 24 - 10% if there is book 1 and 2 and 3", () => {
    const costCart = calculate([1, 2, 3]);
    expect(costCart).to.equal(8 * 3 * 0.9);
  });
});
