import logo from './logo.svg'
import './App.css'
import RecipesContainer from './containers/RecipesContainer'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Recipe Search</h1>
        <RecipesContainer />
      </header>
    </div>
  )
}

export default App
