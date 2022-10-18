import React from 'react'
import { IonLabel,IonItem } from '@ionic/react'
const RecentTransactions = () => {
  return (
    <>
    <IonLabel>
            <p style={{paddingLeft:"3%"}}>Recent Transactions</p>
          </IonLabel>
          <IonItem>
            <IonLabel >
              <h3>Payment</h3>
              <p>Oct 8</p>
            </IonLabel>
            <IonLabel slot="end">
              <h3><span style={{ fontSize: "20px" }}>$60</span>.00</h3>
              <p>Amex <sup>****</sup>7890</p>
            </IonLabel>
          </IonItem>
    </>
  )
}

export default RecentTransactions