const fs = require('fs');
const babel = require('babel-core');

const REGEX = /^\/\/ ?(.+)\n+([^]+)$/;

let data = `import React from 'react';
import { View } from 'react-native';
import {Annotation, H1, P, Strong} from '../Components/Typography';
import CardLink from '../Components/CardLink';
const index = {}; export default index;
`;

const files = fs.readdirSync(__dirname + '/../contents');

files.forEach(file => {
    const [, title, content] = fs.readFileSync(`${__dirname}/../contents/${file}`).toString().match(REGEX);
    // const output = babel.transform(`<React.Fragment>${content}</React.Fragment>`, { plugins: ['transform-react-jsx'] });

    data += `index["${file}"] = {
    id: "${file}",
    title: "${title}",
    content: props => <View>${content}</View>
}

`;
});

fs.writeFileSync(
    `${__dirname}/../src/Contents/index.js`,
    data
)