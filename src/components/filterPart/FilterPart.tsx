import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

import { categories } from '../../lib/constants';
import ExportPart from '../exportPart/ExportPart';

const FilterPart = ({
  data,
  fileName,
  handleFilter,
}: {
  data: TableDataProps[];
  fileName: string;
  handleFilter: { handleFilter: (data: TableDataProps[]) => void };
}) => {
  const [initialData, setInitialData] = useState(data);
  const [InputValues, setInputValues] = useState({
    barcode: '',
    supplier_article: '',
    size: '',
    item: '',
  });

  const handleProductSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(initialData);

    let filteredData = initialData.filter(
      (item) =>
        (InputValues.barcode !== ''
          ? item.barcode.includes(InputValues.barcode)
          : item.barcode) &&
        (InputValues.supplier_article !== ''
          ? item.supplier_article.includes(InputValues.supplier_article)
          : item.supplier_article) &&
        (InputValues.size !== ''
          ? item.size.toLowerCase().includes(InputValues.size.toLowerCase())
          : item.size) &&
        (InputValues.item !== ''
          ? item.item.toLowerCase().includes(InputValues.item.toLowerCase())
          : item.item)
    );
    console.log(filteredData);
    //@ts-ignore
    handleFilter(filteredData);
  };

  return (
    <form onSubmit={handleProductSearch}>
      {/* Inputs */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#ffffff',
            p: '5px 10px',
            borderRadius: 4,
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>Баркод</Typography>
          <Input
            disableUnderline={true}
            autoFocus
            placeholder="564324213432099"
            fullWidth
            sx={{
              width: '160px',
              bgcolor: 'secondary.main',
              borderRadius: 5,
              p: '10px 15px',
              fontSize: '14px',
            }}
            value={InputValues.barcode}
            onChange={(e) =>
              setInputValues({ ...InputValues, barcode: e.target.value })
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#ffffff',
            p: '5px 10px',
            borderRadius: 4,
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>Артикул</Typography>
          <Input
            disableUnderline={true}
            autoFocus
            placeholder="джЖСинМом0823"
            fullWidth
            sx={{
              width: '160px',
              bgcolor: 'secondary.main',
              borderRadius: 5,
              p: '10px 15px',
              fontSize: '14px',
            }}
            value={InputValues.supplier_article}
            onChange={(e) =>
              setInputValues({
                ...InputValues,
                supplier_article: e.target.value,
              })
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: '#ffffff',
            p: '5px 10px',
            borderRadius: 4,
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>Размер</Typography>
          <Input
            disableUnderline={true}
            autoFocus
            placeholder="44"
            fullWidth
            sx={{
              width: '50px',
              bgcolor: 'secondary.main',
              borderRadius: 5,
              p: '10px 15px',
              fontSize: '14px',
            }}
            value={InputValues.size}
            onChange={(e) =>
              setInputValues({ ...InputValues, size: e.target.value })
            }
          />
        </Box>
        <FormControl>
          <Select
            value={InputValues.item}
            onChange={(e) =>
              setInputValues({ ...InputValues, item: e.target.value })
            }
            MenuProps={{
              PaperProps: { sx: { maxHeight: 300 } },
            }}
            sx={{
              bgcolor: '#ffffff',
              borderRadius: '17px',
              boxShadow: 'none',
              width: 200,
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  border: 0,
                },
              '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: 0,
                },
            }}
          >
            {categories
              .sort((a: any, b: any) => a.value - b.value)
              .map((item: { id: number; value: string; label: string }) => (
                <MenuItem key={item?.id} value={item?.value}>
                  {item?.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      {/* Buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
        <Button
          type="submit"
          sx={{
            color: 'primary.contrastText',
            bgcolor: '#287eff',
            borderRadius: 4,
            fontSize: '8px',
            fontWeight: 'bold',
            px: '10px',
            height: '33px',
          }}
        >
          сформировать
        </Button>
        <ExportPart data={data} fileName={fileName} />
      </Box>
    </form>
  );
};

export default FilterPart;
