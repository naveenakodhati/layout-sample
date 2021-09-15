// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="main-navbar-container">
          <h1 className="navbar-title">Layout</h1>

          <div className="navbar-heading">
            <input
              className="input-checkbox"
              type="checkbox"
              checked={showContent}
              onChange={onChangeContent}
              id="content"
            />
            <label className="label-text" htmlFor="content">
              Content
            </label>
          </div>
          <div className="navbar-heading">
            <input
              className="input-checkbox"
              type="checkbox"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
              id="leftNavbar"
            />
            <label className="label-text" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="navbar-heading">
            <input
              className="input-checkbox"
              type="checkbox"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
              id="rightNavbar"
            />
            <label className="label-text" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
