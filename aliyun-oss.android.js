"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aliyun_oss_common_1 = require("./aliyun-oss.common");
var AliyunOss = (function (_super) {
    __extends(AliyunOss, _super);
    function AliyunOss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AliyunOss.upload = function (filePath, fileKey, uploadUrl, paramJSON, onProgress, callback) {
        var ret = com.xmapp.oss.OSSAsyncUploader.upload(filePath, fileKey, uploadUrl, paramJSON, new com.xmapp.oss.Handler({
            onProgress: function (progress) {
                if (onProgress != null)
                    onProgress(progress);
            },
            finished: function (res) {
                if (callback != null) {
                    callback(res);
                }
            }
        }));
        return ret;
    };
    AliyunOss.getUploadToken = function (url, callback) {
        return com.xmapp.oss.OSSAsyncUploader.getUploadToken(url, new com.xmapp.oss.Handler({
            onProgress: function (progress) {
            },
            finished: function (res) {
                if (callback != null)
                    callback(res);
            }
        }));
    };
    return AliyunOss;
}(aliyun_oss_common_1.Common));
exports.AliyunOss = AliyunOss;
//# sourceMappingURL=aliyun-oss.android.js.map