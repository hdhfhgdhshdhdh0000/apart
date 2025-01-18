import React, { useState } from 'react';
import RoomView from './components/Room';
import DoorView from './components/Door';
import LockView from './components/Lock';
import BookshelfPuzzle from './components/BookshelfPuzzle';
import Room2View from './components/Room2';
import Room3View from './components/Room3';
import PaintingView from './components/PaintingView';
import SafeView from './components/SafeView';
import TVView from './components/TVView';
import WiringPuzzle from './components/WiringPuzzle';
import BoxPuzzle from './components/BoxPuzzle';
import DVDSlot from './components/DVDSlot';
import ClockPuzzle from './components/ClockPuzzle';
import CodeInputPuzzle from './components/CodeInputPuzzle';
import CaseView from './components/CaseView';
import SudokuPuzzle from './components/SudokuPuzzle';
import CaesarCipher from './components/CaesarСipher';
import TransitionWrapper from './components/TransitionWrapper';
import EndView from './components/End';

const App = () => {
  const [state, setState] = useState({
    currentView: 'room',
    isPuzzleSolved: false,
    isSafeOpen: false,
    isWiringSolved: false,
    boxState: 'closed',
    hasCassette: false,
    isCassetteInserted: false,
    isDvdOn: false,
    isTvOn: false,
    isClockSolved: false,
    isCodeSolved: false,
    keyTaken: false,
    isLockOpened: false,
    isSudokuSolved: false,
    isCaesarSolved: false,
    isTransitioning: false,
    isCodeLockOpened: false,
    nextView: null
  });

  const updateState = (updates) => setState((prev) => ({ ...prev, ...updates }));
  const [hoverText, setHoverText] = useState('');
  const [isDebugVisible, setDebugVisible] = useState(false);

  const DebugMenu = ({ updateState }) => {
    return (
      <div className="debug-menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          color: 'white',
          width: 'auto',
        }}
      >
        <h4>Debug Menu</h4>
        <button
          onClick={() => updateState({ isClockSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Часы
        </button><br />

        <button
          onClick={() => updateState({ isSudokuSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Судоку
        </button><br />

        <button
          onClick={() => updateState({ isPuzzleSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Книги
        </button><br />

        <button
          onClick={() => updateState({ isWiringSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Провода
        </button><br />

        <button
          onClick={() => updateState({ isCaesarSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Шифр Цезаря
        </button><br />

        <button
          onClick={() => updateState({ isLockOpened: true })}
          style={{ marginBottom: '10px' }}
        >
          Замок 1 (Ключ)
        </button><br />

        <button
          onClick={() => updateState({ isCodeLockOpened: true })}
          style={{ marginBottom: '10px' }}
        >
          Замок 2 (Код)
        </button><br />

        <button
          onClick={() => updateState({ isSafeOpen: true })}
          style={{ marginBottom: '10px' }}
        >
          Открыть сейф
        </button><br />

        <button
          onClick={() => updateState({ isDvdOn: true })}
          style={{ marginBottom: '10px' }}
        >
          Вкл. видеомагнитофон
        </button><br />

        <button
          onClick={() => updateState({ isTvOn: true })}
          style={{ marginBottom: '10px' }}
        >
          Вкл. ТВ
        </button><br />

        <button
          onClick={() => updateState({ keyTaken: true })}
          style={{ marginBottom: '10px' }}
        >
          Взять ключ
        </button><br />

        <button
          onClick={() => updateState({ hasCassette: true })}
          style={{ marginBottom: '10px' }}
        >
          Взять кассету
        </button><br />

        <button
          onClick={() => updateState({ isCodeSolved: true })}
          style={{ marginBottom: '10px' }}
        >
          Час. шкаф
        </button><br />
        <button
          onClick={() => updateState({ boxState: 'open' })}
          style={{ marginBottom: '10px' }}
        >
          Открыть коробочку
        </button><br />


      </div>
    );
  };



  const changeView = (view) => {
    if (view !== state.currentView) {
      setState((prev) => ({ ...prev, isTransitioning: true, nextView: view }));

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          currentView: view,
          isTransitioning: false,
          nextView: null
        }));
      }, 500);
    }
  };

  const views = {
    room: (
      <RoomView
        onDoorClick={() => changeView('door')}
        onRoom2Click={() => changeView('room2')}
        onRoom3Click={() => changeView('room3')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    door: (
      <DoorView
        onLockClick={() => changeView('lock')}
        onBack={() => changeView('room')}
        keyTaken={state.keyTaken}
        isLockOpened={state.isLockOpened}
        isCodeLockOpened={state.isCodeLockOpened}
        onUnlock={() => updateState({ isLockOpened: true })}
        onHover={(text) => setHoverText(text)}
        onEnd={() => changeView('end')}
      />
    ),
    end: (
      <EndView />
    ),
    lock: (
      <LockView
        onHover={(text) => setHoverText(text)}
        onBack={() => changeView('door')}
        isCodeLockOpened={state.isCodeLockOpened}
        onCodeUnlock={() => updateState({ isCodeLockOpened: true })}
      />
    ),
    room2: (
      <Room2View
        onPaintingClick={() => changeView('painting')}
        onClockPuzzleClick={() => changeView('clock')}
        onBack={() => changeView('room')}
        onBoxPuzzleClick={() => changeView('boxPuzzle')}
        onCodeInputPuzzleClick={() => changeView('code-input')}
        onCaseClick={() => changeView('case')}
        isCodeSolved={state.isCodeSolved}
        onHover={(text) => setHoverText(text)}
      />
    ),
    painting: (
      <PaintingView
        puzzleSolved={state.isPuzzleSolved}
        onSafeClick={() => changeView('safe')}
        onBack={() => changeView('room2')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    safe: (
      <SafeView
        onBack={() => changeView('painting')}
        isSafeOpen={state.isSafeOpen}
        onHover={(text) => setHoverText(text)}
        onOpen={() => updateState({ isSafeOpen: true })}
      />
    ),
    room3: (
      <Room3View
        onBookshelfClick={() => changeView('puzzle')}
        onSudokuClick={() => changeView('sudoku')}
        onCaesarClick={() => changeView('caesar')}
        onTVClick={() => changeView('tv')}
        onBack={() => changeView('room')}
        isSudokuSolved={state.isSudokuSolved}
        onHover={(text) => setHoverText(text)}
      />
    ),
    tv: (
      <TVView
        isTvOn={state.isTvOn}
        toggleTv={() => updateState({ isTvOn: !state.isTvOn })}
        isDvdOn={state.isDvdOn}
        onWiringPuzzleClick={() => changeView('wiring')}
        onDVDSlotClick={() => changeView('dvdslot')}
        isWiringSolved={state.isWiringSolved}
        onBack={() => changeView('room3')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    wiring: (
      <WiringPuzzle
        onSolve={() => updateState({ isWiringSolved: true })}
        onBack={() => changeView('tv')}
        isSolved={state.isWiringSolved}
        onHover={(text) => setHoverText(text)}
      />
    ),
    puzzle: (
      <BookshelfPuzzle
        isSolved={state.isPuzzleSolved}
        onSolve={() => updateState({ isPuzzleSolved: true })}
        onBack={() => changeView('room3')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    boxPuzzle: (
      <BoxPuzzle
        boxState={state.boxState}
        setBoxState={(boxState) => updateState({ boxState })}
        onBack={() => changeView('room2')}
        onCassetteTake={() => updateState({ hasCassette: true })}
        onHover={(text) => setHoverText(text)}
      />
    ),
    dvdslot: (
      <DVDSlot
        hasCassette={state.hasCassette}
        isCassetteInserted={state.isCassetteInserted}
        setIsCassetteInserted={(isCassetteInserted) =>
          updateState({ isCassetteInserted })
        }
        isWiringSolved={state.isWiringSolved}
        isDvdOn={state.isDvdOn}
        setIsDvdOn={(isDvdOn) => updateState({ isDvdOn })}
        onBack={() => changeView('tv')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    clock: (
      <ClockPuzzle
        isClockSolved={state.isClockSolved}
        onBack={() => changeView('room2')}
        onSolved={(timeCode) => updateState({ isClockSolved: true })}
        onHover={(text) => setHoverText(text)}
      />

    ),
    'code-input': (
      <CodeInputPuzzle
        onCodeSolved={() => updateState({ isCodeSolved: true, currentView: 'case' })}
        onBack={() => changeView('room2')}
        onHover={(text) => setHoverText(text)}
      />
    ),
    case: (
      <CaseView
        onBack={() => changeView('room2')}
        onTakeKey={() => updateState({ keyTaken: true })}
        keyTaken={state.keyTaken}
        onHover={(text) => setHoverText(text)}
      />
    ),
    sudoku: (
      <SudokuPuzzle
        onBack={() => changeView('room3')}
        onSudokuSolved={() => updateState({ isSudokuSolved: true, currentView: 'caesar' })}
        onHover={(text) => setHoverText(text)}
      />
    ),
    caesar: (
      <CaesarCipher
        onBack={() => changeView('room3')}
        isSolved={state.isCaesarSolved}
        onSolve={() => updateState({ isCaesarSolved: true })}
        onHover={(text) => setHoverText(text)}
      />
    )
  };

  return (
    <div id="game-container">
      <div className="App">
        <TransitionWrapper isTransitioning={state.isTransitioning}>
          {views[state.currentView]}
        </TransitionWrapper>
      </div>
      <div
        className="hover-text"
        style={{
          position: 'absolute',
          bottom: '-40px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '5px 10px',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
        }}
      >
        {hoverText}
      </div>
      <div
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 101 }}
      >
        <button
          onClick={() => setDebugVisible(!isDebugVisible)}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isDebugVisible ? 'Скрыть Debug Menu' : 'Показать Debug Menu'}
        </button>
      </div>
      {isDebugVisible && <DebugMenu updateState={updateState} />}
    </div>
  );
};

export default App;
