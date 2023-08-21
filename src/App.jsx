import HomeIcon from '@mui/icons-material/Home'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { pink } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>Trung Quan dev</div>
      <Typography variant="body" color="text.secondary">
        h1. Heading
      </Typography>
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
