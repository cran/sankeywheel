document.write("<script language=javascript src='https://code.highcharts.com.cn/highcharts/highcharts.js'></script>");
document.write("<script language=javascript src='https://code.highcharts.com.cn/highcharts/modules/sankey.js'></script>");
document.write("<script language=javascript src='https://code.highcharts.com.cn/highcharts/modules/exporting.js'></script>");
document.write("<script language=javascript src='https://code.highcharts.com.cn/highcharts/modules/dependency-wheel.js'></script>");
HTMLWidgets.widget({

  name: 'sankeywheel',

  type: 'output',

  factory: function (el, width, height) {

    var id = el.id;

    // TODO: define shared variables for this instance

    return {

      renderValue: function (x) {
          if (x.theme == "darkgreen") {
            (function (a) {
              "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                return a
              }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
            })(function (a) {
              a.theme = {
                colors: "#DDDF0D #55BF3B #DF5353 #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                chart: {
                  backgroundColor: {
                    linearGradient: [0, 0, 250, 500],
                    stops: [
                      [0, "rgb(48, 96, 48)"],
                      [1, "rgb(0, 0, 0)"]
                    ]
                  },
                  borderColor: "#000000",
                  borderWidth: 2,
                  className: "dark-container",
                  plotBackgroundColor: "rgba(255, 255, 255, .1)",
                  plotBorderColor: "#CCCCCC",
                  plotBorderWidth: 1
                },
                title: {
                  style: {
                    color: "#C0C0C0",
                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                  }
                },
                subtitle: {
                  style: {
                    color: "#666666",
                    font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                  }
                },
                xAxis: {
                  gridLineColor: "#333333",
                  gridLineWidth: 1,
                  labels: {
                    style: {
                      color: "#A0A0A0"
                    }
                  },
                  lineColor: "#A0A0A0",
                  tickColor: "#A0A0A0",
                  title: {
                    style: {
                      color: "#CCC",
                      fontWeight: "bold",
                      fontSize: "12px",
                      fontFamily: "Trebuchet MS, Verdana, sans-serif"
                    }
                  }
                },
                yAxis: {
                  gridLineColor: "#333333",
                  labels: {
                    style: {
                      color: "#A0A0A0"
                    }
                  },
                  lineColor: "#A0A0A0",
                  minorTickInterval: null,
                  tickColor: "#A0A0A0",
                  tickWidth: 1,
                  title: {
                    style: {
                      color: "#CCC",
                      fontWeight: "bold",
                      fontSize: "12px",
                      fontFamily: "Trebuchet MS, Verdana, sans-serif"
                    }
                  }
                },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  style: {
                    color: "#F0F0F0"
                  }
                },
                toolbar: {
                  itemStyle: {
                    color: "silver"
                  }
                },
                plotOptions: {
                  line: {
                    dataLabels: {
                      color: "#CCC"
                    },
                    marker: {
                      lineColor: "#333"
                    }
                  },
                  spline: {
                    marker: {
                      lineColor: "#333"
                    }
                  },
                  scatter: {
                    marker: {
                      lineColor: "#333"
                    }
                  },
                  candlestick: {
                    lineColor: "white"
                  }
                },
                legend: {
                  itemStyle: {
                    font: "9pt Trebuchet MS, Verdana, sans-serif",
                    color: "#A0A0A0"
                  },
                  itemHoverStyle: {
                    color: "#FFF"
                  },
                  itemHiddenStyle: {
                    color: "#444"
                  }
                },
                credits: {
                  style: {
                    color: "#666"
                  }
                },
                labels: {
                  style: {
                    color: "#CCC"
                  }
                },
                navigation: {
                  buttonOptions: {
                    symbolStroke: "#DDDDDD",
                    hoverSymbolStroke: "#FFFFFF",
                    theme: {
                      fill: {
                        linearGradient: {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 1
                        },
                        stops: [
                          [.4, "#606060"],
                          [.6, "#333333"]
                        ]
                      },
                      stroke: "#000000"
                    }
                  }
                },
                rangeSelector: {
                  buttonTheme: {
                    fill: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                      },
                      stops: [
                        [.4, "#888"],
                        [.6, "#555"]
                      ]
                    },
                    stroke: "#000000",
                    style: {
                      color: "#CCC",
                      fontWeight: "bold"
                    },
                    states: {
                      hover: {
                        fill: {
                          linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                          },
                          stops: [
                            [.4, "#BBB"],
                            [.6, "#888"]
                          ]
                        },
                        stroke: "#000000",
                        style: {
                          color: "white"
                        }
                      },
                      select: {
                        fill: {
                          linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                          },
                          stops: [
                            [.1, "#000"],
                            [.3, "#333"]
                          ]
                        },
                        stroke: "#000000",
                        style: {
                          color: "yellow"
                        }
                      }
                    }
                  },
                  inputStyle: {
                    backgroundColor: "#333",
                    color: "silver"
                  },
                  labelStyle: {
                    color: "silver"
                  }
                },
                navigator: {
                  handles: {
                    backgroundColor: "#666",
                    borderColor: "#AAA"
                  },
                  outlineColor: "#CCC",
                  maskFill: "rgba(16, 16, 16, 0.5)",
                  series: {
                    color: "#7798BF",
                    lineColor: "#A6C7ED"
                  }
                },
                scrollbar: {
                  barBackgroundColor: {
                    linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                    },
                    stops: [
                      [.4, "#888"],
                      [.6, "#555"]
                    ]
                  },
                  barBorderColor: "#CCC",
                  buttonArrowColor: "#CCC",
                  buttonBackgroundColor: {
                    linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                    },
                    stops: [
                      [.4, "#888"],
                      [.6, "#555"]
                    ]
                  },
                  buttonBorderColor: "#CCC",
                  rifleColor: "#FFF",
                  trackBackgroundColor: {
                    linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                    },
                    stops: [
                      [0, "#000"],
                      [1, "#333"]
                    ]
                  },
                  trackBorderColor: "#666"
                },
                legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
                background2: "rgb(35, 35, 70)",
                dataLabelsColor: "#444",
                textColor: "#C0C0C0",
                maskColor: "rgba(255,255,255,0.3)"
              };
              a.setOptions(a.theme)
            });
          } else {
            if (x.theme == "darkblue") {
              (function (a) {
                "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                  return a
                }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
              })(function (a) {
                a.theme = {
                  colors: "#DDDF0D #55BF3B #DF5353 #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                  chart: {
                    backgroundColor: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 1
                      },
                      stops: [
                        [0, "rgb(48, 48, 96)"],
                        [1, "rgb(0, 0, 0)"]
                      ]
                    },
                    borderColor: "#000000",
                    borderWidth: 2,
                    className: "dark-container",
                    plotBackgroundColor: "rgba(255, 255, 255, .1)",
                    plotBorderColor: "#CCCCCC",
                    plotBorderWidth: 1
                  },
                  title: {
                    style: {
                      color: "#C0C0C0",
                      font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                    }
                  },
                  subtitle: {
                    style: {
                      color: "#666666",
                      font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                    }
                  },
                  xAxis: {
                    gridLineColor: "#333333",
                    gridLineWidth: 1,
                    labels: {
                      style: {
                        color: "#A0A0A0"
                      }
                    },
                    lineColor: "#A0A0A0",
                    tickColor: "#A0A0A0",
                    title: {
                      style: {
                        color: "#CCC",
                        fontWeight: "bold",
                        fontSize: "12px",
                        fontFamily: "Trebuchet MS, Verdana, sans-serif"
                      }
                    }
                  },
                  yAxis: {
                    gridLineColor: "#333333",
                    labels: {
                      style: {
                        color: "#A0A0A0"
                      }
                    },
                    lineColor: "#A0A0A0",
                    minorTickInterval: null,
                    tickColor: "#A0A0A0",
                    tickWidth: 1,
                    title: {
                      style: {
                        color: "#CCC",
                        fontWeight: "bold",
                        fontSize: "12px",
                        fontFamily: "Trebuchet MS, Verdana, sans-serif"
                      }
                    }
                  },
                  tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    style: {
                      color: "#F0F0F0"
                    }
                  },
                  toolbar: {
                    itemStyle: {
                      color: "silver"
                    }
                  },
                  plotOptions: {
                    line: {
                      dataLabels: {
                        color: "#CCC"
                      },
                      marker: {
                        lineColor: "#333"
                      }
                    },
                    spline: {
                      marker: {
                        lineColor: "#333"
                      }
                    },
                    scatter: {
                      marker: {
                        lineColor: "#333"
                      }
                    },
                    candlestick: {
                      lineColor: "white"
                    }
                  },
                  legend: {
                    itemStyle: {
                      font: "9pt Trebuchet MS, Verdana, sans-serif",
                      color: "#A0A0A0"
                    },
                    itemHoverStyle: {
                      color: "#FFF"
                    },
                    itemHiddenStyle: {
                      color: "#444"
                    }
                  },
                  credits: {
                    style: {
                      color: "#666"
                    }
                  },
                  labels: {
                    style: {
                      color: "#CCC"
                    }
                  },
                  navigation: {
                    buttonOptions: {
                      symbolStroke: "#DDDDDD",
                      hoverSymbolStroke: "#FFFFFF",
                      theme: {
                        fill: {
                          linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                          },
                          stops: [
                            [.4, "#606060"],
                            [.6, "#333333"]
                          ]
                        },
                        stroke: "#000000"
                      }
                    }
                  },
                  rangeSelector: {
                    buttonTheme: {
                      fill: {
                        linearGradient: {
                          x1: 0,
                          y1: 0,
                          x2: 0,
                          y2: 1
                        },
                        stops: [
                          [.4, "#888"],
                          [.6, "#555"]
                        ]
                      },
                      stroke: "#000000",
                      style: {
                        color: "#CCC",
                        fontWeight: "bold"
                      },
                      states: {
                        hover: {
                          fill: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [.4, "#BBB"],
                              [.6, "#888"]
                            ]
                          },
                          stroke: "#000000",
                          style: {
                            color: "white"
                          }
                        },
                        select: {
                          fill: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [.1, "#000"],
                              [.3, "#333"]
                            ]
                          },
                          stroke: "#000000",
                          style: {
                            color: "yellow"
                          }
                        }
                      }
                    },
                    inputStyle: {
                      backgroundColor: "#333",
                      color: "silver"
                    },
                    labelStyle: {
                      color: "silver"
                    }
                  },
                  navigator: {
                    handles: {
                      backgroundColor: "#666",
                      borderColor: "#AAA"
                    },
                    outlineColor: "#CCC",
                    maskFill: "rgba(16, 16, 16, 0.5)",
                    series: {
                      color: "#7798BF",
                      lineColor: "#A6C7ED"
                    }
                  },
                  scrollbar: {
                    barBackgroundColor: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                      },
                      stops: [
                        [.4, "#888"],
                        [.6, "#555"]
                      ]
                    },
                    barBorderColor: "#CCC",
                    buttonArrowColor: "#CCC",
                    buttonBackgroundColor: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                      },
                      stops: [
                        [.4, "#888"],
                        [.6, "#555"]
                      ]
                    },
                    buttonBorderColor: "#CCC",
                    rifleColor: "#FFF",
                    trackBackgroundColor: {
                      linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                      },
                      stops: [
                        [0, "#000"],
                        [1, "#333"]
                      ]
                    },
                    trackBorderColor: "#666"
                  },
                  legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
                  background2: "rgb(35, 35, 70)",
                  dataLabelsColor: "#444",
                  textColor: "#C0C0C0",
                  maskColor: "rgba(255,255,255,0.3)"
                };
                a.setOptions(a.theme)
              });
            } else {
              if (x.theme == "avocado") {
                (function (a) {
                  "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                    return a
                  }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                })(function (a) {
                  a.theme = {
                    colors: ["#F3E796", "#95C471", "#35729E", "#251735"],
                    colorAxis: {
                      maxColor: "#05426E",
                      minColor: "#F3E796"
                    },
                    plotOptions: {
                      map: {
                        nullColor: "#fcfefe"
                      }
                    },
                    navigator: {
                      maskFill: "rgba(170, 205, 170, 0.5)",
                      series: {
                        color: "#95C471",
                        lineColor: "#35729E"
                      }
                    }
                  };
                  a.setOptions(a.theme)
                });
              } else {
                if (x.theme == "darkunica") {
                  (function (a) {
                    "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                      return a
                    }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                  })(function (a) {
                    a.createElement("link", {
                        href: "https://fonts.googleapis.com/css?family\x3dUnica+One",
                        rel: "stylesheet",
                        type: "text/css"
                      },
                      null, document.getElementsByTagName("head")[0]);
                    a.theme = {
                      colors: "#2b908f #90ee7e #f45b5b #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                      chart: {
                        backgroundColor: {
                          linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                          },
                          stops: [
                            [0, "#2a2a2b"],
                            [1, "#3e3e40"]
                          ]
                        },
                        style: {
                          fontFamily: "'Unica One', sans-serif"
                        },
                        plotBorderColor: "#606063"
                      },
                      title: {
                        style: {
                          color: "#E0E0E3",
                          textTransform: "uppercase",
                          fontSize: "20px"
                        }
                      },
                      subtitle: {
                        style: {
                          color: "#E0E0E3",
                          textTransform: "uppercase"
                        }
                      },
                      xAxis: {
                        gridLineColor: "#707073",
                        labels: {
                          style: {
                            color: "#E0E0E3"
                          }
                        },
                        lineColor: "#707073",
                        minorGridLineColor: "#505053",
                        tickColor: "#707073",
                        title: {
                          style: {
                            color: "#A0A0A3"
                          }
                        }
                      },
                      yAxis: {
                        gridLineColor: "#707073",
                        labels: {
                          style: {
                            color: "#E0E0E3"
                          }
                        },
                        lineColor: "#707073",
                        minorGridLineColor: "#505053",
                        tickColor: "#707073",
                        tickWidth: 1,
                        title: {
                          style: {
                            color: "#A0A0A3"
                          }
                        }
                      },
                      tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        style: {
                          color: "#F0F0F0"
                        }
                      },
                      plotOptions: {
                        series: {
                          dataLabels: {
                            color: "#B0B0B3"
                          },
                          marker: {
                            lineColor: "#333"
                          }
                        },
                        boxplot: {
                          fillColor: "#505053"
                        },
                        candlestick: {
                          lineColor: "white"
                        },
                        errorbar: {
                          color: "white"
                        }
                      },
                      legend: {
                        itemStyle: {
                          color: "#E0E0E3"
                        },
                        itemHoverStyle: {
                          color: "#FFF"
                        },
                        itemHiddenStyle: {
                          color: "#606063"
                        }
                      },
                      credits: {
                        style: {
                          color: "#666"
                        }
                      },
                      labels: {
                        style: {
                          color: "#707073"
                        }
                      },
                      drilldown: {
                        activeAxisLabelStyle: {
                          color: "#F0F0F3"
                        },
                        activeDataLabelStyle: {
                          color: "#F0F0F3"
                        }
                      },
                      navigation: {
                        buttonOptions: {
                          symbolStroke: "#DDDDDD",
                          theme: {
                            fill: "#505053"
                          }
                        }
                      },
                      rangeSelector: {
                        buttonTheme: {
                          fill: "#505053",
                          stroke: "#000000",
                          style: {
                            color: "#CCC"
                          },
                          states: {
                            hover: {
                              fill: "#707073",
                              stroke: "#000000",
                              style: {
                                color: "white"
                              }
                            },
                            select: {
                              fill: "#000003",
                              stroke: "#000000",
                              style: {
                                color: "white"
                              }
                            }
                          }
                        },
                        inputBoxBorderColor: "#505053",
                        inputStyle: {
                          backgroundColor: "#333",
                          color: "silver"
                        },
                        labelStyle: {
                          color: "silver"
                        }
                      },
                      navigator: {
                        handles: {
                          backgroundColor: "#666",
                          borderColor: "#AAA"
                        },
                        outlineColor: "#CCC",
                        maskFill: "rgba(255,255,255,0.1)",
                        series: {
                          color: "#7798BF",
                          lineColor: "#A6C7ED"
                        },
                        xAxis: {
                          gridLineColor: "#505053"
                        }
                      },
                      scrollbar: {
                        barBackgroundColor: "#808083",
                        barBorderColor: "#808083",
                        buttonArrowColor: "#CCC",
                        buttonBackgroundColor: "#606063",
                        buttonBorderColor: "#606063",
                        rifleColor: "#FFF",
                        trackBackgroundColor: "#404043",
                        trackBorderColor: "#404043"
                      },
                      legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
                      background2: "#505053",
                      dataLabelsColor: "#B0B0B3",
                      textColor: "#C0C0C0",
                      contrastTextColor: "#F0F0F3",
                      maskColor: "rgba(255,255,255,0.3)"
                    };
                    a.setOptions(a.theme)
                  });
                } else {
                  if (x.theme == "gray") {
                    (function (a) {
                      "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                        return a
                      }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                    })(function (a) {
                      a.theme = {
                        colors: "#DDDF0D #7798BF #55BF3B #DF5353 #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                        chart: {
                          backgroundColor: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [0, "rgb(96, 96, 96)"],
                              [1, "rgb(16, 16, 16)"]
                            ]
                          },
                          borderWidth: 0,
                          borderRadius: 0,
                          plotBackgroundColor: null,
                          plotShadow: !1,
                          plotBorderWidth: 0
                        },
                        title: {
                          style: {
                            color: "#FFF",
                            font: "16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                          }
                        },
                        subtitle: {
                          style: {
                            color: "#DDD",
                            font: "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                          }
                        },
                        xAxis: {
                          gridLineWidth: 0,
                          lineColor: "#999",
                          tickColor: "#999",
                          labels: {
                            style: {
                              color: "#999",
                              fontWeight: "bold"
                            }
                          },
                          title: {
                            style: {
                              color: "#AAA",
                              font: "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                            }
                          }
                        },
                        yAxis: {
                          alternateGridColor: null,
                          minorTickInterval: null,
                          gridLineColor: "rgba(255, 255, 255, .1)",
                          minorGridLineColor: "rgba(255,255,255,0.07)",
                          lineWidth: 0,
                          tickWidth: 0,
                          labels: {
                            style: {
                              color: "#999",
                              fontWeight: "bold"
                            }
                          },
                          title: {
                            style: {
                              color: "#AAA",
                              font: "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                            }
                          }
                        },
                        legend: {
                          itemStyle: {
                            color: "#CCC"
                          },
                          itemHoverStyle: {
                            color: "#FFF"
                          },
                          itemHiddenStyle: {
                            color: "#333"
                          }
                        },
                        labels: {
                          style: {
                            color: "#CCC"
                          }
                        },
                        tooltip: {
                          backgroundColor: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [0, "rgba(96, 96, 96, .8)"],
                              [1, "rgba(16, 16, 16, .8)"]
                            ]
                          },
                          borderWidth: 0,
                          style: {
                            color: "#FFF"
                          }
                        },
                        plotOptions: {
                          series: {
                            nullColor: "#444444"
                          },
                          line: {
                            dataLabels: {
                              color: "#CCC"
                            },
                            marker: {
                              lineColor: "#333"
                            }
                          },
                          spline: {
                            marker: {
                              lineColor: "#333"
                            }
                          },
                          scatter: {
                            marker: {
                              lineColor: "#333"
                            }
                          },
                          candlestick: {
                            lineColor: "white"
                          }
                        },
                        toolbar: {
                          itemStyle: {
                            color: "#CCC"
                          }
                        },
                        navigation: {
                          buttonOptions: {
                            symbolStroke: "#DDDDDD",
                            hoverSymbolStroke: "#FFFFFF",
                            theme: {
                              fill: {
                                linearGradient: {
                                  x1: 0,
                                  y1: 0,
                                  x2: 0,
                                  y2: 1
                                },
                                stops: [
                                  [.4, "#606060"],
                                  [.6, "#333333"]
                                ]
                              },
                              stroke: "#000000"
                            }
                          }
                        },
                        rangeSelector: {
                          buttonTheme: {
                            fill: {
                              linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                              },
                              stops: [
                                [.4, "#888"],
                                [.6, "#555"]
                              ]
                            },
                            stroke: "#000000",
                            style: {
                              color: "#CCC",
                              fontWeight: "bold"
                            },
                            states: {
                              hover: {
                                fill: {
                                  linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                  },
                                  stops: [
                                    [.4, "#BBB"],
                                    [.6, "#888"]
                                  ]
                                },
                                stroke: "#000000",
                                style: {
                                  color: "white"
                                }
                              },
                              select: {
                                fill: {
                                  linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                  },
                                  stops: [
                                    [.1, "#000"],
                                    [.3, "#333"]
                                  ]
                                },
                                stroke: "#000000",
                                style: {
                                  color: "yellow"
                                }
                              }
                            }
                          },
                          inputStyle: {
                            backgroundColor: "#333",
                            color: "silver"
                          },
                          labelStyle: {
                            color: "silver"
                          }
                        },
                        navigator: {
                          handles: {
                            backgroundColor: "#666",
                            borderColor: "#AAA"
                          },
                          outlineColor: "#CCC",
                          maskFill: "rgba(16, 16, 16, 0.5)",
                          series: {
                            color: "#7798BF",
                            lineColor: "#A6C7ED"
                          }
                        },
                        scrollbar: {
                          barBackgroundColor: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [.4, "#888"],
                              [.6, "#555"]
                            ]
                          },
                          barBorderColor: "#CCC",
                          buttonArrowColor: "#CCC",
                          buttonBackgroundColor: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [.4, "#888"],
                              [.6, "#555"]
                            ]
                          },
                          buttonBorderColor: "#CCC",
                          rifleColor: "#FFF",
                          trackBackgroundColor: {
                            linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                            },
                            stops: [
                              [0, "#000"],
                              [1, "#333"]
                            ]
                          },
                          trackBorderColor: "#666"
                        },
                        legendBackgroundColor: "rgba(48, 48, 48, 0.8)",
                        background2: "rgb(70, 70, 70)",
                        dataLabelsColor: "#444",
                        textColor: "#E0E0E0",
                        maskColor: "rgba(255,255,255,0.3)"
                      };
                      a.setOptions(a.theme)
                    });
                  } else {
                    if (x.theme == "gridlight") {
                      (function (a) {
                        "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                          return a
                        }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                      })(function (a) {
                        a.createElement("link", {
                            href: "https://fonts.googleapis.com/css?family\x3dDosis:400,600",
                            rel: "stylesheet",
                            type: "text/css"
                          },
                          null, document.getElementsByTagName("head")[0]);
                        a.theme = {
                          colors: "#7cb5ec #f7a35c #90ee7e #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                          chart: {
                            backgroundColor: null,
                            style: {
                              fontFamily: "Dosis, sans-serif"
                            }
                          },
                          title: {
                            style: {
                              fontSize: "16px",
                              fontWeight: "bold",
                              textTransform: "uppercase"
                            }
                          },
                          tooltip: {
                            borderWidth: 0,
                            backgroundColor: "rgba(219,219,216,0.8)",
                            shadow: !1
                          },
                          legend: {
                            itemStyle: {
                              fontWeight: "bold",
                              fontSize: "13px"
                            }
                          },
                          xAxis: {
                            gridLineWidth: 1,
                            labels: {
                              style: {
                                fontSize: "12px"
                              }
                            }
                          },
                          yAxis: {
                            minorTickInterval: "auto",
                            title: {
                              style: {
                                textTransform: "uppercase"
                              }
                            },
                            labels: {
                              style: {
                                fontSize: "12px"
                              }
                            }
                          },
                          plotOptions: {
                            candlestick: {
                              lineColor: "#404048"
                            }
                          },
                          background2: "#F0F0EA"
                        };
                        a.setOptions(a.theme)
                      });
                    } else {
                      if (x.theme == "grid") {
                        (function (a) {
                          "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                            return a
                          }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                        })(function (a) {
                          a.theme = {
                            colors: "#058DC7 #50B432 #ED561B #DDDF00 #24CBE5 #64E572 #FF9655 #FFF263 #6AF9C4".split(" "),
                            chart: {
                              backgroundColor: {
                                linearGradient: {
                                  x1: 0,
                                  y1: 0,
                                  x2: 1,
                                  y2: 1
                                },
                                stops: [
                                  [0, "rgb(255, 255, 255)"],
                                  [1, "rgb(240, 240, 255)"]
                                ]
                              },
                              borderWidth: 2,
                              plotBackgroundColor: "rgba(255, 255, 255, .9)",
                              plotShadow: !0,
                              plotBorderWidth: 1
                            },
                            title: {
                              style: {
                                color: "#000",
                                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                              }
                            },
                            subtitle: {
                              style: {
                                color: "#666666",
                                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
                              }
                            },
                            xAxis: {
                              gridLineWidth: 1,
                              lineColor: "#000",
                              tickColor: "#000",
                              labels: {
                                style: {
                                  color: "#000",
                                  font: "11px Trebuchet MS, Verdana, sans-serif"
                                }
                              },
                              title: {
                                style: {
                                  color: "#333",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                  fontFamily: "Trebuchet MS, Verdana, sans-serif"
                                }
                              }
                            },
                            yAxis: {
                              minorTickInterval: "auto",
                              lineColor: "#000",
                              lineWidth: 1,
                              tickWidth: 1,
                              tickColor: "#000",
                              labels: {
                                style: {
                                  color: "#000",
                                  font: "11px Trebuchet MS, Verdana, sans-serif"
                                }
                              },
                              title: {
                                style: {
                                  color: "#333",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                  fontFamily: "Trebuchet MS, Verdana, sans-serif"
                                }
                              }
                            },
                            legend: {
                              itemStyle: {
                                font: "9pt Trebuchet MS, Verdana, sans-serif",
                                color: "black"
                              },
                              itemHoverStyle: {
                                color: "#039"
                              },
                              itemHiddenStyle: {
                                color: "gray"
                              }
                            },
                            labels: {
                              style: {
                                color: "#99b"
                              }
                            },
                            navigation: {
                              buttonOptions: {
                                theme: {
                                  stroke: "#CCCCCC"
                                }
                              }
                            }
                          };
                          a.setOptions(a.theme)
                        });
                      } else {
                        if (x.theme == "sandsignika") {
                          (function (a) {
                            "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                              return a
                            }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                          })(function (a) {
                            (function (a) {
                              a.createElement("link", {
                                  href: "https://fonts.googleapis.com/css?family\x3dSignika:400,700",
                                  rel: "stylesheet",
                                  type: "text/css"
                                },
                                null, document.getElementsByTagName("head")[0]);
                              a.addEvent(a.Chart, "afterGetContainer",
                                function () {
                                  this.container.style.background = "url(https://www.highcharts.com/samples/graphics/sand.png)"
                                });
                              a.theme = {
                                colors: "#f45b5b #8085e9 #8d4654 #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
                                chart: {
                                  backgroundColor: null,
                                  style: {
                                    fontFamily: "Signika, serif"
                                  }
                                },
                                title: {
                                  style: {
                                    color: "black",
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                  }
                                },
                                subtitle: {
                                  style: {
                                    color: "black"
                                  }
                                },
                                tooltip: {
                                  borderWidth: 0
                                },
                                legend: {
                                  itemStyle: {
                                    fontWeight: "bold",
                                    fontSize: "13px"
                                  }
                                },
                                xAxis: {
                                  labels: {
                                    style: {
                                      color: "#6e6e70"
                                    }
                                  }
                                },
                                yAxis: {
                                  labels: {
                                    style: {
                                      color: "#6e6e70"
                                    }
                                  }
                                },
                                plotOptions: {
                                  series: {
                                    shadow: !0
                                  },
                                  candlestick: {
                                    lineColor: "#404048"
                                  },
                                  map: {
                                    shadow: !1
                                  }
                                },
                                navigator: {
                                  xAxis: {
                                    gridLineColor: "#D0D0D8"
                                  }
                                },
                                rangeSelector: {
                                  buttonTheme: {
                                    fill: "white",
                                    stroke: "#C0C0C8",
                                    "stroke-width": 1,
                                    states: {
                                      select: {
                                        fill: "#D0D0D8"
                                      }
                                    }
                                  }
                                },
                                scrollbar: {
                                  trackBorderColor: "#C0C0C8"
                                },
                                background2: "#E0E0E8"
                              };
                              a.setOptions(a.theme)
                            })(a)
                          });
                        } else {
                          if (x.theme == "sunset") {
                            (function (a) {
                              "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                                return a
                              }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                            })(function (a) {
                              a.theme = {
                                colors: ["#FDD089", "#FF7F79", "#A0446E", "#251535"],
                                colorAxis: {
                                  maxColor: "#60042E",
                                  minColor: "#FDD089"
                                },
                                plotOptions: {
                                  map: {
                                    nullColor: "#fefefc"
                                  }
                                },
                                navigator: {
                                  series: {
                                    color: "#FF7F79",
                                    lineColor: "#A0446E"
                                  }
                                }
                              };
                              a.setOptions(a.theme)
                            });
                          } else {
                            (function (a) {
                              "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define(function () {
                                return a
                              }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0)
                            })(function (a) {
                              a.theme = {
                                colors: "#514F78 #42A07B #9B5E4A #72727F #1F949A #82914E #86777F #42A07B".split(" "),
                                chart: {
                                  className: "skies",
                                  borderWidth: 0,
                                  plotShadow: !0,
                                  plotBackgroundImage: "https://www.highcharts.com/demo/gfx/skies.jpg",
                                  plotBackgroundColor: {
                                    linearGradient: [0, 0, 250, 500],
                                    stops: [
                                      [0, "rgba(255, 255, 255, 1)"],
                                      [1, "rgba(255, 255, 255, 0)"]
                                    ]
                                  },
                                  plotBorderWidth: 1
                                },
                                title: {
                                  style: {
                                    color: "#3E576F",
                                    font: "16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                                  }
                                },
                                subtitle: {
                                  style: {
                                    color: "#6D869F",
                                    font: "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                                  }
                                },
                                xAxis: {
                                  gridLineWidth: 0,
                                  lineColor: "#C0D0E0",
                                  tickColor: "#C0D0E0",
                                  labels: {
                                    style: {
                                      color: "#666",
                                      fontWeight: "bold"
                                    }
                                  },
                                  title: {
                                    style: {
                                      color: "#666",
                                      font: "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                                    }
                                  }
                                },
                                yAxis: {
                                  alternateGridColor: "rgba(255, 255, 255, .5)",
                                  lineColor: "#C0D0E0",
                                  tickColor: "#C0D0E0",
                                  tickWidth: 1,
                                  labels: {
                                    style: {
                                      color: "#666",
                                      fontWeight: "bold"
                                    }
                                  },
                                  title: {
                                    style: {
                                      color: "#666",
                                      font: "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"
                                    }
                                  }
                                },
                                legend: {
                                  itemStyle: {
                                    font: "9pt Trebuchet MS, Verdana, sans-serif",
                                    color: "#3E576F"
                                  },
                                  itemHoverStyle: {
                                    color: "black"
                                  },
                                  itemHiddenStyle: {
                                    color: "silver"
                                  }
                                },
                                labels: {
                                  style: {
                                    color: "#3E576F"
                                  }
                                }
                              };
                              a.setOptions(a.theme)
                            });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          listData = [];
          for (var i = 0; i < x.from.length; i++) {
            listData.push([x.from[i], x.to[i], x.weight[i]]);
          }
          // TODO: code to render the widget, e.g.
          Highcharts.chart(id, {
            title: {
              text: x.title,
              align: x.titleAlign,
              style: {
                "color": x.titleColor,
                "fontSize": x.titleSize
              }
            },
            subtitle: {
              text: x.subtitle,
              align: x.subtitleAlign,
              style: {
                "color": x.subtitleColor,
                "fontSize": x.subtitleSize
              }
            },
            series: [{
              keys: ['from', 'to', 'weight'],
              data: listData,
              type: x.type,
              name: x.seriesName
            }]
          });
        },

        resize: function (width, height) {

          // TODO: code to re-render the widget with a new size

        }

    };
  }
});