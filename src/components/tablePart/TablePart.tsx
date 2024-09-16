import { Box, Button, Typography } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import Table from '../table/Table';
import data from '../../data.json';
import { columns } from '../../lib/constants';

const TablePart = () => {
  return (
    <Box>
      {/* 1 PART */}
      <Box
        sx={{
          mb: 1,
        }}
      >
        {/* White board */}
        <Box
          sx={{
            bgcolor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '5px 15px',
            borderRadius: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccountCircleSharpIcon />
              <Typography>Иванов И.И.</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: '#eef5ff',
                height: 50,
                px: 2,
                borderRadius: 4,
              }}
            >
              <CalendarMonthSharpIcon sx={{ color: '#287eff' }} />
              <Typography>Тариф до 15.04.2024</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button sx={{ border: '1px solid #293047', borderRadius: 4 }}>
              Выйти
            </Button>
            <Button
              sx={{
                bgcolor: '#ff833d',
                border: '1px solid #ff833d',
                borderRadius: 4,
              }}
            >
              О нас
            </Button>
          </Box>
        </Box>

        {/* Title */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            mt: 3,
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: '24px' }}>
            Остатки сформированы на 01.04.2023 г.
          </Typography>
          <Button
            startIcon={<LibraryBooksIcon />}
            sx={{
              color: 'primary.contrastText',
              bgcolor: 'secondary.dark',
              borderRadius: 4,
              fontSize: '8px',
              fontWeight: 'bold',
              px: '10px',
            }}
          >
            Инструкции
          </Button>
        </Box>
      </Box>

      {/* 2 PART - TABLE */}
      <Table data={data} columns={columns} />
    </Box>
  );
};

export default TablePart;
