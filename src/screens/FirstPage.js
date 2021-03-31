import React from "react";
import "../styles/firstpage.css";

export const FirstPage = () => {
  return (
    <div class="container">
      <span class="text1">Welcome to the</span>
      <span class="text2">Entertainment</span>
      <span class="text3">Tracker</span>

      <h1 class="text4">Track all your entertainment under one site !!</h1>
      <h3 class="text5">
        {" "}
        Track each categories of where have you stopped or completed. <br></br>
        Add titles into your list by going to the Search and adding them into
        either Watch List or Completed
      </h3>
    </div>
  );
};
