import { Box, Button } from '@mui/material';
import DriveFileMoveSharpIcon from '@mui/icons-material/DriveFileMoveSharp';
import CloseIcon from '@mui/icons-material/Close';
import Papa from 'papaparse';

const UploadPart = ({
  onFileLoad,
}: {
  onFileLoad: (data: TableDataProps[]) => void;
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files && e.target.files[0]) {
      file = e.target.files[0];
    }

    if (file) {
      Papa.parse(file, {
        complete: (result: any) => {
          onFileLoad(result.data);
        },
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid gray',
        p: '5px 15px',
        mt: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            startIcon={<DriveFileMoveSharpIcon />}
            sx={{ fontSize: '10px', py: '0px' }}
          >
            <label htmlFor="file-upload" className="custom-file-upload">
              Загрузить данные из csv
            </label>
          </Button>
          <input type="file" id="file-upload" onChange={handleFileChange} />
          <Button
            startIcon={<DriveFileMoveSharpIcon />}
            sx={{ fontSize: '10px', py: '0px' }}
          >
            Изменить данные
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button endIcon={<CloseIcon />} sx={{ fontSize: '10px', py: '0px' }}>
          Очистить
        </Button>
      </Box>
    </Box>
  );
};

export default UploadPart;
