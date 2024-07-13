import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
      <PersonCard 
        firstName={"Lorraine"}
        lastName={"DAmore"}
        age={36}
        hairColor={"Brown"}
      />
      <PersonCard
        firstName={"Mike"}
        lastName={"Mont"}
        age={27}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Coley"}
        lastName={"Ahmadein"}
        age={30}
        hairColor={"Blonde"}
      />
    </>
  )
}

export default App
