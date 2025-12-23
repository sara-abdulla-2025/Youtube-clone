import './Sidebar.css';

function Sidebar({ collapsed }) {
  const sidebarItems = [
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, 
      text: 'Home', 
      active: true 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82L19.03 9.2l1.5 1.5c.32.32.32.85 0 1.17l-1.99 1.99c-.19.19-.51.19-.7 0l-1.5-1.5-1.31 1.31c-.28.28-.75.28-1.03 0l-2.34-2.34c-.28-.28-.28-.75 0-1.03l1.31-1.31-1.5-1.5c-.19-.19-.19-.51 0-.7l1.99-1.99c.32-.32.85-.32 1.17 0l1.5 1.5 1.24-1.24c.3-.3.52-.56.76-.82C18.78 2.3 19 1.74 19 1.11c0-.93-.74-1.67-1.67-1.67-.63 0-1.19.22-1.64.58l-4.24 4.24c-.56.56-.97 1.3-.97 2.15v4.05c0 .42.33.75.75.75h4.05c.85 0 1.59-.41 2.15-.97l4.24-4.24c.36-.45.58-1.01.58-1.64 0-.93-.74-1.67-1.67-1.67z"/></svg>, 
      text: 'Trending' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 10l5-5-5-5v10z"/></svg>, 
      text: 'Subscriptions' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>, 
      text: 'Library' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>, 
      text: 'History' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, 
      text: 'Your videos' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, 
      text: 'Watch later' 
    },
    { 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>, 
      text: 'Liked videos' 
    },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-section">
        {sidebarItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`sidebar-item ${item.active ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
          >
            <div className="sidebar-icon">{item.icon}</div>
            <span className="sidebar-text">{item.text}</span>
          </a>
        ))}
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
            </svg>
          </div>
          <span className="sidebar-text">Settings</span>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 4h-4v5h-4v2h4v5h4v-5h4V9h-4V4z"/>
            </svg>
          </div>
          <span className="sidebar-text">Report history</span>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <span className="sidebar-text">Help</span>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
            </svg>
          </div>
          <span className="sidebar-text">Send feedback</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

