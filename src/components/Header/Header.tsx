import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="sticky" color="transparent" enableColorOnDark>
      <Container maxWidth="md" disableGutters>
        <Toolbar>
          <Link to={'/'}>Logo</Link>
          <Tabs value={0}>
            <Tab label="Home"></Tab>
            <Tab label="About Us"></Tab>
            <Tab label="Services"></Tab>
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
