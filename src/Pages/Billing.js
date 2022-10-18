import React from "react";
import { IonContent, IonItem, IonList } from "@ionic/react";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import {RiBillLine} from "react-icons/ri"
import Header from "../Components/Header";
import MakePayment from "../Components/MakePayment";
import RecentTransactions from "../Components/RecentTransactions";

const Billing = () => {
  return (
    <IonContent>
      <Header name="Billing" />
      <IonList>
        <div style={{ padding: "4%" }}>
          <MakePayment />
        </div>
        <IonItem>
          <HiOutlineNewspaper size={30} />
          <p>Current bill</p>
          <BsChevronRight slot="end" />
        </IonItem>
        <IonItem>
          <RiBillLine size={30} />
          <p>Billing History</p>
          <BsChevronRight slot="end" />
        </IonItem>
        <hr/>
      </IonList>
      <IonList style={{padding:"2%"}}>
          <RecentTransactions />
    
      </IonList>
    </IonContent>
  );
};

export default Billing;