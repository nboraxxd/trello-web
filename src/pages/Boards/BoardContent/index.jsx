import Box from '@mui/material/Box'

export default function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: 'primary.main',
      }}
    >
      Board content
    </Box>
  )
}
