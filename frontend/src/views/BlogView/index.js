import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import BlogList from '../../components/BlogList'
import Pagination from '../../components/Pagination'

const BlogViewWrapper = styled.div`
  padding-top: 10px;
  position: relative;

  ${Pagination} {
    position: absolute;
    right: -54px;
    top: 16px;
  }
`

const BlogView = ({ directory }) => (
  <BlogViewWrapper>
    <BlogList data={directory} />
    <Pagination />
  </BlogViewWrapper>
)

const mapStateToProps = ({ blog: { directory } }) => ({
  directory
})

export default connect(mapStateToProps)(BlogView)
