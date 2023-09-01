import Box from '@mui/material/Box'

export default function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
      }}
    >
      Board content
    </Box>
  )
}
