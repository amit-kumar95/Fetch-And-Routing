import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemData = () => {
    const {blogItemData} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogItemData
    return (
      <div className="blogItemContainers">
        <p className="titleStl">{title}</p>
        <div className="authorCont">
          <img className="avatarImgStl" src={avatarUrl} alt={topic} />
          <p className="authorStl">{author}</p>
        </div>
        <img className="imgStyling" src={imageUrl} alt={title} />
        <p className="context">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bgContainerBlogItemDetail">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
