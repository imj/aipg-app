const fs = require('fs');

const REGEX = /^\/\/ ?(.+)\n+([^]+)$/;

let data = `import React from 'react';
import { View } from 'react-native';
import {Annotation, H1, P, Strong, ListItem, Nl} from '../Components/Typography';
import CardLink from '../Components/CardLink';
import PageLink from '../Components/PageLink';
import ExternalLink from '../Components/ExternalLink';
const index = {}; export default index;
`;

const files = fs.readdirSync(__dirname + '/../contents');

files.forEach(file => {
    if(file === '.DS_Store') return;
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