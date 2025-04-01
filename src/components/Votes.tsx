import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocoVotes, setChocoVotes] = useState(0);
  const [vanVotes, setVanVotes] = useState(0);
  const [strawbVotes, setStrawbVotes] = useState(0);
  const totalVotes = chocoVotes + vanVotes + strawbVotes;
  console.log(totalVotes);

  const getPercentage = (flavorVotes: number): string => {
    return `${((flavorVotes / totalVotes) * 100).toFixed(1)}%`;
  };
  return (
    <div className="Votes">
      <h2>Vote here!</h2>
      <div className="voteButtons">
        <button
          className="chocVoteBtn"
          onClick={() => setChocoVotes(chocoVotes + 1)}
        >
          Chocolate
        </button>
        <button
          className="vanVoteBtn"
          onClick={() => setVanVotes(vanVotes + 1)}
        >
          Vanilla
        </button>
        <button
          className="strawVoteBtn"
          onClick={() => setStrawbVotes(strawbVotes + 1)}
        >
          Strawberry
        </button>
      </div>
      {totalVotes > 0 ? (
        <>
          <p>
            Chocolate: {chocoVotes}({getPercentage(chocoVotes)})
          </p>
          <div className="bar">
            <div
              className="chocBar"
              style={{
                width: getPercentage(chocoVotes),
                height: "100%",
                backgroundColor: "brown",
              }}
            ></div>
          </div>
          <div
            className="chocolate"
            style={{ width: getPercentage(chocoVotes) }}
          ></div>

          <p>
            Vanilla: {vanVotes}({getPercentage(vanVotes)})
          </p>
          <div className="bar">
            <div
              className="vanilla"
              style={{
                width: getPercentage(vanVotes),
                height: "100%",
                backgroundColor: "beige",
              }}
            ></div>
          </div>
          <p>
            {" "}
            Strawberry: {strawbVotes}({getPercentage(strawbVotes)}){" "}
          </p>
          <div className="bar">
            <div
              className="strawberry"
              style={{
                width: getPercentage(strawbVotes),
                height: "100%",
                backgroundColor: "pink",
              }}
            ></div>
          </div>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default Votes;
