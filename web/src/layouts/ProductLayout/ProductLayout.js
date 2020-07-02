import { Link, routes } from '@redwoodjs/router'

const ProductLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <Link className="navlink" to={routes.home()}>
          Home
        </Link>
        <Link className="navlink" to={routes.about()}>
          About
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default ProductLayout
