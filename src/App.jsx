import { StyledContainer } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <StyledContainer>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </StyledContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
