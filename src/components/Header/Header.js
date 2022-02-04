import SearchBar from "../SearchBar/SearchBar"

const Header = ({title, numero, activa}) =>{
  return(
    <>
    <header>{title} {numero}, sigue {activa?'activa':'de vacaciones'}</header>
    <SearchBar/>
    </>
  )
}

export default Header