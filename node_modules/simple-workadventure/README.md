# simple-workadventure

A simplified workadveture-api with extra functions 

## installation 

install with:

```
npm install simple-workadventure
```

## setup 

paste this in your __empty__ map script:

```
/// <reference types="@workadventure/iframe-api-typings" />

import WAsimple from "simple-workadventure";

const WAs = new WAsimple()

WAs.init().then(() => {
    //your code here
})

export {};
```

## propertys

### buttons

#### close 

a simple popUp close Button:

```
WAs.buttons.close
```

## creator functions

### button creators

### createCloseButton

```
WAs.createCloseButton("label")
```
- this returns a close Button for PopUps
- __label__ can be left empty for the standard "close" - labeling but you can write somthing i there to change the label (maybe for your language)

### createLinkButton

```
WAs.createLinkButton("url","label")
```

- this returns a Link Button for a PopUp that opens the Website in a new Tab when clicked
- __url__ is the url you want to open in a new Tab
- __label__ is the text you want to be displayed on the button

### createCoWebsiteButton

```
WAs.createCoWebsiteButton("url","label")
```

- this returns a Link Button for a PopUp that opens the Website in a CoWebsite window when clicked
- __url__ is the url you want to open in the CoWebsite
- __label__ is the text you want to be displayed on the button


## functions 

### popUp

```
WAs.popUp("display","text",[]) // opens intantly
```
```
WAs.popUp("display","text",[], "area") // opens when walked over "area"-area
```

- __display__ is the area where you want your popup to be displayed 
- __text__ is the text you want to be shown
- __[]__ should be filled with ButtonDescriptors can be left empty (you can also fill it with ```WAs.buttons.close``` to add a close button or use one of the buttonCreators)
- __area__ is the area where you have to walk over so that your popup shows up this can be left undefined to open it instantly

### modal

```
WAs.modal("title","src", true) // opens intantly
```
```
WAs.modal("title","src", true, "area") // opens when walked over "area"-area
```

- __title__ is the title that shoud be displayed over the modal
- __src__ is the url that should be displayed in the modal
- __api__ is a boolean whether or not the workadveture-api should work in the modal 
- __area__ is the area where you have to walk over so that your popup shows up this can be left undefined to open it instantly

### cameraZoomButton

```
WAs.cameraZoomButton(x, y, "zoomTooltip", "playerTooltip")
```


## depricated
- popUpOnArea (use popUp instead)
- modalOnArea (use Modal instead)
- cameraEvent (use cameraZoomButton instead)


## todo 

- finish documentation
