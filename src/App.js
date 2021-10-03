import React from 'react';
import File from './components/File'
import Folder from './components/Folder';

function App() {
  return (
    <>
      <Folder name="Marcos Hernandez-Ibarra">
        <File name="something" />
      </Folder>
    </>
  );
}

export default App;
