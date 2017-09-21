import { Common } from './aliyun-oss.common';

declare var com: any;

export class AliyunOss extends Common {
    static upload(filePath: string, fileKey: string, uploadUrl: string, paramJSON: string,
         onProgress: (progress) => any,
         callback: (ret) => any): string {
        /* const getter = new com.aliyun.oss.ossdemo.STSGetter('http://121.43.180.98:8062/fileService/OSSVerify?userToken=b94e526f56674405e3f4a2c7672ed520fe6af9d40db61e34b779e4df1337e395');
        try {
            console.log('getter: ' + JSON.stringify(getter));
            const token = getter.getFederationToken();
            console.log('token: ' + JSON.stringify(token));
        } catch (e) {
            console.log('STSGetter error: ' + e);
        } */
        // const url = "http://121.43.180.98:8062/fileService/OSSVerify?userToken=04f0e8842444e208e0bef9e344456184250c66dd28c0633dba41e38fad7d549f";
        /* const cb = new HttpProc();
        cb.setCallback((res) => {
            console.log('res: ' + res);
        }); */
        const ret = com.xmapp.oss.OSSAsyncUploader.upload(filePath, fileKey, uploadUrl, paramJSON, new com.xmapp.oss.Handler(
            {
                onProgress: (progress) => {
                    if (onProgress != null)
                        onProgress(progress);
                    // console.log('onProgress: ' + progress * 100);
                },
                finished: (res) => {
                    if (callback != null) {
                        callback(res);
                    }
                    // console.log('res: ' + res);
                }
            }
        ));
        // const ret = com.xmapp.oss.OSSUploader.getUploadToken(url);
        // console.log('ret: ' + ret);
        return ret;
        // return com.xmapp.oss.OSSAsyncUploader.upload(filePath, fileKey, uploadUrl, paramJSON, callback);
    }

    static getUploadToken(url: string, callback: (ret) => any): string {
        return com.xmapp.oss.OSSAsyncUploader.getUploadToken(url, new com.xmapp.oss.Handler(
            {
                onProgress: (progress) => {
                },
                finished: (res) => {
                    if (callback != null)
                        callback(res);
                }
            }
        ));
    }
}

/* class HttpProc extends com.xmapp.oss.Handler.extend {
    cb: (ret) => any;
    setCallback(cb) {
        this.cb = cb;
    }

    callback(ret): void {
        if (this.cb) {
            this.cb(ret);
        }
    }
}
 */