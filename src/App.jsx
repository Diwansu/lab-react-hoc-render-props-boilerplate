import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";

import LikeImageRender from "./components/LikeImageRender";
import LikePostRender from "./components/LikePostRender";
import RenderProps from "./components/RenderProps";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className="buttons">
      

        <RenderProps
          render={(count, handleCount) => (
            <LikeImageRender count={count} handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikePostRender count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
