/*                                                                                                                                                          
                    .(                                      
                   . ##                                     
                  .  # #                                    
                 .   #  #                                   
                .    #   #                                  
               .     #   ##                                 
              .      #    ##                                
             .       #                                      
            .        #                                      
           .         #                                      
          .          #                                      
         .           #                                      
        .            #                                      
       .             #                                      
      .              #                                      
     ..              #                                      
    ..  EtherChest   #                                      
   ................. #                                      
  ,  ...             #           ### ,                      
    ,,,  ..          #       ### ,,,                        
     ,,,,,,  ..     ##   ### ,,,,,,                         
       ,,,,,,,, ... ###. ,,,,,,,,                           
        ,,,,,,,,,,, /,,,,,,,,,,,                            
          ,,,,,,,,, ,,,,,,,,,,                              
           ,,,,,,,, ,,,,,,,,                                
             ,,,,,, ,,,,,,,                                 
              ,,,,, ,,,,,                                   
                ,,, ,,,,                                    
                 ,, ,,                                      
                    , 
                   */  

import React, {Component} from "react";
import classNames from "classnames";
import {AppTopbar} from "./AppTopbar";
import {AppMenu} from "./AppMenu";
import {Route} from "react-router-dom";
import {Partners} from "./components/Partners";
import {LoginPage} from "./components/LoginPage";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import { HomePage } from "./components/HomePage";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "fullcalendar/dist/fullcalendar.css";
import "./layout/layout.css";
import "./App.scss";
import steemConnectAPI from "./service/SteemConnectAPI";
import SCCallback from "./components/SCCallback";                           
import ReactGA from 'react-ga';     
import Trending from './components/Trending';
import Inventory from "./components/Inventory";
import RegisterPage from "./components/RegisterPage";
import { FAQPage } from "./components/FAQPage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPolicy";
    
const trackingID ="UA-111263990-4"     
  
ReactGA.initialize('UA-111263990-4', {
  titleCase: false,
});      
function initializeReactGA() {  
  ReactGA.initialize(trackingID);       
  ReactGA.pageview('/login');         
}               
                  
export const StateContext = React.createContext();
ReactGA.ga('send', 'pageview', '/login'); 

class App extends Component {
  constructor() {
    const accessToken = localStorage.getItem("sc_token");

    if (accessToken) {
      steemConnectAPI.setAccessToken(accessToken);
    }
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: true,
      overlayMenuActive: true,
      mobileMenuActive: false,
      localState: {
        username: "",
        login: username =>
          this.setState(state => ({
            localState: {
              ...state.localState,
              username
            }
          })),
        steemConnectAPI,
        loginType: undefined
      }
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Ecosystem",
        items: [
          {
            label: "Trending Posts",
            to: "/trending"
          },
        ]
      },
      {
        label: "Community",
        items: [
          
          {
            label: "Hive Blog",
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://peakd.com/@etherchest', '_blank');
            }
          },
          {
            label: "Chat on Discord",
            icon: {ExitToAppIcon},
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://discord.gg/eMQpEKS', '_blank');
            }
          },
        ]
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  componentDidMount() {
    if (!this.state.localState.username && localStorage.getItem("sc_token")) {
      this.state.localState.steemConnectAPI
        .me()
        .then(res => {
          this.state.localState.login(res.name);
        })
        .catch(e => {
          console.log(e);
          localStorage.removeItem("sc_token");
        });
    }
  }

  render() {
    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });

    return (
      <StateContext.Provider value={this.state.localState}>
        <div className={wrapperClass} onClick={this.onWrapperClick}>
          <AppTopbar onToggleMenu={this.onToggleMenu} />
          <div
            ref={el => (this.sidebar = el)}
            className={sidebarClassName}
            onClick={this.onSidebarClick}
          >
            <ScrollPanel
              ref={el => (this.layoutMenuScroller = el)}
              style={{height: "120%"}}
            >
              <div className="layout-sidebar-scroll-content">
                <div className="layout-logo">
                <a href="/">
                <img
                    alt="Logo"
                    src="https://i.imgur.com/TJP9RZ0.png"
                  />
                  </a>
                  <br/>
                  <br/>
                </div>                
                <AppMenu
                  model={this.menu}
                  onMenuItemClick={this.onMenuItemClick}
                />
              </div>
            </ScrollPanel>
          </div>
          <div className="layout-main">
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/callback" component={SCCallback} />
            <Route path="/trending" component={Trending} />
            <Route path="/dashboard" component={Inventory} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/privacy" component={PrivacyPage} />
          </div>
          <div className="layout-mask"></div>
        </div> 
      </StateContext.Provider>
    );
  }
}

export default App;
