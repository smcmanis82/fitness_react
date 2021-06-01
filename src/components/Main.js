// const App = () => {
//
////
//     return (
//       <Router>
//         <div id="App">
//           <Header
//             userList={userList}
//             currentUser={currentUser}
//             setCurrentUser={setCurrentUser}
//           />
//           {currentUser ? (
//             <>
//               <Switch>
//                 <Route path="/posts">
//                   <UserPosts userPosts={userPosts} currentUser={currentUser} />
//                 </Route>
//                 <Route path="/todos">
//                   <UserTodos userTodos={userTodos} currentUser={currentUser} />
//                 </Route>
//                 <Route exact path="/">
//                   <h2
//                     style={{
//                       padding: ".5em",
//                     }}
//                   >
//                     Welcome, {currentUser.username}!
//                   </h2>
//                 </Route>
//                 <Redirect to="/" />
//               </Switch>
//             </>
//           ) : (
//             <>
//               <Switch>
//                 <Route exact path="/">
//                   <h2
//                     style={{
//                       padding: ".5em",
//                     }}
//                   >
//                     Please log in, above.
//                   </h2>
//                 </Route>
//                 <Redirect to="/" />
//               </Switch>
//             </>
//           )}
//         </div>
//       </Router>
//     );
//   };
