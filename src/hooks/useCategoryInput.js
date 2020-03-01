function useCategoryInput (cb) {
  const parseInputToCategoryValue = (input) => {
    const value = {
      series: '',
      tags: {}
    }
    if (input.startsWith('series:')) {
      value.series = input.replace('series:', '').trim()
    }
    if (input.startsWith('tags:')) {
      const tags = input.replace('tags:', '').trim().split(',')
      for (const tag of tags) {
        value.tags[tag] = true
      }
    }
    return value
  }

  const handleCategoryChange = (category) => {
    let newInput = ''
    if (category.series) {
      newInput = `series:${category.series}`
    } else if (Object.keys(category.tags).length) {
      newInput = `tags:${Object.keys(category.tags).join(',')}`
    }
    cb(newInput)
  }
  return [parseInputToCategoryValue, handleCategoryChange]
}

export default useCategoryInput
