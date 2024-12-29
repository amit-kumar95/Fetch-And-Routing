import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blogItemContainer">
      <div className="imgCont">
        <img className="imageStl" src={imageUrl} alt={topic} />
      </div>
      <div className="titleCont">
        <p className="topic">{topic}</p>
        <p className="title">{title}</p>

        <div className="avatarCont">
          <img className="avatarImg" src={avatarUrl} alt={author} />
          <p className="author">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
