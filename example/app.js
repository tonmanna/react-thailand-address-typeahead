import React from "react";
import AddressFormTypeahead from '../dist';
import '../dist/styles.css';
export default class App extends React.Component {
    render() {
        let value_pick = { d: "ท่านั่ง", a: "โพทะเล", p: "พิจิตร", z: 66130 }
        return (<AddressFormTypeahead value={value_pick} onAddressSelected={(addressObject) => console.log(addressObject)}></AddressFormTypeahead>)
    }
}