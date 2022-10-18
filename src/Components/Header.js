import { IonHeader, IonTitle, IonToolbar, IonButton } from "@ionic/react";
import { MdOutlineNotifications } from "react-icons/md";

const Header = ({ name }) => {
  return (
    <IonHeader>
      <IonToolbar color="light">
        <IonTitle style={{ fontSize: "25px" }}>{name}</IonTitle>

        <IonButton slot="end" color="white">
          <MdOutlineNotifications size={30} />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
