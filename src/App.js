import styles from  './App.module.css'
import MainMenu from './Components/MainMenu';


function App() {
  const todos = [{title: 'A', page: 1},
  {title: 'Б', page: 1},
  {title: 'В', children: [ {title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'D'}, {title: 'E'}, {title: 'F'}, {title: 'G'}, {title: 'H'}, {title: 'I'} ], page: 1}, 
  {title: 'Г', page: 1},
  {title: 'Д', page: 1},
  {title: 'Е', page: 1},
  {title: 'Ё', page: 1},
  {title: 'Ж', page: 1},
  {title: 'З', page: 1},
  {title: 'И', page: 1},
  {title: 'Й', page: 1},
  {title: 'К', page: 1},
  {title: 'Л', page: 2},
  {title: 'М', page: 2},
  {title: 'Н', page: 2},
  {title: 'О', page: 2},
  {title: 'П', page: 2},
  {title: 'Р', page: 2},
  {title: 'С', page: 2},
  {title: 'Т', page: 2},
  {title: 'У', page: 2},
  {title: 'Ф', page: 2},
  {title: 'Х', page: 2},
  {title: 'Ц', page: 2},
  {title: 'Ч', page: 2},
  {title: 'Ш', page: 2},
  {title: 'Щ', children: [ {title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'D'}, {title: 'E'}, {title: 'F'}, {title: 'G'}, {title: 'H'}, {title: 'I'} ], page: 2},
  {title: 'Ъ', page: 2}]



  return (
      <div className = {styles.wr}>
        <MainMenu todos={todos}/>
      </div>
  );
}

export default App;