import './Card.css'

function Card(props){
  const { name, age, roll, children } = props
  return(
    <div className="card">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      <p>Roll: {roll}</p>
      {children?children:"não tem children"}

    </div>
  )
}

export default Card