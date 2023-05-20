import { css } from "@linaria/core";

// Write your styles in `styled` tag
const Title = css`
  font-size: 2rem;
`;

function App() {
  return <h1 className={Title}>test</h1>;
}

export default App;
