import 'tailwindcss/tailwind.css';
import AddTodo from './Pages/AddTodo';
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <>
      <header className='fixed top-0 w-full bg-white shadow'>
        <div className='flex justify-between items-center py-[8px] px-[16px]'>
          <AddTodo />
          <Search />
        </div>
      </header>
      <section className='py-[8px] px-[16px] mt-[60px]'>
        <Home />
      </section>
    </>
  );
}

export default App;
