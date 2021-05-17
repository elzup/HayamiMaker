import { Button } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

import theme from '../theme'

export const CardContainer = styled.div`
  border: solid #ddd 1px;
  border-radius: 5px;
  /* min-width: 100px; */
  width: 100%;
  padding: 5px;
  margin-left: 5px;
`

export const ModalCard = styled.div`
  background: white;
  width: 600px;
  height: 90vh;
  position: absolute;
  left: calc((100% - 600px) / 2);
  top: 5vh;
  outline: none;
  overflow: scroll;
  padding: 12px;
  ${theme.breakpoints.down('xs')} {
    width: 100%;
    height: 96vh;
    top: 2vh;
    left: 0;
  }
`

const PageWrapper = styled.div`
  padding: 12px;
`

export const Page: React.SFC = props => (
  <PageWrapper>{props.children}</PageWrapper>
)

export const ButtonGrid = styled.div`
  display: grid;
  gap: 8px;
  justify-content: flex-end;
  grid-template-columns: max-content max-content max-content;
`

export const ButtonGridCol = styled.div`
  display: grid;
  grid-template-columns: max-content;
`

export const BackButton = styled(Button)`
  && {
    min-width: 123px;
  }
`
