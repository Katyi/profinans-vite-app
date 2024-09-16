import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const data = [
  { icon: <SettingsIcon />, label: 'Настройки' },
  { icon: <EditNoteIcon />, label: 'Внесение данных' },
  { icon: <SummarizeIcon />, label: 'Отчеты' },
  { icon: <LibraryBooksIcon />, label: 'База знаний' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 10,
    paddingRight: 10,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 0,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
  '& .MuiListItemText-root': {
    marginLeft: 16,
  },
});

export default function SideBar() {
  return (
    <Box>
      {/* 1 PART */}
      <Box
        sx={{
          bgcolor: 'primary.dark',
          p: 2,
          mb: 1,
          borderRadius: 4,
          border: 'none',
          boxShadow: 2,
        }}
      >
        <FireNav
          component="nav"
          disablePadding
          sx={{ bgcolor: 'primary.dark' }}
        >
          <ListItem component="div" disablePadding>
            <ListItemButton
              sx={{
                height: 56,
                display: 'flex',
                gap: 6,
              }}
            >
              <ListItemText
                primary="ФИН Контроль"
                primaryTypographyProps={{
                  color: 'primary.contrastText',
                  fontWeight: 'medium',
                  variant: 'body2',
                }}
              />
              <Button
                endIcon={<CloseIcon sx={{ width: '12px' }} />}
                sx={{
                  bgcolor: 'secondary.dark',
                  color: '#556080',
                  fontSize: '8px',
                  padding: '1px 0px',
                  gap: '3px',
                }}
              >
                Menu
              </Button>
            </ListItemButton>
          </ListItem>
          <Box>
            {data.map((item) => (
              <ListItemButton
                key={item.label}
                sx={{
                  py: 0,
                  minHeight: 56,
                  color: 'primary.contrastText',
                  bgcolor: 'secondary.dark',
                  // bgcolor: 'red',
                  mb: 1,
                  borderRadius: 2,
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'medium',
                  }}
                />
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {<ArrowDropDownIcon sx={{ color: '#556080' }} />}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </Box>
        </FireNav>
      </Box>

      {/* 2 PART */}
      <Box
        sx={{
          bgcolor: 'primary.dark',
          p: 3,
          mb: 2,
          borderRadius: 4,
          border: 'none',
          boxShadow: 2,
        }}
      >
        <Typography
          component={'p'}
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'primary.contrastText',
          }}
        >
          Техническая поддержка
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Box sx={{}}>
            <Typography sx={{ color: '#556080', fontSize: '10px' }}>
              Номер поддержки
            </Typography>
            <Typography
              sx={{ color: 'primary.contrastText', fontSize: '12px' }}
            >
              8 (999) 999 99 99
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#556080', fontSize: '10px' }}>
              Почта поддержки
            </Typography>
            <Typography
              sx={{ color: 'primary.contrastText', fontSize: '12px' }}
            >
              pf1@werthesest.ru
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ color: '#556080', fontSize: '10px' }}>
            Часы работы
          </Typography>
          <Typography sx={{ color: 'primary.contrastText', fontSize: '12px' }}>
            Пн - Пт с 9:00 до 19:00 мск
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography sx={{ color: '#556080', fontSize: '10px' }}>
            Пользовательское соглашение
          </Typography>
          <Divider sx={{ borderColor: '#556080', mt: 1 }} />
          <Typography sx={{ color: '#556080', fontSize: '10px', mt: 1 }}>
            Политика конфиденциальности
          </Typography>
          <Divider sx={{ borderColor: '#556080', mt: 1 }} />
          <Typography sx={{ color: '#556080', fontSize: '10px', mt: 1 }}>
            Юридическая информация
          </Typography>
          <Divider sx={{ borderColor: '#556080', mt: 1 }} />
          <Typography sx={{ color: '#556080', fontSize: '10px', mt: 1 }}>
            Публичная оферта
          </Typography>
        </Box>
      </Box>

      {/* BLUE BUTTON */}
      <Button
        startIcon={<ChatBubbleIcon />}
        sx={{
          bgcolor: '#287eff',
          color: 'primary.contrastText',
          width: '21vw',
          height: 60,
          fontSize: '12px',
          fontWeight: 900,
          borderRadius: 4,
          boxShadow: 2,
        }}
      >
        Связаться с нами
      </Button>
    </Box>
  );
}
