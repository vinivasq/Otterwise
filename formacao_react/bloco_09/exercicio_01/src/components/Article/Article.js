import "./Article.css"

function Article(props){
  const { title, description } = props
  return(
    <article className="article">
      <h4 className="article__title">{title}</h4>
      <p className="article__decription">{description}</p>
    </article>
  )
}

export default Article