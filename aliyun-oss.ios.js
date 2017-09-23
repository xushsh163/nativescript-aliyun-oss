"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aliyun_oss_common_1 = require("./aliyun-oss.common");
var AliyunOss = (function (_super) {
    __extends(AliyunOss, _super);
    function AliyunOss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AliyunOss.upload = function (filePath, fileKey, uploadUrl, paramJSON, onProgress, callback) {
        return FormDataPost.upload(filePath, fileKey, uploadUrl, paramJSON, function (pro) {
            if (onProgress != null) {
                onProgress(pro);
            }
        }, function (ret) {
            if (callback != null) {
                callback(ret);
            }
        });
    };
    AliyunOss.uploadImg = function (image, fileName, fileKey, uploadUrl, paramJSON, onProgress, callback) {
        return FormDataPost.uploadImg(image, fileName, fileKey, uploadUrl, paramJSON, function (pro) {
            if (onProgress != null) {
                onProgress(pro);
            }
        }, function (ret) {
            if (callback != null) {
                callback(ret);
            }
        });
    };
    AliyunOss.getUploadToken = function (url, callback) {
        return FormDataPost.getUploadToken(url, function (ret) {
            if (callback != null) {
                callback(ret);
            }
        });
    };
    return AliyunOss;
}(aliyun_oss_common_1.Common));
exports.AliyunOss = AliyunOss;
//# sourceMappingURL=aliyun-oss.ios.js.map