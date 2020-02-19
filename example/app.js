import React from "react";
import AddressFormTypeahead from '../dist';
import '../dist/styles.css';
export default class App extends React.Component {
    constructor() {
        super()
        this.click = this.click.bind(this);
        this.state = {
            value: { d: "ท่านั่ง", a: "โพทะเล", p: "พิจิตร", z: 66130 }
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