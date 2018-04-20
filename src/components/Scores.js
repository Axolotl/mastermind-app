import React from 'react';
import Wrapper from './FlexWrapper';

/* data format for scores
[{"name":"test","score":100},
 {"name":"test2","score":50},
 {"name":"test3","score":75},
 {"name":"test4","score":7}]
*/

const Scores = ({ data }) => (
  <Wrapper>
    {console.log("typeof data: " + typeof(data))}
    <table>
      <tbody>
        {Object.keys(data).map(key => {
          console.log(data[key])
          return (<tr key={key}>
                      <td>{data[key].name}</td>
                      <td>{data[key].score}</td>
                    </tr>)
        })}
      </tbody>
    </table>
  </Wrapper>
)


export default Scores


// const Board = ({ data }) => (
//   <Wrapper>

//     {Object.entries(data).map((set, i) => (
//       <div key={i} style={{margin: '20px 15px 20px 15px'}}>
//         <p style={{margin: '5px', fontSize: '1em',}}>
//           {set[0]}
//         </p>
//         <table>
//           <tbody>
//             {set[1].map((datum, i) => (
//               <tr key={i}>
//                 <td>
//                   <Wrapper>
//                     {datum &&
//                       datum.map((color, index) => {
//                         return (
//                           <Circle key={index} color={color} size='10px' margin='0px 5px'/>
//                         )
//                       })
//                     }
//                   </Wrapper>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ))}

//   </Wrapper>
// )

// export default Board