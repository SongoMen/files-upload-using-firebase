import React, { Component } from 'react';
import * as firebase from 'firebase';

import './Panel.css';
import settings from '../images/settings.png';
import notification from '../images/notification-bell.png';
import downArrow from '../images/down-arrow.png'


class Panel extends Component {

  constructor(){
    super()
    this.state = {
      profileTab:false,
      monitorTab:"section-monitor",
      cloudTab:"section-cloud",
      userTab:"section-user",
      monitorSpan:"monitor",
      cloudSpan:"cloud",
      userSpan:"user",
      notificationTab:false
    }

    this.showProfileTab = this.showProfileTab.bind(this);
    this.showNotificationTab = this.showNotificationTab.bind(this);
  }

  showProfileTab(){
    this.setState({
      profileTab:true,
    })
    if(this.state.profileTab === true){
      this.setState({
        profileTab:false
      })
    }
    console.log(this.state.profileTab)
  }

  showNotificationTab(){
    this.setState({
      notificationTab:true,
    })
    if(this.state.notificationTab === true){
      this.setState({
        notificationTab:false
      })
    }
  }

  componentDidMount(){
    if(window.location.href === "http://localhost:3000/Dashboard" || window.location.href === "http://localhost:3000/dashboard"){
      this.setState({
        monitorTab: "section__monitor section__icon--active",
        cloudTab:"section__cloud",
        userTab:"section__user",
        monitorSpan:"section__monitorSpan section__span--active",
        cloudSpan:"section__cloudSpan",
        userSpan:"section__userSpan",
      })
    }
    else if(window.location.href === "http://localhost:3000/cloud" || window.location.href === "http://localhost:3000/Cloud"){
      this.setState({
        monitorTab: "asideMenu__monitor",
        cloudTab:"asideMenu__cloud section__icon--active",
        userTab:"asideMenu__user",
        monitorSpan:"section__monitorSpan",
        cloudSpan:"section__cloudSpan section__span--active",
        userSpan:"section__userSpan",
      })
    }
    else{
      this.setState({
        monitorTab: "section__monitor",
        cloudTab:"section__cloud",
        userTab:"section__user section__icon--active",
        monitorSpan:"section__monitorSpan",
        cloudSpan:"section__cloudSpan",
        userSpan:"section__userSpan section__span--active",
      })
    }
  }

  /*<p onClick = {() => {
    logout()
  }}>Logout</p>*/

