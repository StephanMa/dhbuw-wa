/// <reference types="@workadventure/iframe-api-typings" />
console.log('Scripting API ready');

//import { ActionMessage } from "@workadventure/iframe-api-typings";
import { Popup } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


// default
let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    //display time
    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)



    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));


    // Welcome-Popup
    let helloWorldPopup: Popup;
    // Open the popup when we enter a given zone
    WA.room.onEnterLayer("triggerPopUp").subscribe(() => {
        //console.log("onEnter callback is running");
        helloWorldPopup = WA.ui.openPopup(
            "testPopUp", 
            'Willkommen zur Studierendenkonferenz\n Mittelalterimaginationen spielen \n Treten Sie über die Zugbrücke in den Konferenzraum ein',
            []
        );
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("triggerPopUp").subscribe(() => {
        helloWorldPopup.close();
    })

    // Nelke
    let nelkenwurz: Popup;
    // Open the popup when we enter a given zone
    WA.room.onEnterLayer("popupNelke").subscribe(() => {
        //console.log("onEnter callback is running");
        nelkenwurz = WA.ui.openPopup(
            "nelkenwurz", 
            'Hm...Nelkenwurz...',
            []
        );
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("popupNelke").subscribe(() => {
        nelkenwurz.close();
    })

  // Pilz
  let pilz: Popup;
  // Open the popup when we enter a given zone
  WA.room.onEnterLayer("popupPilz").subscribe(() => {
      //console.log("onEnter callback is running");
      pilz = WA.ui.openPopup(
          "pilz", 
          'Hm...\n ein Pilz...',
          []
      );
  });
  // Close the popup when we leave the zone.
  WA.room.onLeaveLayer("popupPilz").subscribe(() => {
      pilz.close();
  })

  // Apfel
  let apfel: Popup;
  // Open the popup when we enter a given zone
  WA.room.onEnterLayer("popupApfel").subscribe(() => {
      //console.log("onEnter callback is running");
      apfel = WA.ui.openPopup(
          "apfel", 
          'crunch...munch...slurp...',
          []
      );
  });
  // Close the popup when we leave the zone.
  WA.room.onLeaveLayer("popupApfel").subscribe(() => {
      apfel.close();
  })
    

}).catch(e => console.error(e));


function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
