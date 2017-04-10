# react-thailand-address-typeahead
[![npm version](https://badge.fury.io/js/react-thailand-address-typeahead.svg)](https://badge.fury.io/js/react-thailand-address-typeahead)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project fork from
[jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js)

## Demo
[Example with storybook](http://zapkub.github.io/react-thailand-address)


## Requirement
- react

## Installation
```
$ npm install https://github.com/zapkub/JQLjs.git // will publish as module soon
$ npm install react react-thailand-address-typeahead
```

## Usage

### API
- `onAddressSelected: function` - call on user pick address and return `AddressObject` param
- `maxVisible: number` - maximum number of Hint list


```js
import AddressFormTypeahead from 'react-thailand-address-typeahead';

export default () => (
    <div>
        <AddressForm
         onAddressSelected={(addressObject) => console.log(addressObject)} 
        />
    </div>
)
```



> NOTE: For component styles you can include or use loader `./dist/styles.css` to your app or implement by yourself [styles](./dist/styles.css)

For futher more see [Example](./example/index.js)

## Performance for Perf nerd

| ไฟล์ | ขนาดไฟล์ |
| --- | ---:|
| without data.json | 69 KB 
| webpack with babili with data.json | 550 KB |
| webpack with babili with data.json gzip | **86 KB** |

## Todo
- [] MORE UNIT TEST
- [] custom styles example
- [] improve performance and reduce bundle size
- [] `data.json` lazy loading
- [] server-side implementation example
- [] using without React example
- [] using with google map example

## Development
- Clone this project
- run `npm install`
- start development via storybook `npm run storybook`
- navigate to `localhost:9001`

## Testing
- `npm test`

## Contribute
- open for any pullrequest
- Commitizen lover !! 😎

## Original fork and idea 

[earthchie](https://github.com/earthchie/) - Project Owner, Original fork
(you should treat him some bear 😎🍺)
## License
- Original : WTFPL 2.0 http://www.wtfpl.net/
- Also MIT (formally)
