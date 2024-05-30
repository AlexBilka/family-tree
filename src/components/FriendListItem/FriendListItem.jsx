// const RecursiveComponent = ({ depth }) => {
//   if (depth === 0) {
//     return null;
//   }

const FriendListItem = ({
  friend: {
    avatar,
    name,
    surname,
    birthDate,
    birthPlace,
    ripDate,
    ripPlace,
    father,
    mother,
    brother,
    sister,
    // isOnline,
  },
}) => {
  if (!name) {
    return null;
  }
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{surname}</p>
      <p>{birthDate}</p>
      <p>{birthPlace}</p>
      <p>{ripDate}</p>
      <p>{ripPlace}</p>
      <p>{father}</p>
      <p>{mother}</p>
      <p>{brother}</p>
      <p>{sister}</p>
      {/* <p>{isOnline ? 'Online' : 'Offline'}</p> */}
    </div>
  );
};

export default FriendListItem;

// import React from 'react';

// const RecursiveComponent = ({ depth }) => {
//   if (depth === 0) {
//     return null;
//   }

//   return (
//     <div>
//       <p>Current depth: {depth}</p>
//       <RecursiveComponent depth={depth - 1} />
//     </div>
//   );
// };

// const App = () => {
//   return <RecursiveComponent depth={3} />;
// };

// export default App;

// ===================================

// import React from 'react';

// const TreeNode = ({ node }) => {
//   if (!node) {
//     return null;
//   }

//   return (
//     <div style={{ marginLeft: '20px' }}>
//       <p>{node.name}</p>
//       {node.children && node.children.map((child, index) => (
//         <TreeNode key={index} node={child} />
//       ))}
//     </div>
//   );
// };

// const treeData = {
//   name: 'Root',
//   children: [
//     {
//       name: 'Child 1',
//       children: [
//         {
//           name: 'Grandchild 1',
//           children: [
//             { name: 'Great-Grandchild 1' },
//             { name: 'Great-Grandchild 2' }
//           ]
//         },
//         { name: 'Grandchild 2' }
//       ]
//     },
//     { name: 'Child 2' }
//   ]
// };

// const App = () => {
//   return <TreeNode node={treeData} />;
// };

// export default App;
