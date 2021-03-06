export const Cesium3DTileContentState = {
    UNLOADED : 0,   // Has never been requested
    
    LOADING : 1,    // Is waiting on a pending request 正在等待发送请求
    
    PROCESSING : 2, // Request received.  Contents are being processed for rendering.  Depending on the content, it might make its own requests for external data.
    
    READY : 3,      // Ready to render.
    
    EXPIRED : 4,    // Is expired and will be unloaded once new content is loaded.
    
    FAILED : 5      // Request failed.
    
};
