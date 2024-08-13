# [Photo Sphere Viewer](https://photo-sphere-viewer.js.org/) with webcam support.  

Use the Insta360 X4 as a webcam with the Photo Sphere Viewer. 

This repo modifies the [Equirectangular Video example](https://photo-sphere-viewer.js.org/guide/adapters/equirectangular-video.html#example) to add access to Webcam or Desktop live video.  

## Modified Pages
2 files are modified.  The Equirectangular adapter and Video Plug-in are needed to complete this mod.   

1. The *psv_live.html* file adds a request to [Get User Media](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) and adds a Video Element to the page body.  

2. The *node_modules/@photo-sphere-viewer/equirectangular-video-adapter/index.module.js* file 

``` javascript
return this.__videoLoadPromise(video).then(() => {

      //swap video with User Media (Camera or Desktop Capture)
      video = document.getElementById("camera");
     
     
      const texture = new VideoTexture(video);
      return { panorama, texture };
```
