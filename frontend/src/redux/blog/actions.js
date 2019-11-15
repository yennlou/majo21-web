import BlogActionTypes from './types'
import service from '../../utils/service'
import showdown from 'showdown'

export const fetchCollectionStart = () => ({
  type: BlogActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collection => ({
  type: BlogActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collection
})

export const fetchCollectionFailure = errMsg => ({
  type: BlogActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errMsg
})

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

const parseDataToBlog = (data) => {
  const { content, _id: id } = data
  const conv = new showdown.Converter({ metadata: true })
  const html = conv.makeHtml(content)

  const toc = makeToc(html)
  const metadata = conv.getMetadata()

  return {
    id,
    html: '<h2 id="toc">Table of content</h2>' + toc.toc + html,
    toc: toc.data,
    ...metadata
  }
}

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    service
      .get('/api/articles')
      .then(({ data }) => {
        dispatch(fetchCollectionSuccess(
          data.map(parseDataToBlog)
        ))
      })
      .catch(err => {
        dispatch(fetchCollectionFailure(err))
      })
  }
}
