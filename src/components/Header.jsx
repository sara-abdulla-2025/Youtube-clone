import { useState } from 'react';
import './Header.css';

function Header({ onMenuClick, sidebarCollapsed }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-icon" onClick={onMenuClick} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
        <a href="/" className="logo">
          <div className="logo-icon">
            <svg className="youtube-icon" width="20" height="20" viewBox="0 0 68 48" fill="none">
              <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/>
              <path d="M45 24 27 14v20l18-10z" fill="#FFFFFF"/>
            </svg>
            <span className="logo-text">SaraTube</span>
          </div>
        </a>
      </div>
      
      <div className="header-center">
        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </form>
      </div>
      
      <div className="header-right">
        <button className="icon-button" aria-label="Create">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-12zm0-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
        <button className="icon-button" aria-label="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </button>
        <div className="user-avatar">S</div>
      </div>
    </header>
  );
}

export default Header;

