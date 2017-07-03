import React from 'react'

class GifSearch extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input type="text" name="search" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
