const Section = ({ children, dark, name }) => {
  return <div className={`${name} section ${dark && 'dark'}`}>{children}</div>
}

export default Section
