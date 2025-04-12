import React from 'react';
import Profile from './components/Profile/profile';
import userData from './userData.json';
import FriendList from './components/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <div className="mt-8">
       
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;