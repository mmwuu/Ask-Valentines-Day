import { useState } from "react";
import "./QuestionPage.css";
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/flowers');
  };

  const handlePuzzleClick = () => {
    navigate('/puzzle');
  };

  const handleNoButtonHover = () => {
    const randY = Math.floor(Math.random() * (150 * 2)) - 150;
    const randX = Math.floor(Math.random() * (150 * 2)) - 150;
    setNoButtonPosition({ x: randX, y: randY });
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <h1 className="text-container">YAY!! Thanks for saying yes</h1>
            <div>
              <button className="more-button" onClick={handleButtonClick}>
                Open other gift
              </button>
              <button onClick={handlePuzzleClick} className="puzzle-button">
                Open gift
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              className="maingif"
              style={{ width: "250px", height: "240px" }}
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWxtbnc1YmwwNjd0bm1mY3dma2xkZ2s0cWE4emtmdGtoa3ZscHQ2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button className="yes-button" onClick={() => setYesPressed(true)}>
                Yes
              </button>
              <button
                className="no-button"
                style={{ transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` }}
                onMouseOver={handleNoButtonHover}
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}