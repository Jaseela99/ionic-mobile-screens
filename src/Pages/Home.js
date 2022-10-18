import React from "react";
import "./Home.css";
import { IonContent, IonItem, IonList, IonLabel } from "@ionic/react";
import MakePayment from "../Components/MakePayment";
import Header from "../Components/Header";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";

const Home = () => {
  return (
    <IonContent>
      <Header name="Ziply" />
      <IonList>
        <IonItem>
          <IonLabel style={{padding:"5%"}}>
            <h1 style={{ fontWeight: 800 }}>Hi Victoria</h1>
            <h6 style={{ fontWeight: 800 }}>Friday,October 14</h6>
          </IonLabel>
        </IonItem>
        <IonItem style={{padding:"5%"}}>
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
                <MdOutlineNetworkWifi size={32} slot="start" />
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
                <MdOutlineSpeed size={30} slot="end" />
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
          <MakePayment />
        </IonItem>
        <IonItem style={{padding:"5%"}}>
          <IonLabel>
            <p>Special Offer</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "40%", paddingRight: "2%" }}>
                <p style={{ fontWeight: 800, fontSize: "15px" }}>
                  Add Ziply Fiber Voice for just $20/mo
                </p>
                <p> Lorem epsum dolor sit</p>
              </div>
              <div style={{ width: "40%", height: "2%" }}>
                <img
                  style={{ borderRadius: "4px" }}
                  alt="gray"
                  src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63641.jpg?w=2000"
                />
              </div>
            </div>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default Home;
