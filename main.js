const { normalizeURL, getURLsFromHTML } = require("./crawl.js")

const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev>
                Boot.dev Blog
            </a>
        </body>
    </html> 
    `
const inputBaseURL = "https://blog.boot.dev"


const output = getURLsFromHTML(inputHTMLBody,inputBaseURL)