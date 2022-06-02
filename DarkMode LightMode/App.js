const App =  () => {
const [isDark, setDark] = React.useState(false)

const toggleTheme = () => {
  if(isDark){
    setDark(false);
    }
    else{
      setDark(true);
    }
  }

return (
  <div>
    <button onClick={toggleTheme}>Theme switch</button>
    <Container darkMode={isDark} />
  </div>
);
}