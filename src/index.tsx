import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import style from "./App.module.scss";
import App from "./App";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import loader from "./3-dots-bounce.svg";
ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          className={style.App}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            backdropFilter: "blur(5px) brightness(0.5)",
          }}
        >
          <h1 style={{ fontSize: "5rem" }}>Alura Event Tracker</h1>
          <h2 style={{ fontSize: "3rem" }}>
            Loading{" "}
            <img style={{ scale: 2, fill: "white" }} src={loader} alt="..." />
          </h2>
        </div>
      }
    >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,

  document.getElementById("root")
);
