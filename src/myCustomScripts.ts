import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';
export function myCustomFunction() {
    console.log("Hello World!");
}

myCustomFunction();
provideFluentDesignSystem().register(
    fluentCard(), 
    fluentButton());