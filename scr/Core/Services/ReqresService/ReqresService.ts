import type { IReqresService } from "../../API/IReqresService";
import type { ReqType } from "./ReqType";

export default class ReqresService implements IReqresService {
    private readonly protocol = `https://`;
    private readonly path = `mocky.io/v3`;

    public async send(relativePath: string, method: ReqType, data?: any): Promise<Response> {
        const isFormData = data instanceof FormData;
        try {
            const responce = await fetch(`${this.protocol}${this.path}${relativePath}`, {
                method: method,
                headers: {
                    Accept: "*/*",
                    "Content-Type": isFormData
                        ? "multipart/form-data"
                        : "application/json"
                },
                body: isFormData ? data : JSON.stringify(data)
            });
            return responce;
        } catch (error) {
            //Error handling
            console.error(error)
        };
    };

};