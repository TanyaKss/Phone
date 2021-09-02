import TodoList from "./Components/TodoList";
import styles from  './App.module.css'


function App() {
const todos = [{title: 'A'},
               {title: 'Б'},
               {title: 'В', children: [ {title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'D'}, {title: 'E'}, {title: 'F'}, {title: 'G'}, {title: 'H'}, {title: 'I'} ]}, 
               {title: 'Г'},
               {title: 'Д'},
               {title: 'Е'},
               {title: 'Ё'},
               {title: 'Ж'},
               {title: 'З'},
               {title: 'И'},
               {title: 'Й'},
               {title: 'К'},
               {title: 'Л'},
               {title: 'М'},
               {title: 'Н'},
               {title: 'О'},
               {title: 'П'},
               {title: 'Р'},
               {title: 'С'},
               {title: 'Т'},
               {title: 'У'},
               {title: 'Ф'},
               {title: 'Х'},
               {title: 'Ц'},
               {title: 'Ч'},
               {title: 'Ш'},
               {title: 'Щ'},
               {title: 'Ъ'}]


  return (
      <div className = {styles.wr}>
        <TodoList todos={todos}/>
      </div>
  );
}

export default App;