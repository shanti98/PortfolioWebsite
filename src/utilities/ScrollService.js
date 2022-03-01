import { TOTAL_SCREENS } from "./CommonUtil";
import{Subject} from 'rxjs'

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe = ()=>{
        let ccontactMeScreen = document.getElementById ("Contact Me")
        if(!ccontactMeScreen) return;
        ccontactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = ()=>{
        let homeScreen = document.getElementById ("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementInView=(Elem,type)=>{
        let rec= Elem.getBoundingClient();
        let elementTop=rec.top;
        let elementBottom= rec.Bottom

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVisible = elementTop >= 0 && elementBottom <=window. innerHeight; 

        switch(type){
            case "partial":
                return partiallyVisible,
            case "complete":
                return completelyVisible
                default:
                    return false
        }


    }
    checkCurrentScreenUnderViewport =(event)=>{
        if(!event || object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;
            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible= this.isElementInView(screenFromDOM,"partial")

            if (fullyVisible || partiallyVisible){
                if 
                (partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if 
                (fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }

}