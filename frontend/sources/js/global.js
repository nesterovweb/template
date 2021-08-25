App.userAgent = detect.parse(navigator.userAgent);
App.isBrowser = function(name){
    return name == App.userAgent.browser.family;
}
$('html').addClass('browser-'+App.userAgent.browser.family);
$('html').addClass('os-'+App.userAgent.os.family.split(' ')[0]);

//components
import '../components/lazy/lazy';
import '../components/header/header';
import '../components/cookie-popup/cookie-popup';
import '../components/animations/animations';

import '../components/tabs/tabs';
import '../components/pagen/pagen';
import '../components/accordion/accordion';
import '../components/popup/popup';