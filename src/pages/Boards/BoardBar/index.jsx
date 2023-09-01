import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  px: '8px',
  border: 'none',
  borderRadius: '4px',
  bgcolor: 'transparent',
  color: 'white',
  '&:hover': {
    bgcolor: 'primary.50',
  },
  '& .MuiSvgIcon-root': {
    ml: 0,
    color: 'white',
  },
  '& .MuiChip-label': {
    pr: 0,
  },
}

export default function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        px: 2,
        // borderBottom: '1px solid #00bfa5',
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}
    >
      {/* Left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip icon={<DashboardIcon />} label="TrungQuanDev MERN Stack Board" clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDriveIcon />} label="Add To Google Drive" clickable sx={MENU_STYLES} />
        <Chip icon={<BoltIcon />} label="Automation" clickable sx={MENU_STYLES} />
        <Chip icon={<FilterListIcon />} label="Filter" clickable sx={MENU_STYLES} />
      </Box>
      {/* End Left */}

      {/* Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            ':hover': {
              borderColor: 'grey.300',
            },
          }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
            },
          }}
        >
          <Tooltip title="Trung Quan Dev">
            <Avatar
              alt="Trung Quan Dev"
              src="https://trungquandev.com/wp-content/uploads/2023/08/transparent-main-avatar-circle-min-trungquandev-codetq@3x-Large.jpeg"
            />
          </Tooltip>
          <Tooltip title="Helena">
            <Avatar
              alt="Helena"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            />
          </Tooltip>
          <Tooltip title="Velma">
            <Avatar
              alt="Velma"
              src="https://images.unsplash.com/photo-1509836594056-5313a3270079?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e01ec4478bd6316b187d30eed63be1aa"
            />
          </Tooltip>
          <Tooltip title="Aoife">
            <Avatar
              alt="Aoife"
              src="https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ca8c652b62b1f14c9c4c969289a8b33c"
            />
          </Tooltip>
          <Tooltip title="Lucie">
            <Avatar
              alt="Lucie"
              src="https://images.pexels.com/photos/235516/pexels-photo-235516.jpeg?h=350&auto=compress&cs=tinysrgb"
            />
          </Tooltip>
          <Tooltip title="Harris">
            <Avatar
              alt="Harris"
              src="https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350&auto=compress&cs=tinysrgb"
            />
          </Tooltip>
          <Tooltip title="Angie">
            <Avatar alt="Angie" src="https://randomuser.me/api/portraits/women/55.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
      {/* End Right */}
    </Box>
  )
}
