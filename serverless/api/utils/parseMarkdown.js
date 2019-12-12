const showdown = require('showdown')

const parseMarkdown = (content) => {
  const conv = new showdown.Converter({ metadata: true })
  const html = conv.makeHtml(content)

  const metadata = conv.getMetadata()
  if (metadata.createdAt) {
    metadata.timestamp = (new Date(metadata.createdAt)).getTime()
  }

  return {
    markdown: content,
    html: html,
    ...metadata
  }
}

module.exports = parseMarkdown
