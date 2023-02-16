import { API, APIResponse } from "./api";
import data from "./api-attendee-data";

export class APIAttendee extends API {
  constructor() {
    super();
  }

  async getAll(
  ): Promise<APIResponse> {
    return {
      body: data,
      status: 200,
    };

    let url = `https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await super.handleResponse(res);
  }
}
