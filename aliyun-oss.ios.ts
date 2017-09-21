import { Common } from './aliyun-oss.common';

declare var FormDataPost: any;

export class AliyunOss extends Common {
        static upload(filePath: string, fileKey: string, uploadUrl: string, paramJSON: string,
            onProgress: (progress) => any,
            callback: (ret) => any): string {
                // console.log('FormDataPost: ' + uploadUrl);
                return FormDataPost.upload(filePath, fileKey, uploadUrl, paramJSON, (pro) => {
                    // console.log('onProgress: ' + pro * 100 + '%');
                    if (onProgress != null) {
                        onProgress(pro);
                    }
                }, (ret) => {
                    if (callback != null) {
                        callback(ret);
                    }
                });
        }
        static uploadImg(image: any, fileName: string, fileKey: string, uploadUrl: string, paramJSON: string,
            onProgress: (progress) => any,
            callback: (ret) => any): string {
                // console.log('FormDataPost: ' + uploadUrl + ';image: ' + image + 'fileName: ' + fileName);
                return FormDataPost.uploadImg(image, fileName, fileKey, uploadUrl, paramJSON, (pro) => {
                    // console.log('onProgress: ' + pro * 100 + '%');
                    if (onProgress != null) {
                        onProgress(pro);
                    }
                }, (ret) => {
                    // console.log('upload: ' + ret);
                    if (callback != null) {
                        callback(ret);
                    }
                });
        }
        static getUploadToken(url: string, callback: (ret) => any): string {
            return FormDataPost.getUploadToken(url, (ret) => {
                // console.log('getUploadToken2: ' + ret);
                if (callback != null) {
                    callback(ret);
                }
            });
        }
}
