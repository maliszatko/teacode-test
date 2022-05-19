import styled from 'styled-components'

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`

export const StyledContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 70vh;
  overflow: auto;
`
export const ContactSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
`

export const AvatarImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto 0;
`
export const NameField = styled.p`
    margin: 0;
`
export const EmailField = styled.p`
    margin: 0;
    font-size: 0.9rem; 
    color: #808080;
`
export const Input = styled.input.attrs(({ type }) => ({
    type: type || "checkbox"

}))`
  margin: auto 0;
`