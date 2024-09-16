import { Box, Stack } from '@mui/material';
import SideBar from './components/sideBar/SideBar';
import TablePart from './components/tablePart/TablePart';

function App() {
  return (
    <Box sx={{ p: '20px 20px' }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <TablePart />
      </Stack>
    </Box>
  );
}

export default App;
