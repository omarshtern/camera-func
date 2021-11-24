import "./App.css";
import WebCamCapture from "./WebCamCapture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import Cahts from "./Cahts";
import ChatView from "./ChatView";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <WebCamCapture />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/chats">
              <Cahts />
            </Route>
            <Route path="/view">
              <ChatView />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
