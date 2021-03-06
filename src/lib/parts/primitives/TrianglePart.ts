/**
 * Created by tozawa on 2017/07/03.
 */

import {sprintf} from "sprintf-js";
import {Color, Path, Point} from "paper";
import {SinglePart} from "./SinglePart";


export function createTrianglePath(width: number, height: number) {
  let pathData = sprintf("M 0 0 L %f %f L %f %f Z",
    width/2, height,
    -width/2, height,
  );
  let path = new Path(pathData)
  path.position = path.position.subtract(new Point(0, height*2/3))
  return path
}

/**
 * 三角形パーツの基底クラス
 */
export class TrianglePart extends SinglePart {
  width: number;
  height: number;

  /**
   * 三角形の重心がこのパーツの「位置」
   * @returns {"paper".Point}
   */
  get position(): Point {
    let sum = new Point(0, 0)
    this.path.segments.forEach(s => {
      sum = sum.add(s.point)
    })
    return sum.divide(3)
  }

  /**
   * 三角形パーツを指定の位置・角度で作成する。
   * @param {Point} position  中心点の位置
   * @param {number} angle    X軸に対する絶対角度
   * @param {number} width    幅
   * @param {number} height   高さ
   * @param {Color} fillColor 色
   */
  constructor(position: Point, angle: number, width: number, height: number, fillColor: string) {
    let path = createTrianglePath(width, height)
    super(path);

    this.width = width;
    this.height = height;
    this.path.fillColor = fillColor;

    this.move(position, this.position);
    this.rotate(angle, this.position);
  }

  /**
   * 上部の頂点を返す。
   * @returns {"paper".Point}
   */
  getCenterOfTop() {
    return this.path.segments[0].point;
  }

  /**
   * 底辺の中点を返す。
   * @returns {"paper".Point}
   */
  getCenterOfBottom() {
    return this.path.curves[1].getLocationAt(this.path.curves[1].length/2).point;
  }
}
