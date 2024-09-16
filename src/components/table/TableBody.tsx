import { useEffect, useState } from 'react';
import style from './table.module.css';

const TableBody = ({
  tableData,
  columns,
  setTableData,
  setTotals,
}: {
  tableData: any;
  columns: ColumnsProps[];
  setTableData: any;
  setTotals: any;
}) => {
  const [editCell, setEditCell] = useState({});

  const handleChange = (inputValue: any, accessor: string | number) => {
    const newDataState = [...tableData];
    // @ts-ignore
    const row = newDataState.find((row) => row.id === editCell.id);
    row[accessor] =
      accessor === 'available' || accessor === 'transit'
        ? Math.trunc(Number(inputValue))
        : inputValue;
    setTableData(newDataState);
  };

  const getSumms = (data: any) => {
    let summ1 = data.reduce(
      (acc: number, item: any) => acc + +item?.available,
      0
    );
    let summ2 = data.reduce(
      (acc: number, item: any) => acc + +item?.transit,
      0
    );
    return setTotals({ summ1: summ1, summ2: summ2 });
  };

  useEffect(() => {
    getSumms(tableData);
  }, [tableData]);

  return (
    <tbody className='class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"'>
      {tableData.map((data: any) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const isEditing =
                //@ts-ignore
                editCell.id === data.id && editCell?.accessor === accessor;
              const tData = data[accessor]
                ? data[accessor]
                : isEditing
                ? ''
                : '__';

              return (
                <td
                  key={accessor}
                  onClick={() => {
                    setEditCell({ id: data.id, accessor });
                  }}
                >
                  {isEditing ? (
                    <input
                      className={style.tableSell}
                      type={
                        accessor === 'available' || accessor === 'transit'
                          ? 'number'
                          : 'text'
                      }
                      value={tData}
                      onChange={(e) => handleChange(e.target.value, accessor)}
                      onBlur={() => setEditCell({})}
                      onKeyDown={(e) =>
                        e.key === 'Enter' ? setEditCell({}) : editCell
                      }
                      autoFocus
                    />
                  ) : (
                    tData
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
