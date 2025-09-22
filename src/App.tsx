import React from "react";
import { ReactQueryProvider } from "./lib/rq-provider";
import UserList from "./components/UserList";


const App: React.FC = () => {
  return (
    <ReactQueryProvider>
      <h1>Fetch Data</h1>
      <UserList />
    </ReactQueryProvider>
  );
};

export default App;
