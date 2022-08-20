import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <main className="main">
        <TodoHeader />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