  render() {
    const showProfileTab = this.state.profileTab;
    var user = firebase.auth().currentUser.displayName;
    return (
      <div className="nav">
        <nav className="nav__bar">
          <ul className="nav__menu">
            <li className="nav__icon1"><img src={notification} alt="notification"
            onClick={this.showNotificationTab}/></li>
            <li className="nav__icon"><img src={settings} alt="settings" className="settings__icon"/></li>
            <li>{user}</li>
            <li><img src={downArrow} alt="downArrow" className="nav__icon2" 
            onClick={this.showProfileTab}/></li>
          </ul>
          {showProfileTab ? (
              <div className="nav__wrapper">
              </div>
          ) : (
            <div></div>
          )}
          </nav>
          <div className="content">
            <aside>
              <a href="/dashboard">
                <svg className={this.state.monitorTab} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 511.999 511.999">
                  <defs> 
                    <linearGradient id="lgrad" x1="52%" y1="0%" x2="48%" y2="100%" > 
                      <stop offset="0%" style={{stopColor:'rgb(255,32,32)', stopOpacity:1}} />
                      <stop offset="99%" style={{stopColor:'rgb(255,74,38)',stopOpacity:1 }}/>
                      <stop offset="100%" style={{stopColor:'rgb(255,74,38)',stopOpacity:1}} />
                    </linearGradient> 
                  </defs>
                  <g>
                    <path d="M481.091,27.937H30.909C13.866,27.937,0,41.803,0,58.846v310.819c0,17.043,13.866,30.909,30.909,30.909h154.26v22.49    c0,20.617-16.774,37.391-37.391,37.391h-33.997c-6.518,0-11.803,5.284-11.803,11.803c0,6.519,5.285,11.803,11.803,11.803h284.436    c6.518,0,11.803-5.284,11.803-11.803c0-6.519-5.285-11.803-11.803-11.803h-33.998c-20.617,0-37.391-16.774-37.391-37.391v-22.489    h154.26c17.043,0,30.91-13.866,30.91-30.909V58.846C512,41.803,498.134,27.937,481.091,27.937z M195.92,460.457    c8.046-10.336,12.857-23.308,12.857-37.391v-22.49h94.447v22.49c0,14.083,4.811,27.056,12.857,37.391H195.92z M488.394,369.666    c0,4.027-3.276,7.304-7.304,7.304H30.909c-4.027,0-7.304-3.276-7.304-7.304v-62.033h464.789V369.666z M488.394,284.026H23.606    V58.846c0-4.027,3.276-7.304,7.304-7.304h450.18c4.027,0,7.305,3.276,7.305,7.304V284.026z"/>
                  </g>
                  <g>
                    <circle cx="256.003" cy="342.305" r="12.738" />
                  </g>
                    <path  d="M276.238,109.254c-4.61-4.609-12.081-4.609-16.693,0l-83.414,83.414c-4.609,4.609-4.609,12.083,0,16.693    c2.306,2.305,5.325,3.457,8.347,3.457c3.022,0,6.041-1.152,8.346-3.457l83.414-83.414    C280.847,121.338,280.847,113.864,276.238,109.254z" />
                  <g>
                    <path d="M325.678,157.593c-4.608-4.609-12.079-4.609-16.692-0.001l-33.23,33.228c-4.609,4.61-4.609,12.084,0,16.693    c2.305,2.305,5.325,3.457,8.346,3.457c3.02,0,6.041-1.152,8.346-3.457l33.23-33.228    C330.287,169.676,330.287,162.202,325.678,157.593z" />
                  </g>
                </svg>
              </a>
              <span className={this.state.monitorSpan}></span>
              <a href="/cloud">
                <svg className={this.state.cloudTab} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-1 14l.58-3h-2.496l3.916-5-.912 3h2.828l-3.916 5z"/>
                </svg>
              </a>
              <span className={this.state.cloudSpan}></span>
              <svg className={this.state.userTab} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 294.812 294.812" xmlSpace="preserve" >
                <path d="M251.654,43.164c-57.479-57.48-151.006-57.48-208.485,0C23.002,63.331,9.207,88.667,3.274,116.434  c-5.776,27.037-3.884,55.049,5.471,81.006c1.124,3.117,4.563,4.733,7.679,3.61c3.118-1.124,4.734-4.562,3.61-7.679  c-8.595-23.849-10.333-49.586-5.025-74.431c5.447-25.496,18.119-48.766,36.645-67.292c52.801-52.801,138.714-52.801,191.515,0  c25.145,25.146,39.221,58.571,39.634,94.12c0.413,35.484-12.811,69.176-37.234,94.868c-0.289,0.304-0.575,0.61-0.861,0.916  c-0.506,0.541-1.011,1.083-1.539,1.611c-52.801,52.801-138.714,52.801-191.515,0c-0.281-0.281-0.555-0.567-0.826-0.853  c-0.014-0.554-0.026-1.1-0.026-1.638c0-1.208,0.023-2.411,0.067-3.61c0.015-0.401,0.045-0.798,0.065-1.198  c0.039-0.797,0.076-1.594,0.134-2.387c0.035-0.473,0.086-0.941,0.128-1.412c0.063-0.715,0.122-1.43,0.2-2.141  c0.055-0.502,0.127-1,0.19-1.5c0.085-0.675,0.166-1.352,0.266-2.024c0.076-0.512,0.166-1.019,0.25-1.528  c0.107-0.655,0.211-1.31,0.332-1.961c0.095-0.515,0.204-1.025,0.308-1.537c0.129-0.639,0.256-1.279,0.398-1.914  c0.115-0.515,0.243-1.027,0.366-1.539c0.15-0.625,0.299-1.25,0.461-1.87c0.135-0.514,0.281-1.024,0.423-1.535  c0.171-0.612,0.341-1.225,0.524-1.833c0.153-0.51,0.317-1.016,0.479-1.522c0.192-0.601,0.384-1.203,0.587-1.799  c0.172-0.503,0.352-1.003,0.532-1.503c0.213-0.592,0.427-1.184,0.651-1.772c0.19-0.497,0.387-0.989,0.585-1.482  c0.233-0.581,0.468-1.162,0.712-1.738c0.208-0.49,0.422-0.976,0.638-1.462c0.253-0.571,0.509-1.14,0.773-1.705  c0.225-0.481,0.455-0.959,0.688-1.436c0.274-0.561,0.551-1.121,0.835-1.676c0.241-0.47,0.486-0.938,0.735-1.404  c0.294-0.552,0.593-1.102,0.898-1.649c0.257-0.46,0.517-0.918,0.781-1.373c0.314-0.541,0.633-1.079,0.958-1.615  c0.273-0.45,0.549-0.898,0.829-1.344c0.334-0.53,0.673-1.057,1.017-1.58c0.288-0.439,0.578-0.876,0.873-1.31  c0.353-0.52,0.714-1.034,1.078-1.547c0.303-0.427,0.606-0.853,0.916-1.274c0.373-0.508,0.754-1.011,1.137-1.511  c0.317-0.414,0.633-0.828,0.957-1.237c0.393-0.497,0.795-0.988,1.198-1.477c0.329-0.4,0.658-0.8,0.994-1.195  c0.414-0.486,0.837-0.965,1.261-1.443c0.342-0.386,0.682-0.773,1.03-1.153c0.434-0.474,0.877-0.939,1.321-1.404  c0.354-0.372,0.706-0.745,1.066-1.112c0.455-0.462,0.92-0.914,1.384-1.368c0.364-0.355,0.725-0.714,1.095-1.064  c0.478-0.452,0.967-0.893,1.454-1.335c0.372-0.337,0.739-0.678,1.116-1.01c0.503-0.443,1.019-0.873,1.532-1.306  c0.376-0.317,0.748-0.639,1.129-0.951c0.531-0.434,1.075-0.855,1.617-1.279c0.378-0.295,0.75-0.597,1.132-0.887  c0.571-0.433,1.154-0.851,1.736-1.271c0.367-0.266,0.727-0.538,1.099-0.799c0.642-0.451,1.299-0.886,1.954-1.323  c0.323-0.215,0.639-0.438,0.964-0.65c0.854-0.555,1.723-1.092,2.598-1.622c0.136-0.082,0.268-0.17,0.405-0.252  c1.012-0.606,2.038-1.194,3.076-1.766c0.355-0.195,0.72-0.378,1.079-0.569c0.689-0.368,1.376-0.739,2.077-1.091  c0.449-0.226,0.909-0.438,1.362-0.657c0.572-0.277,1.142-0.557,1.721-0.824c10.875,10.388,25.382,16.269,40.44,16.269  c15.058,0,29.566-5.882,40.441-16.271c21.229,9.825,38.604,27.454,48.037,48.892c1.334,3.032,4.873,4.411,7.908,3.076  c3.033-1.335,4.41-4.876,3.075-7.908c-10.318-23.45-28.281-42.189-51.018-53.501c6.597-9.677,10.166-21.104,10.166-32.896  c0-32.317-26.292-58.609-58.609-58.609c-3.313,0-6,2.687-6,6s2.687,6,6,6c25.701,0,46.609,20.909,46.609,46.609  c0,11.492-4.271,22.558-12.025,31.157c-0.001,0.001-0.002,0.002-0.003,0.003c-8.854,9.818-21.458,15.449-34.582,15.449  s-25.729-5.631-34.582-15.449c-0.001-0.002-0.003-0.003-0.005-0.004c-7.753-8.602-12.023-19.665-12.023-31.155  c0-12.544,4.911-24.312,13.829-33.134c2.356-2.331,2.376-6.13,0.045-8.485c-2.33-2.357-6.129-2.375-8.485-0.046  C94.978,80.023,88.802,94.82,88.802,110.594c0,11.78,3.56,23.199,10.146,32.871c-0.059,0.029-0.116,0.061-0.174,0.091  c-0.468,0.234-0.925,0.482-1.389,0.721c-0.711,0.368-1.424,0.734-2.125,1.117c-0.496,0.27-0.981,0.554-1.472,0.831  c-0.655,0.371-1.311,0.74-1.957,1.123c-0.501,0.298-0.994,0.606-1.49,0.911c-0.62,0.382-1.24,0.763-1.851,1.156  c-0.499,0.321-0.989,0.651-1.482,0.979c-0.593,0.395-1.185,0.792-1.769,1.198c-0.491,0.342-0.976,0.691-1.461,1.04  c-0.57,0.411-1.138,0.824-1.699,1.245c-0.481,0.361-0.956,0.727-1.43,1.095c-0.55,0.427-1.096,0.857-1.636,1.294  c-0.468,0.378-0.932,0.761-1.394,1.146c-0.531,0.444-1.058,0.893-1.58,1.347c-0.453,0.393-0.903,0.789-1.349,1.19  c-0.515,0.463-1.023,0.931-1.528,1.403c-0.436,0.407-0.871,0.815-1.301,1.23c-0.499,0.482-0.99,0.971-1.48,1.462  c-0.418,0.419-0.836,0.837-1.246,1.262c-0.485,0.503-0.961,1.015-1.436,1.527c-0.397,0.428-0.797,0.854-1.187,1.289  c-0.475,0.528-0.937,1.067-1.401,1.604c-0.373,0.432-0.749,0.86-1.115,1.297c-0.471,0.563-0.927,1.137-1.386,1.709  c-0.341,0.426-0.689,0.846-1.024,1.277c-0.482,0.62-0.948,1.252-1.416,1.882c-0.294,0.396-0.596,0.785-0.884,1.185  c-0.592,0.82-1.165,1.652-1.733,2.488c-0.149,0.22-0.307,0.434-0.455,0.655c-0.707,1.056-1.394,2.124-2.063,3.204  c-0.231,0.373-0.448,0.754-0.674,1.129c-0.433,0.719-0.868,1.437-1.285,2.166c-0.26,0.455-0.506,0.918-0.759,1.377  c-0.365,0.66-0.732,1.318-1.082,1.986c-0.26,0.495-0.506,0.996-0.759,1.495c-0.326,0.644-0.653,1.287-0.966,1.938  c-0.249,0.518-0.486,1.042-0.727,1.563c-0.296,0.643-0.593,1.285-0.877,1.934c-0.234,0.535-0.458,1.075-0.683,1.614  c-0.271,0.647-0.54,1.294-0.798,1.946c-0.217,0.548-0.425,1.099-0.633,1.65c-0.246,0.654-0.489,1.309-0.723,1.968  c-0.198,0.559-0.39,1.121-0.58,1.684c-0.223,0.661-0.44,1.324-0.65,1.991c-0.179,0.567-0.352,1.136-0.522,1.706  c-0.2,0.673-0.393,1.348-0.58,2.026c-0.158,0.572-0.313,1.145-0.462,1.721c-0.177,0.685-0.345,1.373-0.509,2.063  c-0.137,0.576-0.273,1.151-0.4,1.729c-0.154,0.699-0.297,1.402-0.437,2.106c-0.115,0.576-0.232,1.152-0.338,1.731  c-0.131,0.718-0.249,1.44-0.366,2.163c-0.092,0.57-0.189,1.139-0.272,1.711c-0.109,0.746-0.201,1.496-0.295,2.246  c-0.069,0.556-0.145,1.111-0.206,1.669c-0.086,0.786-0.152,1.577-0.221,2.368c-0.046,0.527-0.101,1.052-0.139,1.582  c-0.064,0.883-0.106,1.77-0.149,2.658c-0.021,0.441-0.054,0.879-0.07,1.321c-0.048,1.332-0.075,2.669-0.075,4.011  c0,1.449,0.049,2.819,0.108,4.332c0.014,0.35,0.063,0.69,0.133,1.022c0.006,0.026,0.009,0.052,0.015,0.078  c0.074,0.327,0.178,0.641,0.303,0.945c0.012,0.03,0.023,0.06,0.036,0.09c0.129,0.3,0.283,0.586,0.457,0.858  c0.022,0.034,0.043,0.068,0.065,0.101c0.179,0.267,0.378,0.518,0.595,0.752c0.016,0.017,0.027,0.038,0.043,0.055l0.792,0.843  c0.598,0.64,1.196,1.278,1.82,1.901c28.74,28.74,66.491,43.11,104.243,43.11s75.503-14.37,104.243-43.11  c0.624-0.623,1.222-1.262,1.82-1.901l0.792-0.843c26.589-27.971,40.985-64.647,40.536-103.275  C294.352,106.928,279.028,70.538,251.654,43.164z" />
              </svg>
              <span className={this.state.userSpan}></span>
            </aside>
          {this.props.content}
        </div>
      </div>
    );
  }
}
export default Panel;
