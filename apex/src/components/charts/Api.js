import React, { Component , Fragment } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Api extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.setState({ users: response.data });
        });
    }
    render() {
        return (
            <div className="TableData">
                <Table>
                    <tbody>
                        {this.state.users.map(user => (
                            <Fragment key={user.id}>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
