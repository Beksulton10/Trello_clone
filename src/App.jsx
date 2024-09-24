import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';


function App() {
  const boardData = {
    active: 0,
    boards: [
      {
        name: 'My Trello Board',
        bgcolor: '#4bbf6b',
        list: [
          { id: "1", title: "First list", items: [{ id: "bek1", title: "First card" }] },
          { id: "2", title: "Second list", items: [{ id: "bek2", title: "Second card" }] },
        ]
      }
    ]
  }
  const [allboard, setAllBoard] = useState(boardData);

  return (
    <>
      <BoardContext.Provider value={{ allboard, setAllBoard }}>
        <div className='content flex h-[100vh]'>
          <Main></Main>
        </div>
      </BoardContext.Provider>
    </>
  );
}

export default App;
