import 'tailwindcss/tailwind.css';
import AddTodo from './Pages/AddTodo';
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <>
      <header>
        <div className='d-flex'>
          <AddTodo />
          <Search />
        </div>
      </header>
      <Home />
    </>
  );
}

export default App;
