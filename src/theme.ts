import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        marginTop: '8px',
        marginBottom: '8px',
      },
    },
    MuiTypography: {
      h4: {
        padding: '10px',
      },
    },
    MuiGrid: {
      container: {
        marginBottom: '30px',
      },
    },
    MuiPaper: {
      root: {
        marginTop: '20px',
        padding: '10px',
      },
    },
    MuiAppBar: {
      root: {
        padding: 0,
        margin: 0,
      },
    },
    MuiChip: {
      root: {
        marginLeft: '10px',
        height: '28px',
      },
      avatar: {
        height: '28px',
        width: '28px',
      },
    },
    MuiButton: {
      root: {
        minWidth: '60px',
        marginTop: '12px',
      },
    },
    MuiSvgIcon: {
      root: {
        width: '0.8em',
        height: '0.8em',
      },
    },
    MuiFormControl: {
      root: {
        marginTop: '20px',
      },
    },
    MuiListItem: {
      default: {
        paddingTop: '3px',
        paddingBottom: '3px',
      },
    },
    MuiTableCell: {
      root: {
        padding: '4px',
      },
    },
  },
})

export default theme
