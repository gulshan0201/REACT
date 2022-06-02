const Container = (props) => {
  return (
    <div className={props.darkMode ? "dark" : "light"}>
      <h2>{props.darkMode ? "This is dark mode" : "This is light mode"}</h2>
    </div>
  )
}