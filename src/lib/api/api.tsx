export type APIResponse = {
  status: number
  body: any
}

export class API {
  async handleResponse(res: Response) {
    const json = await res.json()

    // Handle common errorss
    if (res.status > 299) {
      throw new Error(JSON.stringify(json))
    }

    return { status: res.status, body: json }
  }

  handleResponseOk(json) {
    return <></>
  }
}
