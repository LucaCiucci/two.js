/**
 * @name Two.Utils.read
 * @property {Object} read - A map of functions to read any number of SVG node types and create Two.js equivalents of them. Primarily used by the {@link Two#interpret} method.
 */
export const read: {
    svg: (node: any) => any;
    defs: (node: any) => any;
    use: (node: any, styles: any) => any;
    g: (node: any, parentStyles: any) => Group;
    polygon: (node: any, parentStyles: any) => Path;
    polyline: (node: any, parentStyles: any) => any;
    path: (node: any, parentStyles: any) => Path;
    circle: (node: any, parentStyles: any) => any;
    ellipse: (node: any, parentStyles: any) => any;
    rect: (node: any, parentStyles: any) => any;
    'rounded-rect': (node: any, parentStyles: any) => any;
    line: (node: any, parentStyles: any) => any;
    lineargradient: (node: any, parentStyles: any) => LinearGradient;
    radialgradient: (node: any, parentStyles: any) => RadialGradient;
    text: (node: any, parentStyles: any) => Text;
    clippath: (node: any, parentStyles: any) => any;
    image: (node: any, parentStyles: any) => Sprite;
};
import { Group } from "../group.js";
import { Path } from "../path.js";
import { LinearGradient } from "../effects/linear-gradient.js";
import { RadialGradient } from "../effects/radial-gradient.js";
import { Text } from "../text.js";
import { Sprite } from "../effects/sprite.js";
