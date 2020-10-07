import React from "react";
import "./App.css";
import Tabs from "./components/tabs";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class App extends React.Component {
  state = {
    shouldShowSrcCode: false,
  };

  onclickShowSrcCode = () => {
    this.setState((prevState) => ({
      shouldShowSrcCode: !prevState.shouldShowSrcCode,
    }));
  };
  render() {
    const Code = `<Tabs>
          <div label="Sub Zero">
            This guy is pretty chill. He likes to freeze people and doesn't like scorpions very much.
          </div>
          <div label="Star Fox">
            Really fast and annoying. Those hexagons will get ya.  <em>hiyaaaaaaa!</em>
          </div>
          <div label="Batman">
            Don't mention his parents.
          </div>
        </Tabs>`;

    return (
      <div className="App">
        <div className="tabs-demo">
          <p>Tabbed pane demo</p>
          show source code
          <input type="checkbox" onClick={this.onclickShowSrcCode}></input>
          <LiveProvider code={Code} scope={{ Tabs }}>
            {this.state.shouldShowSrcCode && <LiveEditor />}
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </div>
    );
  }
}

export default App;
