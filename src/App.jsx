import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <Button>Deneme Butonu</Button>
      <Input type="number" placeholder="Number of guests" />
    </>
  );
}

export default App;
