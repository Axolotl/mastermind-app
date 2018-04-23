import React from 'react';
import Circle from './Circle';
import Wrapper from './FlexWrapper';

//table and td have styles declared in index.css

const Board = ({ data }) => (
  <Wrapper>

    {Object.entries(data).map((set, i) => (
      <div key={i} style={{margin: '0px 15px 10px 15px'}}>
        <p style={{margin: '5px', fontSize: '1em',}}>
          {set[0]}
        </p>
        <table>
          <tbody>
            {set[1].map((datum, i) => (
              <tr key={i}>
                <td>
                  <Wrapper>
                    {datum &&
                      datum.map((color, index) => {
                        return (
                          <Circle key={index} color={color} size='10px' margin='0px 2px'/>
                        )
                      })
                    }
                  </Wrapper>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}

  </Wrapper>
)

export default Board