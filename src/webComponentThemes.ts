import { StandardLuminance, baseLayerLuminance} from '@fluentui/web-components';


export function ThemeComponents(){

    // Set theme and configure the button
    const button = document.getElementById("clickMe");
    baseLayerLuminance.setValueFor(button!, StandardLuminance.LightMode);
    button?.addEventListener("click", () => { 
        console.log("Hello World!");
    });
}

ThemeComponents();