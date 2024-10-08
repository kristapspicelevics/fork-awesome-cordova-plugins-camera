import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface CameraOptions {
    /** Picture quality in range 0-100. Default is 50 */
    quality?: number;
    /**
     * Choose the format of the return value.
     * Defined in Camera.DestinationType. Default is FILE_URI.
     *      DATA_URL : 0,   Return image as base64-encoded string (DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible),
     *      FILE_URI : 1,   Return image file URI,
     *      NATIVE_URI : 2  Return image native URI
     *          (e.g., assets-library:// on iOS or content:// on Android)
     */
    destinationType?: number;
    /**
     * Set the source of the picture.
     * Defined in Camera.PictureSourceType. Default is CAMERA.
     *      PHOTOLIBRARY : 0,
     *      CAMERA : 1,
     *      SAVEDPHOTOALBUM : 2
     */
    sourceType?: number;
    /** Allow simple editing of image before selection. */
    allowEdit?: boolean;
    /**
     * Choose the returned image file's encoding.
     * Defined in Camera.EncodingType. Default is JPEG
     *      JPEG : 0    Return JPEG encoded image
     *      PNG : 1     Return PNG encoded image
     */
    encodingType?: number;
    /**
     * Width in pixels to scale image. Must be used with targetHeight.
     * Aspect ratio remains constant.
     */
    targetWidth?: number;
    /**
     * Height in pixels to scale image. Must be used with targetWidth.
     * Aspect ratio remains constant.
     */
    targetHeight?: number;
    /**
     * Set the type of media to select from. Only works when PictureSourceType
     * is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType
     *      PICTURE: 0      allow selection of still pictures only. DEFAULT.
     *          Will return format specified via DestinationType
     *      VIDEO: 1        allow selection of video only, WILL ALWAYS RETURN FILE_URI
     *      ALLMEDIA : 2    allow selection from all media types
     */
    mediaType?: number;
    /** Rotate the image to correct for the orientation of the device during capture. */
    correctOrientation?: boolean;
    /** Save the image to the photo album on the device after capture. */
    saveToPhotoAlbum?: boolean;
    /**
     * Choose the camera to use (front- or back-facing).
     * Defined in Camera.Direction. Default is BACK.
     *      BACK: 0
     *      FRONT: 1
     */
    cameraDirection?: number;
    /** iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions. */
    popoverOptions?: CameraPopoverOptions;
}
/**
 * iOS-only parameters that specify the anchor element location and arrow direction
 * of the popover when selecting images from an iPad's library or album.
 */
export interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection
     * Matches iOS UIPopoverArrowDirection constants.
     *      ARROW_UP : 1,
     *      ARROW_DOWN : 2,
     *      ARROW_LEFT : 4,
     *      ARROW_RIGHT : 8,
     *      ARROW_ANY : 15
     */
    arrowDir: number;
}
export declare enum DestinationType {
    DATA_URL = 0,
    FILE_URL = 1,
    NATIVE_URI = 2
}
export declare enum EncodingType {
    JPEG = 0,
    PNG = 1
}
export declare enum MediaType {
    PICTURE = 0,
    VIDEO = 1,
    ALLMEDIA = 2
}
export declare enum PictureSourceType {
    PHOTOLIBRARY = 0,
    CAMERA = 1,
    SAVEDPHOTOALBUM = 2
}
export declare enum PopoverArrowDirection {
    ARROW_UP = 1,
    ARROW_DOWN = 2,
    ARROW_LEFT = 3,
    ARROW_RIGHT = 4,
    ARROW_ANY = 5
}
export declare enum Direction {
    BACK = 0,
    FRONT = 1
}
/**
 * @name Camera
 * @premier camera
 * @description
 * Take a photo or capture video.
 *
 * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * [Warning] Since IOS 10 the camera requires permissions to be placed in your config.xml add
 * ```xml
 * <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 *   <string>You can take photos</string>
 * </config-file>
 * ```
 * inside of the `<platform name='ios>` section
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.FILE_URI,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64 (DATA_URL):
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
export declare class Camera extends AwesomeCordovaNativePlugin {
    /**
     * Constant for possible destination types
     */
    DestinationType: {
        /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
        DATA_URL: number;
        /** Return file uri (content://media/external/images/media/2 for Android) */
        FILE_URI: number;
        /** Return native uri (eg. asset-library://... for iOS) */
        NATIVE_URI: number;
    };
    /**
     * Convenience constant
     */
    EncodingType: {
        /** Return JPEG encoded image */
        JPEG: number;
        /** Return PNG encoded image */
        PNG: number;
    };
    /**
     * Convenience constant
     */
    MediaType: {
        /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
        PICTURE: number;
        /** Allow selection of video only, ONLY RETURNS URL */
        VIDEO: number;
        /** Allow selection from all media types */
        ALLMEDIA: number;
    };
    /**
     * Convenience constant
     */
    PictureSourceType: {
        /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
        PHOTOLIBRARY: number;
        /** Take picture from camera */
        CAMERA: number;
        /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
        SAVEDPHOTOALBUM: number;
    };
    /**
     * Convenience constant
     */
    PopoverArrowDirection: {
        ARROW_UP: number;
        ARROW_DOWN: number;
        ARROW_LEFT: number;
        ARROW_RIGHT: number;
        ARROW_ANY: number;
    };
    /**
     * Convenience constant
     */
    Direction: {
        /** Use the back-facing camera */
        BACK: number;
        /** Use the front-facing camera */
        FRONT: number;
    };
    /**
     * Take a picture or video, or load one from the library.
     *
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    getPicture(options?: CameraOptions): Promise<any>;
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     *
     * @returns {Promise<any>}
     */
    cleanup(): Promise<any>;

    /**
     * Check if we have read permission
     *
     * @returns {Promise<boolean>}
     */

    hasPermission(): Promise<boolean>;

    /**
     * Requests camera permission
     *
     * @returns {Promise<any>}
     */

    requestPermission(): Promise<any>;
}
