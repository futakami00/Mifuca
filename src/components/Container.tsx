import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  max-width: 50rem;
  width: auto;
  position: relative;
  margin: 2rem auto 3rem;
  padding: 0 1.25rem;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
