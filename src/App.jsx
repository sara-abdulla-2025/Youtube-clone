import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import './App.css';

// Mock video data
const mockVideos = [
  {
    id: 1,
    title: 'Building a Modern Web Application with React and Vite',
    channel: 'Tech Tutorials',
    views: 1250000,
    daysAgo: 2,
    duration: '15:30',
    color: '#667eea'
  },
  {
    id: 2,
    title: 'JavaScript Tips and Tricks Every Developer Should Know',
    channel: 'Code Master',
    views: 890000,
    daysAgo: 5,
    duration: '22:15',
    color: '#764ba2'
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox: When to Use What',
    channel: 'Web Design Pro',
    views: 450000,
    daysAgo: 7,
    duration: '18:45',
    color: '#f093fb'
  },
  {
    id: 4,
    title: 'React Hooks Explained: useState and useEffect',
    channel: 'React Academy',
    views: 2100000,
    daysAgo: 1,
    duration: '12:20',
    color: '#4facfe'
  },
  {
    id: 5,
    title: 'Building RESTful APIs with Node.js and Express',
    channel: 'Backend Basics',
    views: 670000,
    daysAgo: 10,
    duration: '25:10',
    color: '#43e97b'
  },
  {
    id: 6,
    title: 'TypeScript for Beginners: Getting Started Guide',
    channel: 'TypeScript Tutorials',
    views: 980000,
    daysAgo: 3,
    duration: '20:30',
    color: '#fa709a'
  },
  {
    id: 7,
    title: 'Git and GitHub: Complete Guide for Developers',
    channel: 'Dev Tools',
    views: 1450000,
    daysAgo: 4,
    duration: '16:45',
    color: '#fee140'
  },
  {
    id: 8,
    title: 'Docker Containers: A Practical Introduction',
    channel: 'DevOps Simplified',
    views: 520000,
    daysAgo: 14,
    duration: '19:20',
    color: '#30cfd0'
  },
  {
    id: 9,
    title: 'Responsive Web Design: Mobile-First Approach',
    channel: 'UI/UX Design',
    views: 780000,
    daysAgo: 6,
    duration: '14:55',
    color: '#a8edea'
  },
  {
    id: 10,
    title: 'State Management in React: Redux vs Context API',
    channel: 'React Mastery',
    views: 1100000,
    daysAgo: 8,
    duration: '21:40',
    color: '#ffecd2'
  },
  {
    id: 11,
    title: 'Building a Full-Stack Application: Step by Step',
    channel: 'Full Stack Dev',
    views: 1650000,
    daysAgo: 12,
    duration: '28:15',
    color: '#fcb69f'
  },
  {
    id: 12,
    title: 'Web Performance Optimization Techniques',
    channel: 'Performance Pro',
    views: 430000,
    daysAgo: 9,
    duration: '17:30',
    color: '#a8caba'
  }
];

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app">
      <Header onMenuClick={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
      <div className="main-container">
        <Sidebar collapsed={sidebarCollapsed} />
        <main className={`content-area ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <div className="video-grid">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
