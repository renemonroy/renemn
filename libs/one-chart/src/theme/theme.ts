import * as constants from "./theme.constants";
import { ITheme } from "./theme.types";

export default {
  def: {
    backgroundColor: constants.COLORS.uiWhite,
    borderRadius: constants.BORDER_RADIUS.base,
    font: constants.FONT_FAMILY.openSans,
    fontWeight: constants.FONT_WEIGHT.normal,
    textColor: constants.COLORS.uiBlack,
    h1: constants.FONT_SIZE.xxxl,
    h2: constants.FONT_SIZE.xxl,
    h3: constants.FONT_SIZE.lg,
    h4: constants.FONT_SIZE.base,
    subtitle1: constants.FONT_SIZE.base,
    subtitle2: constants.FONT_SIZE.xs,
    body1: constants.FONT_SIZE.base,
    body2: constants.FONT_SIZE.sm,
    caption1: constants.FONT_SIZE.sm,
    caption2: constants.FONT_SIZE.xs,
    bulletColor: constants.COLORS.primary500,
  },
  card: {
    backgroundColor: constants.COLORS.uiWhite,
    borderColor: constants.COLORS.ui200,
    h4Color: constants.COLORS.uiBlack,
    subtitle2Color: constants.COLORS.ui600,
    textColor: constants.COLORS.uiBlack,
  },
  legends: {
    borderRadius: constants.BORDER_RADIUS.lg,
  },
  space: constants.SPACE, // only required here to override default spaces
  chart: {
    valueEnabled: constants.COLORS.primary500,
    valueDisabled: constants.COLORS.primary600,
    valueHovered: constants.COLORS.primary500,
    strokeEnabledColor: constants.COLORS.primary800,
    strokeDisabledColor: constants.COLORS.primary800,
    strokeHoveredColor: constants.COLORS.primary800,
    strokeEnabledOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeDisabledOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeHoveredOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeWidth: constants.GRAPH_STROKE_WIDTH,
    lineColor: constants.COLORS.ui700,
  },
  __COLORS: constants.COLORS,
} as ITheme;
