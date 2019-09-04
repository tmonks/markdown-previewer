const INITIAL_MARKDOWN = `
# Sample Markdown

## Bold and Italic
There are two ways to bold text, surround the text with two **asterisks** or __underscores__.
Similarly, you can italicize by surrounding the text with a single *asterisk* or _underscore_.

## Hyperlinks
[Link Title](http://www.example.com)

## Lists

Unordered list items start with '-' or '+':
+ Item 1
- Item 2
- Item 3

Ordered lists start with a number followed by a period:
1. First item
2. Second item
3. Third item

## Code
Use single backtics for \`inline code\`

Surround code blocks with three backtics on their own line:
\`\`\`
echo 'Hello World'
\`\`\` 

## Block Quote

To make a block quote, start each line with '> ':
> Here is how you do a block quote
> Block quote line 2

## Images
![Alt Text](https://www.markdownguide.org/assets/images/tux.png "Image Title")

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4
`;

export default INITIAL_MARKDOWN;
