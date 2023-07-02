import { StandardLuminance, baseLayerLuminance, bodyFont , typeRampPlus4FontSize} from '@fluentui/web-components';


export function ThemeComponents(){

    // Set theme and configure the button
    const button = document.getElementById("clickMe");
    let lumLight = true;
    baseLayerLuminance.setValueFor(button!, StandardLuminance.LightMode);
    var bodies = document.getElementsByName("body");
    var font = bodyFont.getValueFor(bodies[0]);

  // bodyFont.setValueFor(button! , typeRampPlus4FontSize);

    button?.addEventListener("click", () => { 
        console.log("Hello World!");
        baseLayerLuminance.setValueFor(button!, lumLight === true ? StandardLuminance.DarkMode : StandardLuminance.LightMode);
        lumLight = !lumLight;
    });

    const card = document.getElementById("myCard");
    bodyFont.setValueFor(card!, "Segoe UI");

}

ThemeComponents();