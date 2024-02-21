import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-1">
      <img src={logo} alt="Logo Type Weather" />
      <span className="text-lg">Weather Forecast</span>
    </div>
  )
}

export default Header
