type ResponseData = {
    success: boolean
    data: any
    reason: string
}

type HttpMethod = (
    url: string,
    params: object,
) => Promise<ResponseData>

type HttpRequest = (
    path: string,
    params?: object,
) => Promise<[string, ResponseData]>
