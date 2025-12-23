import './VideoCard.css';

function VideoCard({ video }) {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  const formatTimeAgo = (days) => {
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.floor(days / 365)} years ago`;
  };

  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <div className="thumbnail-image" style={{ backgroundColor: video.color }}>
          {/* Placeholder for thumbnail - in real app, this would be an image */}
        </div>
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className="channel-avatar">
          {video.channel.charAt(0).toUpperCase()}
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-channel">{video.channel}</p>
          <div className="video-meta">
            <span>{formatViews(video.views)}</span>
            <span>•</span>
            <span>{formatTimeAgo(video.daysAgo)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

