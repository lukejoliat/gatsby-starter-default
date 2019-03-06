import styled, { css } from 'styled-components'
import { Search } from 'styled-icons/fa-solid/Search'
export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focussed = css`
  background: transparent;
  color: white;
  cursor: text;
  width: 10em;
  + ${SearchIcon} {
    color: white;
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  ${props => props.focussed && focussed}
  margin-left: ${props => (props.focussed ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focussed ? `1.6em` : `1em`)};
`

const expand = css`
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: 0.25s;
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const list = css`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: calc(4em + 40vw);
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid;
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
  }
`

const grid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;
    li {
      padding: 0.3em 0.5em;
    }
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  color: var(--grey);
  background: white;
  a {
    color: var(--grey);
  }
  ${props => (props.hitsAsGrid ? grid : list)};
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      padding: 0.1em 0.4em;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`
