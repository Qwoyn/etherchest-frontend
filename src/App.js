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
import {GardenPage} from "./components/GardenPage";
import {MarketPlots} from "./components/MarketPlots";
import {Marketgems} from "./components/Marketgems";
import {MarketSupplies} from "./components/MarketSupplies";
import {ScrollPanel} from "primereact/components/scrollpanel/ScrollPanel";
import {TwitchStreams} from './components/TwitchStreams.js';
import { BoardMemberApp } from "./components/BoardMemberApp";
import { HomePage } from "./components/HomePage";

import { MazariSharif } from "./components/gems/MazariSharif";
import { PanamaRed } from "./components/gems/PanamaRed";
import { SwaziGold } from "./components/gems/SwaziGold";
import { ColombianGold } from "./components/gems/ColombianGold";
import { Malawi } from "./components/gems/Malawi";
import { Kilimanjaro } from "./components/gems/Kilimanjaro";
import { KingsBread } from "./components/gems/KingsBread";
import { AcapulcoGold } from "./components/gems/AcapulcoGold";
import { LambsBread } from "./components/gems/LambsBread";
import { HinduKush } from "./components/gems/HinduKush";
import { DurbanPoison } from "./components/gems/DurbanPoison";
import { ChocolateThai } from "./components/gems/ChocolateThai";
import { Thai } from "./components/gems/Thai";
import { Afghani } from "./components/gems/Afghani";
import { LashkarGah } from "./components/gems/LashkarGah";
import { Aceh } from "./components/gems/Aceh";
import { SteemOG } from "./components/gems/SteemOG";

import Afghanistan from './components/gems/Afghanistan';
import Africa from './components/gems/Africa';
import Jamaica from './components/gems/Jamaica';
import CentralAmerica from './components/gems/CentralAmerica';
import Asia from './components/gems/Asia';
import Mexico from './components/gems/Mexico';

import { MazariSharifpollen } from "./components/gems/MazariSharifpollen";
import { PanamaRedpollen } from "./components/gems/PanamaRedpollen";
import { SwaziGoldpollen } from "./components/gems/SwaziGoldpollen";
import { ColombianGoldpollen } from "./components/gems/ColombianGoldpollen";
import { Malawipollen } from "./components/gems/Malawipollen";
import { Kilimanjaropollen } from "./components/gems/Kilimanjaropollen";
import { KingsBreadpollen } from "./components/gems/KingsBreadpollen";
import { AcapulcoGoldpollen } from "./components/gems/AcapulcoGoldpollen";
import { LambsBreadpollen } from "./components/gems/LambsBreadpollen";
import { HinduKushpollen } from "./components/gems/HinduKushpollen";
import { DurbanPoisonpollen } from "./components/gems/DurbanPoisonpollen";
import { ChocolateThaipollen } from "./components/gems/ChocolateThaipollen";
import { Thaipollen } from "./components/gems/Thaipollen";
import { Afghanipollen } from "./components/gems/Afghanipollen";
import { LashkarGahpollen } from "./components/gems/LashkarGahpollen";
import { Acehpollen } from "./components/gems/Acehpollen";

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
                    src="/assets/layout/images/hashkingsbanner.png"
                  />
                  </a>
                  <br/>
                  <br/>
                </div>                
                <AppMenu
                  model={this.menu}
                  onMenuItemClick={this.onMenuItemClick}
                />
                <Partners />
              </div>
            </ScrollPanel>
          </div>
          <div className="layout-main">
            <Route path="/login" component={LoginPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/garden/:username" component={UserGarden} />
            <Route exact path="/farm" component={GardenPage} />
            <Route path="/market/farmplots" component={MarketPlots} />
            <Route path="/market/gembank" component={Marketgems} />
            <Route path="/callback" component={SCCallback} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/accounting" component={Stats} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/market/MarketSupplies" component={MarketSupplies} />
            <Route path="/trending" component={Trending} />
            <Route path="/streams" component={TwitchStreams} />
            <Route path="/growers" component={BoardMemberApp} />  
            <Route path="/home" component={HomePage} />
            <Route path="/markets" component={Giftgem} />

            <Route path="/gems/steem-og" component={SteemOG} />
            <Route path="/gems/afghani" component={Afghani} />
            <Route path="/gems/colombian-gold" component={ColombianGold} />
            <Route path="/gems/lashkar-gah" component={LashkarGah} />
            <Route path="/gems/chocolate-thai" component={ChocolateThai} />
            <Route path="/gems/thai" component={Thai} />
            <Route path="/gems/swazi-gold" component={SwaziGold} />
            <Route path="/gems/malawi" component={Malawi} />
            <Route path="/gems/kings-bread" component={KingsBread} />
            <Route path="/gems/kilimanjaro" component={Kilimanjaro} />
            <Route path="/gems/acapulco-gold" component={AcapulcoGold} />
            <Route path="/gems/durban-poison" component={DurbanPoison} />
            <Route path="/gems/lambs-bread" component={LambsBread} />
            <Route path="/gems/mazar-i-sharif" component={MazariSharif} />
            <Route path="/gems/hindu-kush" component={HinduKush} />
            <Route path="/gems/panama-red" component={PanamaRed} />
            <Route path="/gems/aceh" component={Aceh} />

            <Route path="/pollen/colombian-gold" component={ColombianGoldpollen} />
            <Route path="/pollen/lashkar-gah" component={LashkarGahpollen} />
            <Route path="/pollen/chocolate-thai" component={ChocolateThaipollen} />
            <Route path="/pollen/thai" component={Thaipollen} />
            <Route path="/pollen/swazi-gold" component={SwaziGoldpollen} />
            <Route path="/pollen/malawi" component={Malawipollen} />
            <Route path="/pollen/kings-bread" component={KingsBreadpollen} />
            <Route path="/pollen/kilimanjaro" component={Kilimanjaropollen} />
            <Route path="/pollen/acapulco-gold" component={AcapulcoGoldpollen} />
            <Route path="/pollen/durban-poison" component={DurbanPoisonpollen} />
            <Route path="/pollen/lambs-bread" component={LambsBreadpollen} />
            <Route path="/pollen/mazar-i-sharif" component={MazariSharifpollen} />
            <Route path="/pollen/hindu-kush" component={HinduKushpollen} />
            <Route path="/pollen/panama-red" component={PanamaRedpollen} />
            <Route path="/pollen/aceh" component={Acehpollen} />
            <Route path="/pollen/afghani" component={Afghanipollen} />

            <Route path="/plots/Afghanistan" component={Afghanistan} />
            <Route path="/plots/Africa" component={Africa} />
            <Route path="/plots/Asia" component={Asia} />
            <Route path="/plots/Central-America" component={CentralAmerica} />
            <Route path="/plots/Jamaica" component={Jamaica} />
            <Route path="/plots/Mexico" component={Mexico} />
          </div>
          <div className="layout-mask"></div>
        </div> 
      </StateContext.Provider>
    );
  }
}

export default App;
