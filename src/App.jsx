// src/app.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Center from './components/Center';
import EmptyBoard from './components/EmptyBoard';
import Login from './login';
import Register from './register';
import { loginUser } from './redux/authSlice';
import boardsSlice from './redux/boardsSlice'; // Make sure to import boardsSlice

function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const activeBoard = boards.find((board) => board.isActive);

  if (!activeBoard && boards.length > 0) {
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
  }

  const [boardModalOpen, setBoardModalOpen] = React.useState(false);

  const isLoggedIn = () => {
    return isAuthenticated;
  };

  return (
    <div className='overflow-hidden overflow-x-scroll'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <>
                {boards.length > 0 ? (
                  <>
                    {/* Header Section */}
                    <Header
                      boardModalOpen={boardModalOpen}
                      setBoardModalOpen={setBoardModalOpen}
                    />

                    {/* Center Section */}
                    <Center
                      boardModalOpen={boardModalOpen}
                      setBoardModalOpen={setBoardModalOpen}
                    />
                  </>
                ) : (
                  <>
                    <EmptyBoard type='add' />
                  </>
                )}
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
