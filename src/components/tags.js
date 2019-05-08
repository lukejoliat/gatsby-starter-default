import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { Link } from 'gatsby'

const Tags = group => (
  <div>
    <h1>Tags</h1>
    {group.group.map(tag => (
      <Link
        key={tag.fieldValue}
        className={`tag ${tag.fieldValue}`}
        to={`/tags/${kebabCase(tag.fieldValue)}/`}
      >
        {tag.fieldValue} ({tag.totalCount})
      </Link>
    ))}
  </div>
)

export default Tags
