import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { DarkModeToggle } from './DarkModeToggle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RecoilRoot>
      <DarkModeToggle />
    </RecoilRoot>
  </StrictMode>
);
