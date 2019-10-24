## ---- include = FALSE----------------------------------------------------
knitr::opts_chunk$set(
  collapse = TRUE,
  comment = "#>"
)

## ------------------------------------------------------------------------
library(sankeywheel)

## ------------------------------------------------------------------------
DT::datatable(sankeydf)

## ------------------------------------------------------------------------
sankeywheel(from = sankeydf$from,
            to = sankeydf$to,
            weight = sankeydf$weight,
            type = "dependencywheel", 
            width = "100%")

## ------------------------------------------------------------------------
sankeywheel(from = sankeydf$from,
            to = sankeydf$to,
            weight = sankeydf$weight,
            type = "sankey", 
            width = "100%")

## ------------------------------------------------------------------------
library(manipulateWidget)
combineWidgets(
  sankeywheel(from = sankeydf$from,
            to = sankeydf$to,
            weight = sankeydf$weight,
            type = "sankey", 
            width = "100%",
            theme = "sunset", 
            title = "SUNSET"),
  sankeywheel(from = sankeydf$from,
            to = sankeydf$to,
            weight = sankeydf$weight,
            type = "dependencywheel", 
            width = "100%", 
            theme = "sunset", 
            title = "SUNSET"),
  byrow = TRUE, ncol = 2, width = "100%", height = "300px"
)

## ------------------------------------------------------------------------
sankeywheel(from = sankeydf$from,
            to = sankeydf$to,
            weight = sankeydf$weight,
            type = "dependencywheel", 
            seriesName = "Random data: ",
            width = "100%", 
            height = "400px",
            theme = "sunset", 
            title = "SUNSET",
            titleAlign = "center",
            titleSize = "18px",
            titleColor = "black",
            subtitle = "czxa.top",
            subtitleAlign = "center",
            subtitleSize = "14px",
            subtitleColor = "black")

## ----eval=FALSE, include=TRUE--------------------------------------------
#  dir <- system.file("examples", "sankeywheel", package = "sankeywheel")
#  setwd(dir)
#  shiny::shinyAppDir(".")

