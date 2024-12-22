import UserCard from './widgets/ui/Author';
import UserSkills from './widgets/ui/Skills';
import Footer from './widgets/ui/Footer';
import styles from './styles/index.module.css';

const author = {
  firstName: 'Pablo',
  lastName: 'Escobar',
  age: 44,
  role: 'Сriminal',
  place: 'USA'
};

const skills = [
  { id: 1, value: 'Genius' },
  { id: 2, value: 'Сheater' },
  { id: 3, value: 'Financial fraudster' },
  { id: 4, value: 'Conman' },
  { id: 5, value: 'Bandit' },
];

const App: React.FC = () => {
  return (  
    <div className={styles.container}>
      <UserCard author={author}/>
      <UserSkills skills={skills}/>
      <Footer />
  </div>
  );

};
export default App

