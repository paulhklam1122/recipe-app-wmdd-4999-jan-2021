import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Form = props => {
  const classes = getStyles()
  const { onInputChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        label='Secret Ingredients'
        name='recipeName'
        className={classes.textField}
        onChange={e => onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
      />
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
