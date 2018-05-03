const fs = require('fs');

const REGEX = /^\/\/ ?(.+)\n+([^]+)$/;

let data = `import React from 'react';
const index = {}; export default index;
`;

const HEADER = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <style>
    body {
        color: #404040;
        font-family: "Roboto", Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.5;
        margin: 0 15px;
    }
    a {
        color: royalblue;
        text-decoration: none;
    }

    h5 {
        font-size: 1.25rem;
    }

    ul, ol {
        margin: 0 0 1.5em 0;
    }

    .alert {
        padding: 15px;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
    }

    .alert-info {
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bcdff1;
        font-style: italic;
    }

    .alert-warning {
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #faf2cc;
    }

    #primary h2 {
        font-size: 1.4rem;
    }


    .list-group {
        padding-left: 0;
        margin-bottom: 0;
    }

    .list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem;
        margin-bottom: -.0625rem;
        background-color: #fff;
        border: .0625rem solid #ddd;
    }
    </style>
</head>
<body>
`;
const FOOTER = `
<script>
    document.body.addEventListener('click', function(event) {
        var clickedEl = event.target;
        if(clickedEl.tagName !== 'A') {
            return;
        }
        event.preventDefault();
        window.postMessage(clickedEl.href);
    });
</script>
</body>
</html>
`;

const files = fs.readdirSync(__dirname + '/../contents');

files.forEach(file => {
    if(file === '.DS_Store') return;
    const chapter = file.replace('.html', '');
    const [, title, content] = fs.readFileSync(`${__dirname}/../contents/${file}`).toString().match(REGEX);
    // const output = babel.transform(`<React.Fragment>${content}</React.Fragment>`, { plugins: ['transform-react-jsx'] });

    data += `index["${chapter}"] = {
    id: "${chapter}",
    title: "${title}",
    content: ${JSON.stringify(`${HEADER}${content}${FOOTER}`)}
};

`;
});

fs.writeFileSync(
    `${__dirname}/../src/Contents/index.js`,
    data
)