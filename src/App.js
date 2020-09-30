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
//import {AppTopbar} from "./AppTopbar";
import {AppMenu} from "./AppMenu";
import {Route} from "react-router-dom";
import {Partners} from "./components/Partners";
import {LoginPage} from "./components/LoginPage";
import {GardenPage} from "./components/GardenPage";
import {MarketPlots} from "./components/MarketPlots";
import {Marketgems} from "./components/Marketgems";
import {MarketSupplies} from "./components/MarketSupplies";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {TwitchStreams} from './components/TwitchStreams.js';
import { BoardMemberApp } from "./components/BoardMemberApp";
import { HomePage } from "./components/HomePage";

import { MazariSharif } from "./components/gems/MazariSharif";

import Giftgem from "./components/Giftgem";
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
import UserGarden from "./components/UserGarden";
import FAQPage from "./components/FAQPage";
import Tutorial from "./components/Tutorial";
import Stats from "./components/Stats";                                  
import ReactGA from 'react-ga';     
import Trending from './components/Trending';     
    
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
        label: "Farm",
        items: [
          {
            label: "Fields",
            to: "/farm"
          },
          {
            label: "Office",
            to: "/accounting"
          },
        ]
      },
      {
        label: "Market",
        items: [
          {
            label: "Farm Plots",
            to: "/market/farmplots"
          },
          {
            label: "gems",
            to: "/market/gembank"
          },
        ]
      },
      {
        label: "Community",
        items: [
          {
            label: "Trending Posts",
            to: "/trending"
          },
          {
            label: "Twitch Streams",
            to: "/streams"
          },
          {
            label: "Curation Trail",
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://steempeak.com/@hashkings/introducing-hashkings-curation-trail', '_blank');
            }
          },
          {
            label: "Steemit Hive",
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://beta.steemit.com/trending/hive-164881', '_blank');
            }
          },
          {
            label: "Chat on Discord",
            icon: {ExitToAppIcon},
            command: () => {
              /*window.location = "https://steem-engine.com/?p=market&t=KFQ";*/
              window.open('https://discord.gg/Zq29TWe', '_blank');
            }
          },
        ]
      },
      {
        label: "Growers Association",
        to: "/growers"
      },
      {
        label: "About",
        to: "/faq"
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
    return (
      <StateContext.Provider value={this.state.localState}>       
          <div className="layout-main">
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/garden/:username" component={UserGarden} />
            <Route exact path="/farm" component={GardenPage} />
            <Route path="/market/gembank" component={Marketgems} />
            <Route path="/callback" component={SCCallback} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/trending" component={Trending} />
            <Route path="/home" component={HomePage} />
            <Route path="/markets" component={Giftgem} />
          </div>
          <div className="layout-mask"></div>
      </StateContext.Provider>
    );
  }
}

export default App;
