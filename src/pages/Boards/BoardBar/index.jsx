import { Box } from '@mui/material'

export default function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark',
      }}
    >
      Board Bar
    </Box>
  )
}
