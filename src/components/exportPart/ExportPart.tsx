import { Button } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const ExportPart = ({
  data,
  fileName,
}: {
  data: TableDataProps[];
  fileName: string;
}) => {
  // for export CSV files - just code not used in this case
  // const convertToCSV = (objArray: string | TableDataProps[]) => {
  //   const array =
  //     typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  //   let str = '';

  //   for (let i = 0; i < array.length; i++) {
  //     let line = '';
  //     for (let index in array[i]) {
  //       if (line !== '') line += ',';

  //       line += array[i][index];
  //     }
  //     str += line + '\r\n';
  //   }
  //   return str;
  // };
  // for export CSV files - just code not used in this case
  // const downloadCSV = () => {
  //   const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
  //   const csvURL = URL.createObjectURL(csvData);
  //   const link = document.createElement('a');
  //   link.href = csvURL;
  //   link.download = `${fileName}.csv`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // for JSON file - used in App
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
