import readTimeEstimate from 'read-time-estimate'
import showdown from 'showdown'

const makeToc = (html) => {
  // eslint-disable-next-line no-undef
  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/xml')

  let tocList = '<ul>'
  const tocData = []
  let prev = 'h2'
  for (const el of doc.all) {
    if (el.tagName === 'h2') {
      tocData.push({ id: el.id, content: el.textContent })
      if (prev === 'h3') {
        tocList += '</ul>'
      }
      tocList += `<li><a href="#${el.id}">${el.textContent}</a></li>`
      prev = 'h2'
    } else if (el.tagName === 'h3') {
      if (prev === 'h2') {
        tocData.push([])
        tocList += '<ul>'
      }
      tocData[tocData.length - 1].push({
        id: el.id, content: el.textContent
      })
      tocList += `<li><a href="#${el.id}">${el.textContent}</a></li>`
      prev = 'h3'
    }
  }
  if (prev === 'h3') tocList += '</ul>'
  tocList += '</ul>'
  return { toc: tocList, data: tocData }
}

export const parseDataToBlog = (data) => {
  const { id, content, createdAt, tags, ...otherAttrs } = data
  const converter = new showdown.Converter({ metadata: true })
  const html = converter.makeHtml(content)
  const toc = makeToc(html)
  const tagList = tags ? tags.trim().split(',') : []

  return {
    id: /\/(\w+)\./.exec(id)[1],
    html: '<h2 id="toc">Table of Content</h2>' + toc.toc + html,
    toc: toc.data,
    readingTime: readTimeEstimate(content).humanizedDuration,
    createdAt: createdAt.replace('createdAt:', ''),
    tags: tagList,
    ...otherAttrs
  }
}
