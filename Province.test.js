const { Province, sampleProvinceData } = require("./Province");

describe("province", function () {
  let asia;

  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  })

  it("shortfall", function () {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", function () {
    expect(asia.profit).toBe(230);
  });
});
