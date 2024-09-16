import { Button } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const ExportPart = ({
  data,
  fileName,
}: {
  data: TableDataProps[];
  fileName: string;
}) => {
  // for JSON file
  const downloadJSON = () => {
    const jsonData = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    const jsonURL = URL.createObjectURL(jsonData);
    const link = document.createElement('a');
    link.href = jsonURL;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Button
        onClick={downloadJSON}
        startIcon={<LibraryBooksIcon />}
        sx={{
          color: 'primary.contrastText',
          bgcolor: 'secondary.dark',
          borderRadius: 4,
          fontSize: '8px',
          fontWeight: 'bold',
          px: '10px',
          height: '33px',
        }}
      >
        Экспорт
      </Button>
    </>
  );
};

export default ExportPart;
