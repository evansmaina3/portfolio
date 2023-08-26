import Backgrounds from '../Assets/images/Vector.png'
import '../styles/base.css'
import { DarkMode } from './DarkMode';

export default function BackgroundImage({ children, darkMode }) {
  return (
    <div className={`relative ${darkMode ? 'dark-mode' : ''}`}>
      <div className="absolute top-0 left-0 p-4">
        { children }
      </div>
      <img src={Backgrounds} alt="the background image " className='' />
    </div>
  );
}