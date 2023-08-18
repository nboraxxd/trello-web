import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'
import HomeIcon from '@mui/icons-material/Home'
import TabIndicator from '@mui/material/Tabs'

function App() {
  return (
    <>
      <h1>Trung Quan dev</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
        <HomeIcon sx={{ color: pink[500] }} />
      </Box>
    </>
  )
}

export default App
