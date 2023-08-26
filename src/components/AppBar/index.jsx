import Box from '@mui/material/Box'
import ModeSelect from '@/components/ModeSelect/index'

export default function AppBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.light',
      }}
    >
      <ModeSelect />
    </Box>
  )
}
