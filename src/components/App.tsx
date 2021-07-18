import React from "react";
import styled from "styled-components";
import { auth } from "../utils/fire";
import { Login } from "./Login";
import firebase from "firebase";
import { GamesList } from "./GamesList";
import { useDispatch } from "react-redux";
import { addPlayerToGame } from "../core/actions/game.actions";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  fieldset {
    display: flex;
    flex-direction: column;

    input,
    button {
      margin: 0.5rem;
    }
  }
`;

export const App = () => {
  const [user, setUser] = React.useState<firebase.User>(auth.currentUser);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  const createGame = async () => {
    if (!user) return;
    console.log(user);
  };

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        // localStorage.setItem("user", JSON.stringify(user))
        // const userDetails = await getUserDetails(user);

        // const userToken = await user.getIdToken(true);
        // console.error(userToken);
        setLoading(false);
      } else {
        setUser(null);
        // localStorage.removeItem("user")
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <h1>Loading</h1>;

  if (user)
    return (
      <div>
        <h1>{user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
        <button onClick={createGame}>Start game</button>
        <GamesList />
      </div>
    );

  return <Login />;

  // const [name, setName] = useState<string>("");
  // const [joinName, setJoinName] = useState<string>("");
  // const [code, setCode] = useState<string>("");
  // const gameStarted = useSelector<AppState, boolean>(isGameStarted);
  // const waitingForOpponent = useSelector<AppState, boolean>(
  //   isWaitingForOpponent
  // );
  // const gameCode = useSelector<AppState, string>(getGameId);
  // const dispatch = useDispatch();

  // const createGame = async () => {
  //   if (!name) return;
  //   dispatch(addPlayerToGame(name, board1));
  // };

  // const joinGame = async () => {
  //   if (!code || !joinName) return;
  //   dispatch(joinGameInProgress(code, joinName, board2));
  // };

  // if (waitingForOpponent)
  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //       <br />
  //       <h3>{gameCode}</h3>
  //     </>
  //   );

  // if (gameStarted) {
  //   return (
  //     <AppContainer>
  //       <Game />
  //     </AppContainer>
  //   );
  // }

  // return (
  //   <AppContainer>
  //     <h1>Battleships</h1>
  //     <fieldset>
  //       <legend>Create Game</legend>
  //       <input
  //         placeholder="name"
  //         type="text"
  //         value={name}
  //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
  //           setName(e.target.value)
  //         }
  //       />
  //       <button onClick={createGame}>Start New Online Game</button>
  //       {/* <button>Start New Game with a Bot</button> */}
  //     </fieldset>
  //     <fieldset>
  //       <legend>Join Game</legend>
  //       <input
  //         placeholder="name"
  //         type="text"
  //         value={joinName}
  //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
  //           setJoinName(e.target.value)
  //         }
  //       />
  //       <input
  //         placeholder="game code"
  //         type="text"
  //         value={code}
  //         onChange={(e: ChangeEvent<HTMLInputElement>) =>
  //           setCode(e.target.value)
  //         }
  //       />
  //       <button onClick={joinGame}>Join Game</button>
  //     </fieldset>
  //   </AppContainer>
  // );
};
function board1(
  name: void,
  board1: any
): {
  type: string;
  payload: { name: string; board: import("../core/logic/board").Board };
} {
  throw new Error("Function not implemented.");
}
