const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

const map = {
    '1': 'https://blogs.magicjudges.org/rules/ipg1/',
    '1.1': 'https://blogs.magicjudges.org/rules/ipg1-1/',
    '1.2': 'https://blogs.magicjudges.org/rules/ipg1-2/',
    '1.3': 'https://blogs.magicjudges.org/rules/ipg1-3/',
    '1.4': 'https://blogs.magicjudges.org/rules/ipg1-4/',
    '1.5': 'https://blogs.magicjudges.org/rules/ipg1-5/',
    '2': 'https://blogs.magicjudges.org/rules/ipg2/',
    '2.1': 'https://blogs.magicjudges.org/rules/ipg2-1/',
    '2.2': 'https://blogs.magicjudges.org/rules/ipg2-2/',
    '2.3': 'https://blogs.magicjudges.org/rules/ipg2-3/',
    '2.4': 'https://blogs.magicjudges.org/rules/ipg2-4/',
    '2.5': 'https://blogs.magicjudges.org/rules/ipg2-5/',
    '2.6': 'https://blogs.magicjudges.org/rules/ipg2-6/',
    '3': 'https://blogs.magicjudges.org/rules/ipg3/',
    '3.1': 'https://blogs.magicjudges.org/rules/ipg3-1/',
    '3.2': 'https://blogs.magicjudges.org/rules/ipg3-2/',
    '3.3': 'https://blogs.magicjudges.org/rules/ipg3-3/',
    '3.4': 'https://blogs.magicjudges.org/rules/ipg3-4/',
    '3.5': 'https://blogs.magicjudges.org/rules/ipg3-5/',
    '3.6': 'https://blogs.magicjudges.org/rules/ipg3-6/',
    '3.7': 'https://blogs.magicjudges.org/rules/ipg3-7/',
    '3.8': 'https://blogs.magicjudges.org/rules/ipg3-8/',
    '3.9': 'https://blogs.magicjudges.org/rules/ipg3-9/',
    '4': 'https://blogs.magicjudges.org/rules/ipg4/',
    '4.1': 'https://blogs.magicjudges.org/rules/ipg4-1/',
    '4.2': 'https://blogs.magicjudges.org/rules/ipg4-2/',
    '4.3': 'https://blogs.magicjudges.org/rules/ipg4-3/',
    '4.4': 'https://blogs.magicjudges.org/rules/ipg4-4/',
    '4.5': 'https://blogs.magicjudges.org/rules/ipg4-5/',
    '4.6': 'https://blogs.magicjudges.org/rules/ipg4-6/',
    '4.7': 'https://blogs.magicjudges.org/rules/ipg4-7/',
    '4.8': 'https://blogs.magicjudges.org/rules/ipg4-8/'
};


async function parsePage(page, id) {
    console.log('Getting %s...', id);
    const response = await axios.get(page);
    const $ = cheerio.load(response.data, { decodeEntities: false });
    const $article = $('article');
    $article.find('.page-navigation').remove();
    $article.find('.table').remove();

    const title = $article.find('h1.entry-title').text()
        .replace(/IPG (\d(?:.\d)*)\.? /, '')

    let content = $article.find('div.entry-content').html();

    // content = content.split('</div>')
    //     .map(chunk => contentToJsx(chunk + '</div>'))
    //     .join('');
    content = contentToJsx(content);

    console.log('Writing %s', id)
    fs.writeFileSync(
        `${__dirname}/../contents/${id}`,
        `// ${title}${"\n\n"}${content}`
    );
}


function contentToJsx(content) {
    // Clear code
    content = content
        .trim()
        .replace(
            /<p[^>]*><\/p>/g,
            ''
        )
        .replace(
            /<br>/g,
            ''
        )
    // Replace headings
    content = content.replace(
        /<h[1-6][^>]*>([^<]+)<\/h[1-6]>/g,
        '<H1>$1</H1>'
    );
    // Replace Annotation
    content = content.replace(
        /<div class="alert alert-info" role="alert">((?:(?!<\/div).|\s)+)<\/div>/g,
        '<Annotation>$1</Annotation>'
    )

    // Replace CardLink
    content = content.replace(
        /<a href="[^"]+lems-mtg-helper-cardfinder\.php\?find=([^&]+)&[^<]+">([^<]+)<\/a>/g,
        '<CardLink card="$1">$2</CardLink>'
    )
    // Replace PageLink
    // Anchor which starts with 'blogs.magicjudges.org/rules/ipg(X-Y)
    // Then replace X-Y to X.Y
    content = content.replace(
        /<a[^>]+href="(?:[\w:\/]+blogs\.magicjudges\.org)?\/rules\/ipg(\d(?:-\d)*)\/"[^>]*>((?:(?!<\/a>).|\s)+)<\/a>/g,
        '<PageLink to="$1">$2</PageLink>'
    ).replace(
        /<PageLink to="(\d+)-(\d+)"/g,
        '<PageLink to="$1.$2"'
    );
    // Replace ExternalLink
    content = content.replace(
        /<a[^>]+href="([^"]+)"[^>]*>((?:(?!<\/a>).)+)<\/a>/g,
        '<ExternalLink to="$1">$2</ExternalLink>'
    )
    // Replace ListItem
    content = content
        .replace(/<\/?ul>/g, '')
        .replace(
            /<li><em>((?:(?!<\/em>).|\s)+)<\/em><\/li>/g,
            '<ListItem>$1</ListItem>'
        )

    // Replace unstiled list item
    content = content
        .replace(/<\/?ul>/g, '')
        .replace(
            /<li[^>]*>((?:(?!<\/li>).|\s)+)<\/li>/g,
            '<ListItem>$1</ListItem>'
        )

    // Replace h5 card
    content = content
        .replace(
            /<h5[^>]*>\s*<div class="card">\s*<div class="card-header">([^<]+)<\/div><\/div><\/h5>/g,
            '<H1>$1</H1>'
        )

    // // Replace <p><em> -> <P>
    // content = content
    // .replace(
    //     /<p[^>]*>((?:(?!<\/p>).|\s)+)<\/p>/,
    //     '<P>$1</P>'
    // )

    // Replace P
    content = content.replace(
        /<p[^>]*>((?:(?!<\/p>).|\s)+)<\/p>/g,
        '<P>$1</P>'
    )

    // Replace em to P
     content = content.replace(
        /<em[^>]*>((?:(?!<\/em>).|\s)+)<\/em>/g,
        '<P>$1</P>'
    )
    // Replace strong to Strong
     content = content.replace(
        /<strong>([^<+]+)<\/strong>/g,
        '<Strong>$1</Strong>'
    )


    // Strip remaining tags
    content = content
        .replace(
            /<\/?[a-z][^>]*>/g,
            ''
        )


    // try to format
    content = content
        .replace(
            /(<Annotation>)/g,
            "$1\n\t"
        )
        .replace(
            /(<\/(?:Annotation|P)>)/g,
            "$1\n"
        )


    return content;
}

// parsePage(map['2.1'], '2.1');

// let chain = Promise.resolve();
// Object.entries(map)
//     .forEach(pair => {
//         chain = chain.then(
//             () => parsePage(pair[1], pair[0])
//         );
//     });

Promise.all(
    Object.entries(map).map(pair => parsePage(pair[1], pair[0]))
)