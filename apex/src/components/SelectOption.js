import React, { Component, Fragment } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Select 1', label: 'Select 1' },
    { value: 'Select 2', label: 'Select 2' },
    { value: 'Select 3', label: 'Select 3' },
];

export default class SelectOption extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );

    }
}