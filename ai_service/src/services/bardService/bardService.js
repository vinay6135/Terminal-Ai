import { response } from "express";
import { getBardUrl } from "../../utils/apis/api.js";
import httpClient from "../rest.js";

async function getResponse(request, count = 0) {
  const res = [];
  try {
    var httpResponse = await httpClient().post(getBardUrl(), {
      contents: [
        {
          parts: [
            {
              text: request,
            },
          ],
        },
      ],
    });
    console.log(response);
    for (let i = 0; i < httpResponse.data.candidates.length; i++) {
      let s = httpResponse.data.candidates[i].content.parts[0].text;
      s = s.replaceAll("Gemini", "Sara");
      s = s.replaceAll("Google", "Spectre");
      res.push(s);
    }
  } catch (error) {
    console.log(error);
  }

  return res;
}

export { getResponse };
