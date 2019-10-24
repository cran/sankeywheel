#' Create Dependency Wheels and Sankey Diagrams
#'
#'  @description By binding R functions and the 'Highcharts' <http://www.highcharts.com/> charting library, 'sankeywheel' package provides a simple way to draw dependency wheels and sankey diagrams.
#'
#' @param from from verctor;
#' @param to to vector;
#' @param weight weight vector;
#' @param type Charts type, dependencywheel or sankey;
#' @param width chart width, for example, "100\%";
#' @param height chart height, for example, "400px";
#' @param theme chart theme, you can use these themes:
#' darkgreen/darkblue/avocado/darkunica/gray/
#' gridlight/grid/sandsignika/sunset;
#' @param title title;
#' @param titleAlign title alignment, left/center/right;
#' @param titleSize title size, like "20px";
#' @param titleColor title color, like "#333333";
#' @param subtitle subtitle;
#' @param subtitleAlign subtitle alignment, left/center/right;
#' @param subtitleSize subtitle size, like "16px";
#' @param subtitleColor subtitle color, like "#666666";
#' @param seriesName Series name, like "demo series";
#' @param elementId NULL.
#' @param ... Additional parameters.
#'
#' @import htmlwidgets
#'
#' @examples
#' library(sankeywheel)
#' if(interactive()){
#'     sankeywheel(from = sankeydf$from,
#'         to = sankeydf$to,
#'         weight = sankeydf$weight,
#'         type = "dependencywheel")
#'     sankeywheel(from = sankeydf$from,
#'         to = sankeydf$to,
#'         weight = sankeydf$weight,
#'         type = "sankey",
#'         theme = "sunset")
#' }
#'
#' @export
sankeywheel <- function(from,
                        to,
                        weight,
                        type = 'dependencywheel',
                        width = NULL,
                        height = NULL,
                        seriesName = 'demo series',
                        theme = "sandsignika",
                        title = "Example Chart",
                        titleAlign = "center",
                        titleSize = "20px",
                        titleColor = "#333333",
                        subtitle = "",
                        subtitleAlign = "center",
                        subtitleSize = "",
                        subtitleColor = "#666666",
                        elementId = NULL,
                        ...) {
  stopifnot(type %in% c("dependencywheel", "sankey"))
  stopifnot(theme %in% c("darkgreen", "darkblue", "avocado", "darkunica", "gray", "gridlight", "grid", "sandsignika", "sunset"))
  # forward options using x
  x = list(
    from = from,
    to = to,
    weight = weight,
    type = type,
    seriesName = seriesName,
    theme = theme,
    title = title,
    titleAlign = titleAlign,
    titleColor = titleColor,
    titleSize = titleSize,
    subtitle = subtitle,
    subtitleAlign = subtitleAlign,
    subtitleSize = subtitleSize,
    subtitleColor = subtitleColor,
    ...
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'sankeywheel',
    x,
    width = width,
    height = height,
    package = 'sankeywheel',
    elementId = elementId
  )
}

#' Shiny bindings for sankeywheel
#'
#' Output and render functions for using sankeywheel within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a sankeywheel
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name sankeywheel-shiny
#'
#' @export
sankeywheelOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'sankeywheel', width, height, package = 'sankeywheel')
}

#' @rdname sankeywheel-shiny
#' @export
renderSankeywheel <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, sankeywheelOutput, env, quoted = TRUE)
}
