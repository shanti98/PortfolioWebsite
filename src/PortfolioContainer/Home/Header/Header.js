import React, { useState } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../../utilities/CommonUtil";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <spam>{screen.screen_name}</spam>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.Length - 1) classes += "header-option-seperator";
    if (selectedScreen === index) classes += "selected-header-option";

    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementByI(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
              <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>

          </div>
          <div className='header-logo'>
              <span>SHANTI</span>
          </div>
          <div className={(showHeaderOptions)? "header-options show-hamburger-options": "heaer-options"}>
              {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}
