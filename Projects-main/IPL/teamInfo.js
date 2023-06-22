let teamDetails = JSON.parse(localStorage.getItem('teamObj'));
let playerDetails = JSON.parse(localStorage.getItem('playerObj'));
let tableTeam=document.getElementById("right-div");
let productId = window.location.search.split('=')[1];
let playerDiv = document.getElementById('left-div')
//player count
let cnt=0;
for(let i=0;i<playerData.length;i++){
if(playerData[i].from == productId){
cnt++
}
}
//console.log(cnt)

// search for top batsman
let topBatsman="";
for(let i=0;i<playerData.length;i++){
  if(playerData[i].description=="Batsman"&&playerData[i].from==productId){
   topBatsman=playerData[i].playerName
   break
  }
  else{
   topBatsman="No Player"
  }
}

// search for top bowler
let topBowler="";
for(let i=0;i<playerData.length;i++){
  if(playerData[i].description=="Bowler"&&playerData[i].from==productId){
   topBowler=playerData[i].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}



//team info
teamDetails.map((item)=>{
    
    if(productId==item.teamCode){
  
   
   return tableTeam.innerHTML+=`
   <h1 id="teamName">${item.teamName}</h1>
   
   
   
  <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>

  <div class= "teamInfo">
   <table>
  
   <tr>
       <td>Player count   </td>
       <td>  ${cnt}</td>
   </tr>
  
   <tr>
       <td>Top Batsman  </td>
       <td>${ topBatsman}</td>
   </tr>
   <tr>
       <td>Top Bowler  </td>
       <td>${ topBowler}</td>
   </tr>
  
   <tr>
       <td>Won Count</td>
       <td>${item.WonCount}</td>
   </tr>
   </div>
  </table>
  
  `
  }
  
  })

//player info

for(var i=0;i<playerData.length;i++){
    if(playerData[i].from==productId){
    playerDiv.innerHTML+=`
    <a href="./playerInfo.html?t=${playerData[i].playerName}" id="playerInfo"> 
    <div class-"playerCard">
    <img src="${playerData[i].playerImg}" class="playerImage" alt=""/> 
    <div class="playerInfo">
    <p class="playerName"> ${playerDetails[i].playerName} </p>
    <p class="playerPrice"> price : ${playerDetails[i].price} </p>
    <p class="playing"> Playing Status : ${playerDetails[i].isPlaying} </p>
    <p class="role"> Role : ${playerDetails[i].description}</p>
    </div>
    </div></a>
    `
    }
}  