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


    /**
     * Dialogue code for entrance.tmj
     */

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

  /**
     * Dialogue code for courtroom.tmj
     */
    //panel 2
    let wayFinderDialogue: Popup;
    // Open the popup when we enter a given zone
    WA.room.onEnterLayer("triggerWayfinder").subscribe(() => {
        wayFinderDialogue = WA.ui.openPopup(
            "panel2", 
            '<- Stadt im Mittelalter \n Sexismus -> ',
            []
        );
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("triggerWayfinder").subscribe(() => {
        wayFinderDialogue.close();
    })
    
    //panel 1
    let triggerpanel1: Popup;
    WA.room.onEnterLayer("triggerPanel1").subscribe(() => {
        triggerpanel1 = WA.ui.openPopup(
            "panel1",
            '<- Panel 1',
            []
        );
    });
     // Close the popup when we leave the zone.
     WA.room.onLeaveLayer("triggerPanel1").subscribe(() => {
        triggerpanel1.close();
    })

    //panel 4
    let triggerpanel4: Popup;
    WA.room.onEnterLayer("triggerPanel4").subscribe(() => {
        triggerpanel4 = WA.ui.openPopup(
            "panel4",
            'Panel 4 ->',
            []
        )
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("triggerPanel4").subscribe(() => {
        triggerpanel4.close();
    })
    
    //panel 3
    let triggerpanel3: Popup;
    WA.room.onEnterLayer("triggerPanel3").subscribe(() => {
        triggerpanel3 = WA.ui.openPopup(
            "panel3",
            '<- Handel im Mittelalter \n Kampf im Mittelalter ->',
            []
        )
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("triggerPanel3").subscribe(() => {
        triggerpanel3.close();
    })

        

    /**
         * Dialogue code for corridor.tmj
         */
    let corridorDialogue: Popup;
    // Open the popup when we enter a given zone
    WA.room.onEnterLayer("dialogueEntering").subscribe(() => {
        corridorDialogue = WA.ui.openPopup(
            "corridor", 
            'uh...sollte ich hier sein? \n Wohin führt diese Treppe da hinten nur?',
            []
        );
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("dialogueEntering").subscribe(() => {
        corridorDialogue.close();
    })
      

  /**
     * Dialogue code for dungeon.tmj
     */
    let dungeonDialogue: Popup;
    // Open the popup when we enter a given zone
    WA.room.onEnterLayer("dialogueEscape").subscribe(() => {
        dungeonDialogue = WA.ui.openPopup(
            "dungeonPopUp", 
            'Oh nee! Wo bin ich denn hier gelandet? \n Und wie komme ich hier wieder raus? \n Da vorne ist ein Licht...',
            []
        );
    });
    // Close the popup when we leave the zone.
    WA.room.onLeaveLayer("dialogueEscape").subscribe(() => {
        dungeonDialogue.close();
    })
    

}).catch(e => console.error(e));


function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
