import React, { useState, useEffect } from 'react';
import { Label, Row, Col } from 'reactstrap';
import Select from 'react-select';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

export default function ProfitRevenue() {

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

    let chart = am4core.create('ProfitRevenue', am4charts.XYChart);

    chart.data = [
        {
            "id": 10,
            "projectManager": "Leo Zapata",
            "revenue": 1331,
            "profit": 329,
            "date": "2020-11-11T05:00:00Z"
        },
        {
            "id": 1,
            "projectManager": "Nate Feleciano",
            "revenue": 11469,
            "profit": 2801,
            "date": "2020-07-14T04:00:00Z"
        },
        {
            "id": 7,
            "projectManager": "Nate Feleciano",
            "revenue": 150,
            "profit": 0,
            "date": "2020-11-04T05:00:00Z"
        },
        {
            "id": 3,
            "projectManager": "Theresa Daley",
            "revenue": 10000,
            "profit": 8000,
            "date": "2020-10-27T05:00:00Z"
        }
    ];

    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.fill = am4core.color('#8D2638');
    chart.legend.position = 'bottom';
    chart.legend.paddingBottom = 10;
    chart.legend.labels.template.maxWidth = 95;

    const xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'projectManager';
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    chart.colors.list = [
        am4core.color("#780206"),
        am4core.color("#061161"),
    ];
    function createSeries(value, name) {
        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = value;
        // series.fill = am4core.color("green");
        series.dataFields.categoryX = 'projectManager';
        series.name = name;
        series.columns.template.tooltipText =
            '[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
        series.columns.template.propertyFields.fillOpacity = 'fillOpacity';
        series.columns.template.propertyFields.stroke = 'stroke';
        series.columns.template.propertyFields.strokeWidth = 'strokeWidth';
        series.columns.template.propertyFields.strokeDasharray = 'columnDash';
        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.9;
        series.columns.template.strokeWidth = 0;

        series.events.on('hidden', arrangeColumns);
        series.events.on('shown', arrangeColumns);

        const bullet = series.bullets.push(new am4charts.LabelBullet());
        bullet.interactionsEnabled = false;
        bullet.dy = 30;
        bullet.label.fill = am4core.color('#ffffff');

        return series;
    }

    chart.exporting.menu = new am4core.ExportMenu();

    createSeries('profit', 'Profit');
    createSeries('revenue', 'Revenue');

    function arrangeColumns() {
        const series = chart.series.getIndex(0);

        const w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            const x0 = xAxis.getX(series.dataItems.getIndex(0), 'categoryX');
            const x1 = xAxis.getX(series.dataItems.getIndex(1), 'categoryX');
            const delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                const middle = chart.series.length / 2;

                let newIndex = 0;
                chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    } else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                });
                const visibleCount = newIndex;
                const newMiddle = visibleCount / 2;

                chart.series.each(function (series) {
                    const trueIndex = chart.series.indexOf(series);
                    const newIndex = series.dummyData;

                    const dx = (newIndex - trueIndex + middle - newMiddle) * delta;

                    series.animate({ property: 'dx', to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: 'dx', to: dx }, series.interpolationDuration, series.interpolationEasing);
                });
            }
        }
    }

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
            <div id="ProfitRevenue" className="chartBlock"></div>
        </>
    )
}
