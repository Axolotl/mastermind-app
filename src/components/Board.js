import React from 'react';
import Circle from './Circle';
import Wrapper from './FlexWrapper';

//table and td have styles declared in index.css

const Board = ({ data }) => (
  <Wrapper>

    {data &&
      Object.entries(data).map((set, i) => (
        <div key={i} style={{margin: '20px 15px 20px 15px'}}>
          <p style={{margin: '5px', fontSize: '1em',}}>
            {set[0]}
          </p>
          <table>
            <tbody>
              {set[1].map((datum, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Wrapper>
                        {datum &&
                          datum.map((color, index) => {
                            return (
                              <Circle key={index} color={color} size='10px' margin='0px 5px'/>
                            )
                          })
                        }
                      </Wrapper>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))
    }

  </Wrapper>
)

export default Board