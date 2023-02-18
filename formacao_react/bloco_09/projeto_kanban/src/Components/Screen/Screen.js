import "./Screen.css"

const Screen = (props) => {
  const { children } = props
  return(
    <main className="screen">
      <h1 className="screen__title">Kanban</h1>
      {children}
    </main>
  )
}

export default Screen