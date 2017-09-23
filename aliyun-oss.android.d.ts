import { Common } from './aliyun-oss.common';
export declare class AliyunOss extends Common {
    static upload(filePath: string, fileKey: string, uploadUrl: string, paramJSON: string, onProgress: (progress) => any, callback: (ret) => any): string;
    static getUploadToken(url: string, callback: (ret) => any): string;
}
