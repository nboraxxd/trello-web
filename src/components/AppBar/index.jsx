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
import Profiles from './Menu/Profiles'

export default function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField id="outline-search" label="Search..." type="search" size="small" />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}
