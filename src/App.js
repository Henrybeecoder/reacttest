import React, { useState } from "react";
import Artist from './artist'
import requests from './requests'
import Banner from './banner'
import CommentForm from './commentform'

function App() {
 
  return (
    <div>
    <Banner />
    <Artist title = "Chocolate city artistes" fetchUrl={requests.users} />
    <Artist title = "Chocolate city Albums" fetchUrl = {requests.albumPhotos} isLowRow/>
     <Artist fetchUrl= {requests.albums}  />    
 
      <CommentForm/>
    </div>
  );


}

export default App;
