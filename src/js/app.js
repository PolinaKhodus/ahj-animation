/* eslint-disable linebreak-style */
import WidgetsManager from './WidgetsManager';
import CollapseWidget from './CollapseWidget';
import CallbackChatWidget from './CallbackChatWidget';
import LikerWidget from './LikerWidget';

const collapseWidget = new CollapseWidget(document.querySelector('.widget-collapse'));
const callbackCahtWidget = new CallbackChatWidget(document.querySelector('.widget-callback'));
const likerWidget = new LikerWidget(document.querySelector('.widget-liker'));

const widgets = [collapseWidget, callbackCahtWidget, likerWidget];

const manager = new WidgetsManager(widgets);
manager.init();
