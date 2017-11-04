import {Point} from "paper";
import {initCanvas, customMatchers} from "test/unit/spec_helper";
import {DetectableRectPart} from "src/lib/rails/parts/primitives/DetectableRectPart";
import {DetectableTrianglePart} from "../../../../src/lib/rails/parts/primitives/DetectableTrianglePart";

beforeEach(() => {
  jasmine.addMatchers(customMatchers);
});

describe('DetectableRectPart', function() {
  beforeAll(function() {
    initCanvas();
  })
  it('creates rectangle at specified position, angle and size.', function() {
    let part = new DetectableRectPart(new Point(100,100), 0, 100, 100, 50, 50, ['black', 'blue', 'red'], [0.5, 0.4, 0.3], true)
    part.move(new Point(200, 200))
    part.rotate(45)
  });
});

describe('DetectableTrianglePart', function() {
  beforeAll(function() {
    initCanvas();
  })
  it('creates rectangle at specified position, angle and size.', function() {
    let part = new DetectableTrianglePart(new Point(0,0), 0, 100, 100, 50, 50, ['black', 'blue', 'red'], [0.5, 0.4, 0.3], true)
    part.move(new Point(200, 200))
    part.rotate(45)
  });
});
