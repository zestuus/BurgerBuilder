import React from 'react';

import {StyledTr, StyledTd} from "./Styled"

const Table = props => {
  if(!props.rows || !props.rows.length)
    Error("table has no rows!");
  return (
    <table>
      <tbody>
        {props.columnNames ?
          <StyledTr emphasized headRow>
            {props.columnNames.map((header) => (
                <StyledTd key={"th-" + header}>
                  {header}
                </StyledTd>
              ))}
          </StyledTr>
        : null}
        {props.rows.map((row, rowIndex)=>(
          <StyledTr
            key={"tr-"+rowIndex}
            emphasized={rowIndex%2!==0}>
            {row.map((item, colIndex)=>(
              <StyledTd
                key={"td-" + row[0] + "-" + props.columnNames? props.columnNames[colIndex] : colIndex}
                firstColumn={colIndex === 0}>
                {item}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;