import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MaterialUIControllerProvider } from './context';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <MaterialUIControllerProvider>
         <SnackbarProvider>
            <RecoilRoot>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </RecoilRoot>
         </SnackbarProvider>
      </MaterialUIControllerProvider>
   </React.StrictMode>,
);
