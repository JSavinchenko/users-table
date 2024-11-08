import './App.styles.tsx';
import {StyledWrapper} from './App.styles';
import {Table} from './components/Table';
import {Header} from './components/Header/Header.tsx';

function App() {
  return (
    <StyledWrapper>
      <Header />
      <Table />
    </StyledWrapper>
  );
}

export default App;
