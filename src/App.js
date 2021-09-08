import styles from  './App.module.css'
import MainMenu from './Components/MainMenu';


function App() {
  const todos = [{title: 'Clips', page: 1 , icon:'clips'},
  {title: 'Books', page: 1, icon: 'books'},
  {title: 'Folder1', children: [{title: 'Home', icon: 'home'}, {title: 'Mail', icon: 'mail'}, {title: 'Translate', icon: 'translate'}], page: 1}, 
  {title: 'Contacts', page: 1, icon: 'contacts'},
  {title: 'Facetime', page: 1, icon: 'facetime'},
  {title: 'Safari', page: 1, icon: 'safari'},
  {title: 'Settings', page: 1, icon: 'settings'},
  {title: 'Clock', page: 1, icon: 'clock'},
  {title: 'Health', page: 1, icon: 'health'},
  {title: 'Message', page: 1, icon: 'iosMessage'},
  {title: 'Notes', page: 1, icon: 'notes'},
  {title: 'Measure', page: 1, icon: 'measure'},
  {title: 'Photo', page: 2, icon: 'photo'},
  {title: 'Calculator', page: 2, icon: 'calculator'},
  {title: 'Camera', page: 2, icon: 'camera'},
  {title: 'Music', page: 2, icon: 'music'},
  {title: 'Store', page: 2, icon: 'store'},
  {title: 'Files', page: 2, icon: 'files'},
  {title: 'Voice', page: 2, icon:'voice'}]



  return (
      <div className = {styles.wr}>
        <MainMenu todos={todos}/>
      </div>
  );
}

export default App;