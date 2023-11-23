import React, { useState } from 'react';
import { Label, Row, Col } from 'reactstrap';
import Select from 'react-select';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesdataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themesanimated from '@amcharts/amcharts4/themes/animated';

export default function SalesPerMonth() {

    am4core.useTheme(am4themesdataviz);
    am4core.useTheme(am4themesanimated);

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

    let chart = am4core.create("SalesGraph", am4charts.XYChart);
    am4core.options.autoSetClassName = true;

    chart.data = [
        {
            "date": "2019-12-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-01-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-02-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-03-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-04-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-05-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-06-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-07-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-08-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-09-01",
            "grossProfit": 0,
            "projectCost": 0,
            "materialCost": 0,
            "revenue": 0,
            "accountPayable": 0,
            "accountReceivable": 0
        },
        {
            "date": "2020-10-01",
            "grossProfit": -153310.56,
            "projectCost": -186280.72,
            "materialCost": -2010.36,
            "revenue": 32970.16,
            "accountPayable": -184270.36,
            "accountReceivable": 19626.16
        },
        {
            "date": "2020-11-01",
            "grossProfit": 303389.75,
            "projectCost": 987.5,
            "materialCost": -9742.16,
            "revenue": 302402.25,
            "accountPayable": 28840.58,
            "accountReceivable": 277857.25
        }
    ];

    chart.colors.step = 2;
    chart.maskBullets = false;
    chart.exporting.menu = new am4core.ExportMenu();
    /* Create axes */
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    const range = dateAxis.axisRanges.create();
    range.grid.strokeOpacity = 0.2;
    range.tick.disabled = false;
    range.tick.strokeOpacity = 0.3;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;

    dateAxis.renderer.axisFills.template.disabled = false;
    dateAxis.renderer.axisFills.template.fill = am4core.color('#e0e1dd');
    dateAxis.renderer.axisFills.template.fillOpacity = 0.3;

    dateAxis.renderer.labels.template.textAlign = 'middle';
    dateAxis.dateFormats.setKey('month', 'MMM\nyyyy');

    const distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = 'sales amount';
    distanceAxis.fill = am4core.color('#400B14');

    const latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    latitudeAxis.renderer.labels.template.disabled = true;
    latitudeAxis.renderer.labels.template.fontSize = '0.8em';

    /* Create series */
    const grossSalesSeries = chart.series.push(new am4charts.ColumnSeries());
    grossSalesSeries.fill = am4core.color('#780206');
    grossSalesSeries.dataFields.valueY = 'revenue';
    grossSalesSeries.dataFields.dateX = 'date';
    grossSalesSeries.yAxis = distanceAxis;
    grossSalesSeries.tooltipText = '{valueY} Revenue';
    grossSalesSeries.name = 'Revenue';
    grossSalesSeries.columns.template.fontSize = '0.8em';
    grossSalesSeries.columns.template.fillOpacity = 0.9;
    grossSalesSeries.columns.template.propertyFields.strokeDasharray = 'dashLength';
    grossSalesSeries.columns.template.propertyFields.fillOpacity = 'beta';
    grossSalesSeries.showOnInit = true;
    grossSalesSeries.columns.template.width = am4core.percent(90);

    grossSalesSeries.columns.template.column.cornerRadiusTopLeft = 5;
    grossSalesSeries.columns.template.column.cornerRadiusTopRight = 5;
    grossSalesSeries.columns.template.column.fillOpacity = 0.9;
    grossSalesSeries.columns.template.strokeWidth = 0;

    const expensesSeries = chart.series.push(new am4charts.ColumnSeries());
    expensesSeries.fill = am4core.color('#061161');
    expensesSeries.dataFields.valueY = 'accountReceivable';
    expensesSeries.dataFields.dateX = 'date';
    expensesSeries.yAxis = distanceAxis;
    expensesSeries.tooltipText = '{valueY} Account Receivable';
    expensesSeries.name = 'Account Receivable';
    expensesSeries.columns.template.fontSize = '0.8em';
    expensesSeries.columns.template.propertyFields.fillOpacity = 'beta';
    expensesSeries.showOnInit = true;
    expensesSeries.columns.template.width = am4core.percent(100);

    expensesSeries.columns.template.column.cornerRadiusTopLeft = 5;
    expensesSeries.columns.template.column.cornerRadiusTopRight = 5;
    expensesSeries.columns.template.column.fillOpacity = 0.9;
    expensesSeries.columns.template.strokeWidth = 0;
    const operatingCostSeries = chart.series.push(new am4charts.ColumnSeries());
    operatingCostSeries.fill = am4core.color('#8D2638');
    operatingCostSeries.dataFields.valueY = 'accountPayable';
    operatingCostSeries.dataFields.dateX = 'date';
    operatingCostSeries.yAxis = distanceAxis;
    operatingCostSeries.tooltipText = '{valueY} Account Payable';
    operatingCostSeries.name = 'Account Payable';
    operatingCostSeries.columns.template.fontSize = '0.8em';
    operatingCostSeries.columns.template.fillOpacity = 0.9;
    operatingCostSeries.columns.template.propertyFields.strokeDasharray = 'dashLength';
    operatingCostSeries.columns.template.propertyFields.fillOpacity = 'beta';
    operatingCostSeries.showOnInit = true;
    operatingCostSeries.columns.template.width = am4core.percent(100);

    operatingCostSeries.columns.template.column.fillOpacity = 0.9;
    operatingCostSeries.columns.template.strokeWidth = 0;
    const projectCost = chart.series.push(new am4charts.ColumnSeries());
    projectCost.fill = am4core.color('#0E3140');
    projectCost.dataFields.valueY = 'projectCost';
    projectCost.dataFields.dateX = 'date';
    projectCost.yAxis = distanceAxis;
    projectCost.tooltipText = '{valueY} Project Cost';
    projectCost.name = 'Project Cost';
    projectCost.columns.template.fontSize = '0.8em';
    projectCost.columns.template.fillOpacity = 0.9;
    projectCost.columns.template.propertyFields.strokeDasharray = 'dashLength';
    projectCost.columns.template.propertyFields.fillOpacity = 'beta';
    projectCost.showOnInit = true;
    projectCost.columns.template.width = am4core.percent(100);
    projectCost.columns.template.strokeWidth = 0;

    const distanceState = grossSalesSeries.columns.template.states.create('hover');
    distanceState.properties.fillOpacity = 0.9;
    const grossProfitSeries = chart.series.push(new am4charts.LineSeries());
    grossProfitSeries.stroke = am4core.color('#8C8834');
    grossProfitSeries.fill = am4core.color('#8C8834');
    grossProfitSeries.dataFields.valueY = 'grossProfit';
    grossProfitSeries.dataFields.dateX = 'date';
    grossProfitSeries.name = 'Gross Profit';
    grossProfitSeries.strokeWidth = 2;
    grossProfitSeries.tooltipText = '{valueY} Gross profit';
    grossProfitSeries.showOnInit = true;

    const durationBullet = grossProfitSeries.bullets.push(new am4charts.CircleBullet());
    const durationState = durationBullet.states.create('hover');
    durationState.properties.scale = 1.2;
    durationState.properties.stroke = am4core.color('#4d4043');

    /* Add legend */
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
    chart.legend.paddingBottom = 10;
    chart.legend.labels.template.maxWidth = 95;

    /* Add cursor */
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fill = am4core.color('#BF4721');
    chart.cursor.lineX.fillOpacity = 0.3;

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
            <div id="SalesGraph" className="chartBlock"></div>
        </>
    )
}
