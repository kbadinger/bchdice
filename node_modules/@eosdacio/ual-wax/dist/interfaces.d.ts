export declare const Name = "Wax";
export interface PendingRequest {
    resolve: (value?: boolean | PromiseLike<boolean>) => void;
    reject: (reason?: any) => void;
}
export interface WaxOptions {
    appName: string;
}
