import React from 'react';

/* data format for scores
[{"name":"test","score":100},
 {"name":"test2","score":50},
 {"name":"test3","score":75},
 {"name":"test4","score":7}]
*/

const scoresStyle = {
  margin: '20px',
  display: 'flex',
  justifyContent: 'center',
}

const Scores = ({ data }) => (
  <div style={scoresStyle}>
    <table>
      <tbody>
        {Object.keys(data).map(key => (
          <tr key={key}>
            <td>{data[key].name}</td>
            <td>{data[key].score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)


export default Scores