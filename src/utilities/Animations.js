export default class Animations{
    static Animations = new Animations();

    fadeInScreen = (screen_name)=>{
        let screen=document.getElementById(screen_name);
        if(!screen_name || !screen)
        return

        screen.style.opacity="5";
        Screen.style.transform="translateY(1px)" 
    }
}