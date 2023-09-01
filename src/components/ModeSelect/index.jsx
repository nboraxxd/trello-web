import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  return (
    <FormControl
      size="small"
      sx={{
        minWidth: '122px',
        ':hover label': {
          color: 'grey.200',
        },
      }}
    >
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color: 'white',
          '&.Mui-focused': {
            color: 'grey.300',
          },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        sx={{
          color: 'white',
          '.MuiSvgIcon-root': {
            color: 'white',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey.300',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey.400',
          },
        }}
        onChange={(ev) => setMode(ev.target.value)}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />
            <span>Light</span>
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessOutlinedIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
