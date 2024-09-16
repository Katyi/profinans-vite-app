import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import style from './table.module.css';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { useSortableTable } from '../../lib/useSortableTable';
import UploadPart from '../uploadPart/UploadPart';
import FilterPart from '../filterPart/FilterPart';

const Table = ({
  data,
  columns,
}: {
  data: TableDataProps[];
  columns: ColumnsProps[];
}) => {
  const [tableData, setTableData, handleSorting] = useSortableTable(
    data,
    columns
  );

  const [totals, setTotals] = useState({ summ1: 0, summ2: 0 });

  const handleFileLoad = (csvData: TableDataProps[]) => {
    //@ts-ignore
    setTableData(csvData);
  };

  const handleFilter = (data: TableDataProps[]) => {
    //@ts-ignore
    setTableData(data);
  };

  return (
    <Box>
      {/* Filter */}
      <FilterPart
        //@ts-ignore
        data={tableData}
        fileName="products"
        // @ts-ignore
        handleFilter={handleFilter}
      />
      {/* Upload Part */}
      <UploadPart onFileLoad={handleFileLoad} />
      {/* TABLE */}
      <table className={style.table}>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData, setTableData, setTotals }} />
      </table>
      {/* Totals */}
      <Box
        sx={{
          pt: 2,
          borderRadius: '0px 0px 15px 15px',
          bgcolor: '#fff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: '15px 20px',
            // bgcolor: '#eff0f0',
            bgcolor: 'lightgray',
            borderRadius: '0px 0px 15px 15px',
          }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
            Итого:
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              ml: 'calc(74vw/6*4 - 10px - 48px)',
            }}
          >
            {totals.summ1.toString()}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              ml: 'calc(74vw/6 + 20px - 48px)',
            }}
          >
            {totals.summ2.toString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
