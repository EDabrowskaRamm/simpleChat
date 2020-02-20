import styled from '@emotion/styled'

export const ChatAppRoot = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;

  @media (min-width: 768px) {
    width: 720px;
    max-height: 1800px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 122px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  letter-spacing: 1.7px;
  text-transform: capitalize;
`