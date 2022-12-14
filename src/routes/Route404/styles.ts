import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    background: 'transparent',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
    },
  },
}))

export default Styles
