
import './App.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {  IonApp,
  IonLabel,
  IonTabBar,
  IonTabButton, setupIonicReact } from '@ionic/react';
  import {RiHome2Line} from "react-icons/ri"
  import {TbFileDollar} from "react-icons/tb"
  import {VscAccount} from "react-icons/vsc"
  import {BiSupport} from "react-icons/bi"
  import {MdMoreHoriz} from "react-icons/md"
import Router from "./Router"
import Header from "./Components/Header"
setupIonicReact()
function App() {

  return (
    <IonApp>
      <Header/>
<Router/>
    <IonTabBar slot="bottom">
    <IonTabButton tab="home" href="/home" className='icon-color'>
      <RiHome2Line size={25} />
      <IonLabel >Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="billing" href="/billing"  className='icon-color'>
    <TbFileDollar size={25}/>
      <IonLabel>Billing</IonLabel>
    </IonTabButton>
    <IonTabButton tab="account" href="/account"  className='icon-color'>
    <VscAccount size={25}/>
      <IonLabel>Account</IonLabel>
    </IonTabButton>
    <IonTabButton tab="support" href="/support"  className='icon-color'>
    <BiSupport size={25}/>
      <IonLabel>Support</IonLabel>
    </IonTabButton>
    <IonTabButton tab="more" href="/more"  className='icon-color'>
    <MdMoreHoriz size={25}/>
      <IonLabel>More</IonLabel>
    </IonTabButton>
  </IonTabBar>
    </IonApp>
  );
}

export default App;
