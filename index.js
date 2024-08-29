var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);

    function CameraOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    CameraOriginal.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": 'reverse' }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return cordova(this, "cleanup", {"platforms": ['iOS']}, arguments); };
    CameraOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {"sync": true }, arguments); };
    CameraOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = 'navigator.camera';
    CameraOriginal.repo = 'https://github.com/apache/cordova-plugin-camera';
    CameraOriginal.platforms = ['Android', 'Browser', 'iOS', 'Windows'];
    return CameraOriginal;
}(AwesomeCordovaNativePlugin));
var Camera = new CameraOriginal();
export { Camera };