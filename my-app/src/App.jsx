import { useState } from 'react';
import rock from './asset/rock.png'
import paper from './asset/paper.png'
import scissors from './asset/scissors.png'
import './App.css'
const choices = [
  "rock",
  "paper",
  "scissors"
]
function App() {

  const [user, setUser] = useState("")
  const [computer, setComputer] = useState("")
  const [state, setState] = useState("")

  const RandomComputer = (choice) => {
    const index = Math.floor(Math.random() * choices.length)
    setComputer(choices[index])

    switch (choices[index]) {
      case "rock":
        setComputer(rock);
        break;
      case "paper":
        setComputer(paper);
        break;
      case "scissors":
        setComputer(scissors);
        break;
      default:
        throw new Error("Invalid choice")
    }

    switch (choice) {
      case "rock":
        setUser(rock);
        break;
      case "paper":
        setUser(paper);
        break;
      case "scissors":
        setUser(scissors);
        break;
      default:
        throw new Error("Invalid choice")
    }

    // ok r, sửa lại logic tí nữa là đc okbro :)) nên sửa luôn t ngồi xem ok ổn rồi đấy sai màu :)

    if (choice === "rock") {
      if (choices[index] === "rock") {
        setState("lie")
      }
      if (choices[index] === "paper") {
        setState("lose")
      }
      if (choices[index] === "scissors") { // choox nafy do cái mảng choices toàn là cái import :)) nên giờ so sánh hơi khoai
        setState("win")
      }

    } else
    {
      if (choice === "paper") {

        if (choices[index] === "rock") {
          setState("win")
        }
        if (choices[index] === "paper") {
          setState("lie")
        }
        if (choices[index] === "scissors") {
          setState("lose")
  
        }
      }
      else{
        if (choice === "scissors") {

          if (choices[index] === "rock") {
            setState("lose")
          }
          if (choices[index] === "paper") {
            setState("win")
          }
          if (choices[index] === "scissors") {
            setState("lie")
          }
        }
      }
    }  
      
  }
  
  console.log("user", user)
  console.log(" computer", computer)
  console.log("state", state)
  let classNameUserImg = "";
  let classNameComImg = "";
  if (state === "lie") {
    classNameUserImg = "img";
    classNameComImg = "img";
  }
  else {
    if (state === "win") {
      classNameUserImg = "img win"
      classNameComImg = "img lose"
    }
    else if (state === "lose") {
      classNameComImg = "img win"
      classNameUserImg = "img lose"
    }
  }
  return (
    <div className="App" >
      <div className="image">
        <img className={classNameUserImg
        } src={user} alt="" width="400px" height="400px" />
        <img className={classNameComImg} src={computer} alt="" width="400px" height="400px" />

      </div>
      <div className="btn">
        <button onClick={() => RandomComputer("rock")}>rock</button>
        <button onClick={() => RandomComputer("scissors")}>scissors</button>
        <button onClick={() => RandomComputer("paper")}>paper</button>
      </div>
      <div className='stage'>
        <h1>{state}</h1>
      </div>


    </div>
  );
}

export default App;
