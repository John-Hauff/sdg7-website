import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="360"
        height="200"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
