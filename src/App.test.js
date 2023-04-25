import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM, {createRoot} from "react-dom/client";
import MainApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MainApp />);
  root.unmount()
});
