import React from 'react';
import './PuzzlePage.css'; // Optional: Add styles for the iframe

const PuzzlePage: React.FC = () => {
  return (
    <div className="puzzle-container"> 
    <h1 className="puzzle-title">Puzzle for you</h1>
    <iframe
        className='puzzle-frame'
        style={{
          width: '600px',
          height: '650px',
          maxHeight: '90vh',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: '#888',
        }}
        allowFullScreen={true}
        src="https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?url=aHR0cHM6Ly9pLmltZ3VyLmNvbS9mM2UwRkZJLmpwZWc~&nop=35&color=brown"
        title="Jigsaw Puzzle"
      >
        Jigsaw Puzzle
      </iframe>
    </div>
  );
};

export default PuzzlePage;