import React from 'react';
import { Table } from 'reactstrap';
import ProjectData from './Project.json';


export default function ProjectGrid(props) {
    return (
        <div className="tableData">
            <Table className="table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Client</th>
                        <th>Region</th>
                        <th>Market</th>
                        <th>Client Start</th>
                        <th>Client Due</th>
                        <th>WOA Start</th>
                        <th>WOA Finish</th>
                        <th>Due Date Variance</th>
                        <th>Original Amount</th>
                        <th>CO Amount</th>
                        <th>Invoiced</th>
                        <th>Paid</th>
                        <th>Gross Profit</th>
                        <th>Net Profit</th>
                        <th>Profit Margins</th>
                    </tr>
                </thead>
                <tbody>
                    {ProjectData.map(data => {
                        return (
                            <tr>
                                <a href="/project-edit/">
                                    <td>{data.Status}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.City}</td>
                                    <td>{data.State}</td>
                                    <td>{data.Client}</td>
                                    <td>{data.Region}</td>
                                    <td>{data.Market}</td>
                                    <td>{data.ClientStart}</td>
                                    <td>{data.ClientDue}</td>
                                    <td>{data.WOAStart}</td>
                                    <td>{data.WOAFinish}</td>
                                    <td>{data.DueDateVariance}</td>
                                    <td>{data.OriginalAmount}</td>
                                    <td>{data.COAmount}</td>
                                    <td>{data.Invoiced}</td>
                                    <td>{data.Paid}</td>
                                    <td>{data.GrossProfit}</td>
                                    <td>{data.NetProfit}</td>
                                    <td>{data.ProfitMargins}</td>
                                </a>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
