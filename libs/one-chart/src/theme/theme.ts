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
    bulletColor: constants.COLORS.primary300,
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
    valueEnabled: constants.COLORS.primary300,
    valueDisabled: constants.COLORS.primary400,
    valueHovered: constants.COLORS.primary300,
    strokeEnabledColor: constants.COLORS.primary500,
    strokeDisabledColor: constants.COLORS.primary500,
    strokeHoveredColor: constants.COLORS.primary500,
    strokeEnabledOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeDisabledOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeHoveredOpacity: constants.GRAPH_STROKE_OPACITY,
    strokeWidth: constants.GRAPH_STROKE_WIDTH,
    lineColor: constants.COLORS.ui100,
  },
  __COLORS: constants.COLORS,
} as ITheme;
