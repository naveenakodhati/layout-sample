// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar-container">
              <h1 className="left-nav-head">Left Navbar Menu</h1>
              <div className="left-navbar-row-styling">
                <ul className="ul-container">
                  <li className="left-nav-para">Item 1</li>
                  <li className="left-nav-para">Item 2</li>
                  <li className="left-nav-para">Item 3</li>
                  <li className="left-nav-para">Item 4</li>
                </ul>
              </div>
            </div>
          )}
          {showContent && (
            <div className="content-navbar-container">
              <h1 className="left-nav-head">Content</h1>
              <p className="content-nav-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore manga aliqua. Ut
                enim ad mimim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar-container">
              <h1 className="left-nav-head">Right Navbar</h1>
              <div className="right-navbar-row-styling">
                <p className="right-nav-para">Ad 1</p>
                <p className="right-nav-para">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
