import logo from '../../assets/logo.svg'
import { ModeToggle } from '../theme/mode-toggle'
const Header = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-1">
      <img src={logo} alt="Logo Type Weather" />
      <span className="text-lg">Weather Forecast</span>
      <ModeToggle />
    </div>
  )
}

export default Header
