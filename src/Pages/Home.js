import React from "react";
import "./Home.css";
import {
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
const Home = () => {
  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel className="item">
            <h1 style={{ fontWeight: 800 }}>Hi Victoria</h1>
            <h6 style={{ fontWeight: 800 }}>Friday,October 14</h6>
          </IonLabel>
        </IonItem>
        <IonItem>
          <div
            style={{
              display: "flex",
              paddingBottom: "5%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  borderRadius: "50px",
                  backgroundColor: "green",
                  margin: "2%",
                  padding: "10px",
                  color: "white",
                }}
              >
                <MdOutlineNetworkWifi size={32} />
              </div>
              <IonLabel>
                <p>Network Status</p>
                <h2 style={{ fontWeight: 800 }}>Excellent</h2>
                <p style={{ color: "green" }}>Troubleshoot</p>
              </IonLabel>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  borderRadius: "50px",
                  backgroundColor: "lightgrey",
                  margin: "2%",
                  padding: "10px",
                  color: "grey",
                }}
              >
                <MdOutlineSpeed size={30} />
              </div>
              <IonLabel>
                <p>Last Speed Test</p>
                <h2 style={{ fontWeight: 800 }}>
                  850 <small>mbps</small>
                </h2>
                <p style={{ color: "green" }}>Test Again</p>
              </IonLabel>
            </div>
          </div>
        </IonItem>
        <IonItem>
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
            <p style={{ color: "green" }}>Manage AutoPay</p>
            <IonButton expand="block" color="success" shape="round">
              Make a payment
            </IonButton>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <p>Special Offer</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "40%" ,paddingRight:"2%"}}>
                <p style={{ fontWeight: 800,fontSize:"15px" }}>
                  Add Ziply Fiber Voice for just $20/mo
                </p>
                <p> Lorem epsum dolor sit</p>
              </div>
              <div style={{width: "40%", height: "2%" }}>
                <img  style={{borderRadius: "4px"}} src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63641.jpg?w=2000" />
              </div>
            </div>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default Home;
