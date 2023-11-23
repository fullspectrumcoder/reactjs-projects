import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function MonthlyMultiColumnGraph() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("MonthlyMultiColumnGraph", am4charts.XYChart);
    chart.paddingBottom = 20;
    
    chart.cursor = new am4charts.XYCursor();
    chart.scrollbarX = new am4core.Scrollbar();

    // will use this to store colors of the same items
    let colors = [
        am4core.color("#780206"),
        am4core.color("#061161"),
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = "{realName}";
    categoryAxis.adapter.add("tooltipText", function (tooltipText, target) {
        return categoryAxis.tooltipDataItem.dataContext.realName;
    })

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.min = 0;

    // single column series for all data
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(80);
    columnSeries.tooltipText = "{provider}: {realName}, {valueY}";
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";
    columnSeries.columns.template.column.cornerRadiusTopLeft = 10;
    columnSeries.columns.template.column.cornerRadiusTopRight = 10;
    columnSeries.fill = am4core.color("#780206");
    

    // second value axis for quantity
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.syncWithAxis = valueAxis;
    valueAxis2.tooltip.disabled = true;



    // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
    // columnSeries.columns.template.adapter.add("fill", function (fill, target) {
    //     let name = target.dataItem.dataContext.realName;
    //     if (!colors[name]) {
    //         colors[name] = chart.colors.next();
    //     }
    //     target.stroke = colors[name];
    //     return colors[name];
    // })


    let rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.6;
    rangeTemplate.tick.length = 60;
    rangeTemplate.grid.strokeOpacity = 0.5;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -10;
    rangeTemplate.label.cloneTooltip = false;

    ///// DATA
    let chartData = [];

    let data =
    {
        "Provider 1": {
            "item 1": 10,
            "item 2": 35,
            "item 3": 5,
            "item 4": 20,
            "quantity": 430
        },
        "Provider 2": {
            "item 1": 15,
            "item 3": 21,
            "quantity": 210
        },
        "Provider 3": {
            "item 2": 25,
            "item 3": 11,
            "item 4": 17,
            "quantity": 265
        },
        "Provider 4": {
            "item 3": 12,
            "item 4": 15,
            "quantity": 98
        }
    }

    // process data ant prepare it for the chart
    for (var providerName in data) {
        let providerData = data[providerName];

        // add data of one provider to temp array
        let tempArray = [];
        let count = 0;
        // add items
        for (var itemName in providerData) {
            if (itemName != "quantity") {
                count++;
                // we generate unique category for each column (providerName + "_" + itemName) and store realName
                tempArray.push({ category: providerName + "_" + itemName, realName: itemName, value: providerData[itemName], provider: providerName })
            }
        }
        // sort temp array
        tempArray.sort(function (a, b) {
            if (a.value > b.value) {
                return 1;
            }
            else if (a.value < b.value) {
                return -1
            }
            else {
                return 0;
            }
        })

        // add quantity and count to middle data item (line series uses it)
        let lineSeriesDataIndex = Math.floor(count / 2);
        tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
        tempArray[lineSeriesDataIndex].count = count;
        // push to the final data
        am4core.array.each(tempArray, function (item) {
            chartData.push(item);
        })

        // create range (the additional label at the bottom)
        let range = categoryAxis.axisRanges.create();
        range.category = tempArray[0].category;
        range.endCategory = tempArray[tempArray.length - 1].category;
        range.label.text = tempArray[0].provider;
        range.label.dy = 30;
        range.label.truncate = true;
        range.label.fontWeight = "light";
        range.label.tooltipText = tempArray[0].provider;

        range.label.adapter.add("maxWidth", function (maxWidth, target) {
            let range = target.dataItem;
            let startPosition = categoryAxis.categoryToPosition(range.category, 0);
            let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
            let startX = categoryAxis.positionToCoordinate(startPosition);
            let endX = categoryAxis.positionToCoordinate(endPosition);
            return endX - startX;
        })
    }

    chart.data = chartData;


    // last tick
    let range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 1;


    return (
        <div id="MonthlyMultiColumnGraph" className="chartBlock"></div>
    )
}
