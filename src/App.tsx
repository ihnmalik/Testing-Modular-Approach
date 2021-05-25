
// import { StoreProvider } from "root"
import { components } from "root"
import { Provider } from "react-redux"
import { configureStore } from "root"
import { Button, Counter } from "counter2"

const { Bottombar } = components

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <Counter />
      <div className="App">
        <Button></Button>
        <Bottombar>
          <div>Sample New</div>
        </Bottombar>
      </div>
    </Provider>
  );
}

export default App;
