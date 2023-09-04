import { useState } from "react";

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: "Ranjani",
        lastName: "Shettar",
        score: 10,
    });

    function handlePlusClick() {
        player.score++;
        setPlayer({...player});  //Added Line of Code

        /* we added 1 to the value and stored it but we didn't use the setPlayer
           to change the presented value */
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,                 //Added Line of Code
            lastName: e.target.value,

            /* it updated the field lastname but it didnt keep the previous values from
               the other fields so we added object spread so that we can copy the old
               score and first name but override the last name */
        });

    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>{" "}
                <button onClick={handlePlusClick}>+1</button>
            </label>
            <label>
                First name:
                <input value={player.firstName} onChange={handleFirstNameChange} />
            </label>
            <label>
                Last name:
                <input value={player.lastName} onChange={handleLastNameChange} />
            </label>
        </>
    );
}