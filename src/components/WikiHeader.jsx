import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export const WikiHeader = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="wiki-header">
      <div className="header-content">
        <div className="header-left">
        {/*   <img 
            src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
            alt="CucsiAO Logo" 
            className="logo"
          /> */}
          <h1 className="wiki-title">CucsiAO Wiki</h1>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="theme-toggle"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};