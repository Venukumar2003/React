// import React from 'react'
// import { UserProvider } from './context/CreateContext'
// import UsersCount from './components/UsersCount'
// import UsersList from './components/UsersList'

// const App = () => {
//   return (
//     <div>
    
// <h1> Context API example</h1>

//     <UserProvider>

//       <UsersCount />
//       <UsersList />
//     </UserProvider>
    
//     </div>
//   )
// }
// export default App


import React from 'react'
import { UserPrvider } from './context/CreateContext'
import UsersCount from './components/UsersCount'
import UsersList from './components/UsersList'

const App = () => {
  return (
    <UserPrvider>

      <h1> My Application</h1>

      <UsersCount />
      <UsersList />
    </UserPrvider>
  )
}

export default App