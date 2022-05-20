import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Link,
  Stack,
  Button,
  Fab
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { Container } from '@mui/system'
import { useState } from 'react'

const Header = () => {
  const [tab, selectTab] = useState(0)
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    selectTab(newValue)
  }
  return (
    <AppBar position="sticky" color="transparent" enableColorOnDark>
      <Container maxWidth="xl" disableGutters>
        <Toolbar style={{ 'justifyContent': 'space-between' }}>
          <Link href={'/'} underline="none">
            Logo
          </Link>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="Home"></Tab>
            <Tab label="About Us"></Tab>
            <Tab label="Services"></Tab>
          </Tabs>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Fab size="small">
              <Brightness4Icon />
            </Fab>
            <Button variant="outlined">Get in touch</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
