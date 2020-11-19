import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Button, RadioButton } from './components/common';

export class App extends Component {
    constructor(props) {
        super(props);
        this.genderData = ['Male', 'Female'];

        this.state = { gender: "Male", visible: false };
    }

    onGenderSelected = (key) => {
        if (key === 0) {
            this.setState({ gender: "Male" })
        } else {
            this.setState({ gender: "Female" })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <RadioButton
                    onRadioButtonSelected={this.onGenderSelected}
                    data={this.genderData} />
                <Text>Selected Gender is {this.state.gender}</Text>

                <Button >
                    Show
                </Button>
            </View>
        )
    }
}

export default App;
