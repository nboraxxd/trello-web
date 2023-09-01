import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '@/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '@/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Profiles from './Menu/Profiles'

export default function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        px: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography variant="span" sx={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1' }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{
              color: 'white',
              borderColor: 'grey.100',
              '&:hover': {
                color: 'grey.200',
                borderColor: 'grey.300',
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id="outline-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            label: { color: 'white' },
            '&:hover label': { color: 'grey.300' },
            '& label.Mui-focused': { color: 'grey.400' },
            '& .MuiInputBase-root': {
              pl: '8px',
              pr: '8px',
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'grey.300' },
              '&.Mui-focused fieldset': { borderColor: 'grey.400' },
              '& .MuiSvgIcon-root': { color: 'white' },
              '&:hover .MuiSvgIcon-root': { color: 'grey.300' },
              '&.Mui-focused .MuiSvgIcon-root': { color: 'grey.400' },
            },
            '& input': { color: 'white' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" onClick={() => setSearchValue('')}>
                <CloseIcon
                  sx={{
                    opacity: !searchValue && '0',
                    visibility: !searchValue && 'hidden',
                    fontSize: '1rem',
                    cursor: 'pointer',
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: 'white', cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}
