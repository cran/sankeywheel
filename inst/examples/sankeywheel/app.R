#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#
library(shiny)
library(colourpicker)
library(wordcloud2)
library(sankeywheel)

# Define UI for application that draws a histogram
ui <- fluidPage(

    # Application title
    titlePanel("Example for 'sankeywheel'"),

    # Sidebar with a slider input for number of bins
    sidebarLayout(
        sidebarPanel(
            selectInput(
                inputId = "theme",
                label = "Choose a theme: ",
                choices = c("darkgreen",
                            "darkblue",
                            "avocado",
                            "darkunica",
                            "gray",
                            "gridlight",
                            "grid",
                            "sandsignika",
                            "sunset"),
                selected = "sandsignika"
            ),
            selectInput(
                inputId = "type",
                label = "Choose chart type:",
                choices = c("sankey",
                            "dependencywheel"),
                selected = "dependencywheel"
            ),
            textInput(
                inputId = "title",
                label = "Input Chart Title: ",
                placeholder = "Word Cloud",
                value = "Example Charts"
            ),
            selectInput(
                inputId = "titleAlign",
                label = "Title Alignment: ",
                choices = c("left", "center", "right"),
                selected = 'center'
            ),
            textInput(
                inputId = "titleSize",
                label = "Title Size: ",
                placeholder = "20px",
                value = "20px"
            ),
            colourInput(
                inputId = "titleColor",
                label = "Title Color: ",
                value = "#333333",
                showColour = "background",
                allowTransparent = TRUE
            ),
            textInput(
                inputId = "subtitle",
                label = "Input Subtitle ",
                placeholder = "https://www.czxa.top",
                value = ""
            ),
            selectInput(
                inputId = "subtitleAlign",
                label = "Subtitle Alignment: ",
                choices = c("left", "center", "right"),
                selected = "center"
            ),
            textInput(
                inputId = "subtitleSize",
                label = "Subtitle Size: ",
                placeholder = "10px",
                value = ""
            ),
            colourInput(
                inputId = "subtitleColor",
                label = "Subtitle Color: ",
                value = "#666666",
                showColour = "background",
                allowTransparent = TRUE
            ),
            textInput(
                inputId = "seriesName",
                label = "Series name: ",
                placeholder = "demo series",
                value = "demo series"
            )
        ),

        # Show a plot of the generated distribution
        mainPanel(
           sankeywheel::sankeywheelOutput("shinysankeywheel", height = "500px")
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
    df <- sankeydf
    output$shinysankeywheel <- renderSankeywheel({
        sankeywheel(from = df$from, to = df$to, weight = df$weight,
             theme = input$theme,
             type = input$type,
             seriesName = input$seriesName,
             title = input$title,
             titleAlign = input$titleAlign,
             titleSize = input$titleSize,
             titleColor = input$titleColor,
             subtitle = input$subtitle,
             subtitleAlign = input$subtitleAlign,
             subtitleSize = input$subtitleSize,
             subtitleColor = input$subtitleColor
        )
    })
}

# Run the application
shinyApp(ui = ui, server = server)
