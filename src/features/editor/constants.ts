import {
  ICircleOptions,
  IRectOptions,
  ITextboxOptions,
  ITriangleOptions,
} from 'fabric/fabric-impl';

import * as material from 'material-colors';
import { ActiveTool } from './types';

export const SELECTION_DEPENDENT_TOOLS: ActiveTool[] = [
  'fill',
  'filter',
  'font',
  'opacity',
  'remove-bg',
  'stroke-color',
  'stroke-width',
];

export const WORKSPACE_NAME = 'clip';

export const DEFAULT_SHAPE_WIDTH = 150;
export const DEFAULT_SHAPE_HEIGHT = 150;

export const FILL_COLOR = 'rgba(0, 0, 0, 1)';
export const STROKE_COLOR = 'rgba(0, 0, 0, 1)';
export const STROKE_WIDTH = 2;
export const STROKE_DASH_ARRAY = [];
export const DEFAULT_OPACITY = 1;

export const DEFAULT_FONT_FAMILY = 'Arial';
export const DEFAULT_FONT_SIZE = 40;
export const DEFAULT_FONT_WEIGHT = 400;
export const DEFAULT_FONT_STYLE = 'normal';
export const DEFAULT_FONT_LINETHROUGH = false;
export const DEFAULT_FONT_UNDERLINE = false;
export const DEFAULT_TEXT_ALIGN = 'left';

export const CIRCLE_OPTIONS = {
  radius: 75,
  width: DEFAULT_SHAPE_WIDTH,
  height: DEFAULT_SHAPE_HEIGHT,
} as const satisfies ICircleOptions;

export const RECTANGLE_OPTIONS = {
  width: DEFAULT_SHAPE_WIDTH,
  height: DEFAULT_SHAPE_HEIGHT,
  angle: 0,
} as const satisfies IRectOptions;

export const TRIANGLE_OPTIONS = {
  width: DEFAULT_SHAPE_WIDTH,
  height: DEFAULT_SHAPE_HEIGHT,
  angle: 0,
} as const satisfies ITriangleOptions;

export const DIAMOND_OPTIONS = {
  width: 200,
  height: 200,
} as const satisfies IRectOptions;

export const TEXTBOX_OPTIONS = {
  type: 'text',
  left: 100,
  top: 100,
  fontSize: DEFAULT_FONT_SIZE,
} as const satisfies ITextboxOptions;

export const MATERIAL_COLORS = [
  material.red['500'],
  material.pink['500'],
  material.purple['500'],
  material.deepPurple['500'],
  material.indigo['500'],
  material.blue['500'],
  material.lightBlue['500'],
  material.cyan['500'],
  material.teal['500'],
  material.green['500'],
  material.lightGreen['500'],
  material.lime['500'],
  material.yellow['500'],
  material.amber['500'],
  material.orange['500'],
  material.deepOrange['500'],
  material.brown['500'],
  material.blueGrey['500'],
  'transparent',
];

export const FONTS = [
  'Arial Black',
  'Arial',
  'Bookman',
  'Brush Script MT',
  'Comic Sans MS',
  'Courier New',
  'Garamond',
  'Geneva',
  'Georgia',
  'Helvetica',
  'Impact',
  'Lucida Console',
  'Palatino Linotype',
  'Palatino',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
];

// TODO: add labels and mini previews
export const FILTERS = [
  'default',
  'polaroid',
  'sepia',
  'kodachrome',
  'contrast',
  'brightness',
  'brownie',
  'vintage',
  'technicolor',
  'pixelate',
  'invert',
  'blur',
  'sharpen',
  'emboss',
  'removecolor',
  'blacknwhite',
  'vibrance',
  'blendcolor',
  'huerotate',
  'resize',
  'gamma',
  'grayscale',
  'saturation',
] as const;

export const HISTORY_JSON_KEYS = [
  'name',
  'gradientAngle',
  'selectable',
  'hasControls',
  'linkData',
  'editable',
  'extension',
  'extensionType',
];
