import './ThemeToggle.scss';
import { WiDaySunny } from 'react-icons/wi';
import { MdModeNight } from 'react-icons/md';

const ThemeToggle = ({ themeHandler, theme }) => {
  return (
    <div className="theme-toggle-wrapper">
      <label
        className="theme-toggle"
        title={`Swith theme to ${theme === 'dark' ? 'light' : 'dark'}`}
      >
        <input
          type="checkbox"
          onChange={themeHandler}
          checked={theme === 'light'}
        />
        <div
          className={`${
            theme === 'dark' ? 'theme-toggle-btn dark' : 'theme-toggle-btn'
          }`}
        >
          <WiDaySunny className="theme-icon-light" />
          <MdModeNight className="theme-icon-dark" />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
