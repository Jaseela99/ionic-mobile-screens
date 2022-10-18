import React from 'react'
import {IonItem,IonLabel,IonButton} from "@ionic/react"
import { AiOutlineDollar } from "react-icons/ai";
function MakePayment() {
  return (
    <>
    <IonLabel>
      <p style={{ marginBottom: "4%" }}>My Payments</p>
      <p style={{ fontWeight: 800, color: "black" }}>
        Ziply fiber Gig Internet
      </p>
      <h3 style={{ fontWeight: 800 }}>
        <span style={{ fontSize: "40px" }}>$60</span>.00
      </h3>
      <h3>
        <AiOutlineDollar />
        AutoPay scheduled for oct 18
      </h3>
      <p style={{ color: "green" ,paddingBottom:"5%"}}>Manage AutoPay</p>
      <IonButton expand="block" color="success" shape="round" style={{fontSize:"16px"}}>
        Make a payment
      </IonButton>
    </IonLabel>
  </>
  )
}

export default MakePayment