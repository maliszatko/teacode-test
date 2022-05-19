import React from 'react'
import Header from './components/Header/Header'
import ContactList from "./components/Contacts/ContactList";

function App() {
  return (
      <>
          <Header/>
          <main>
              <ContactList/>
          </main>
      </>
  );
}

export default App;
