import React, { useState, useEffect } from 'react';
import { Label, Row, Col } from 'reactstrap';
import Select from 'react-select';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

export default function RevenuePerClient() {

    am4core.useTheme(am4themes_animated);

    const dropDownOptions = [
        { value: 'All', label: 'All' },
        { value: 'Jan', label: 'January' },
        { value: 'Feb', label: 'Febrarury' },
        { value: 'Mar', label: 'March' },
        { value: 'May', label: 'May' },
        { value: 'Apr', label: 'April' },
        { value: 'Jun', label: 'June' },
        { value: 'Jul', label: 'July' },
        { value: 'Aug', label: 'August' },
        { value: 'Sep', label: 'September' },
        { value: 'Oct', label: 'October' },
        { value: 'Nov', label: 'November' },
        { value: 'Dec', label: 'December' },
    ];

    let chart = am4core.create('RevenuePerClient', am4charts.XYChart);
    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    chart.data = [
        {
            "id": 10,
            "clientName": "Invitation Homes",
            "amount": 1331,
            "date": "2020-11-11T05:00:00Z"
        },
        {
            "id": 1,
            "clientName": "Zillow",
            "amount": 11469,
            "date": "2020-07-14T04:00:00Z"
        },
        {
            "id": 7,
            "clientName": "Open Door",
            "amount": 150,
            "date": "2020-11-04T05:00:00Z"
        },
        {
            "id": 3,
            "clientName": "Zillow",
            "amount": 10000,
            "date": "2020-10-27T05:00:00Z"
        }
    ];
    chart.colors.list = [
        am4core.color("#780206"),
        am4core.color("#061161"),
    ];

    chart.legend = new am4charts.Legend();
    chart.legend.hidden = true;
    chart.legend.position = 'bottom';
    chart.legend.paddingBottom = 10;
    chart.legend.labels.template.maxWidth = 95;

    const title = chart.titles.create();
    // title.text = "Revenue Per Client";
    title.fontSize = 25;
    title.marginBottom = 30;

    /* Create axes */
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'clientName';
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.rotation = 90;
    /* Create value axis */
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    /* Create series */
    const columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = 'Revenue';
    columnSeries.dataFields.valueY = 'amount';
    columnSeries.dataFields.categoryX = 'clientName';
    columnSeries.columns.template.tooltipText =
        '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
    columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity';
    columnSeries.columns.template.propertyFields.stroke = 'stroke';
    columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth';
    columnSeries.columns.template.propertyFields.strokeDasharray = 'columnDash';
    columnSeries.tooltip.label.textAlign = 'middle';

    columnSeries.columns.template.column.cornerRadiusTopLeft = 10;
    columnSeries.columns.template.column.cornerRadiusTopRight = 10;
    columnSeries.columns.template.column.fillOpacity = 0.9;
    columnSeries.columns.template.strokeWidth = 0;
    chart.exporting.menu = new am4core.ExportMenu();

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="form-selection">
                        <Label>Filter By Month:</Label>
                        <Select
                            className="selection"
                            defaultValue={{ label: 'All', value: 'All' }}
                            options={dropDownOptions}
                        />
                    </div>
                </Col>
            </Row>
            <div id="RevenuePerClient" className="chartBlock"></div>
        </>
    )
}
