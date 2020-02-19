import React, { Component } from "react";
import AddressFormTypeahead from '../dist';
import '../dist/styles.css';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this);
        this.props = {
            value: {
                d: "",
                a: "",
                p: "",
                z: ""
            }
        }
        this.state = {
            value: {}
        }
    }

    click() {
        console.log("CLICK");
        this.setState({
            value: { d: "กุดสระ", a: "เมืองอุดรธานี", p: "อุดรธานี", z: 41000 }
        })
    }

    render() {

        return (
            <div>
                <div onClick={(e) => this.click(e)}>Click Sample change State</div>
                <AddressFormTypeahead value={this.state.value} onAddressSelected={(addressObject) => console.log(addressObject)}></AddressFormTypeahead>
            </div>
        )
    }
}