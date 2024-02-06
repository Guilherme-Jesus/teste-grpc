import { AreaServiceClient } from "./proto/AreaServiceClientPb";
import { Area, RequestAll } from "./proto/area_pb";


export const areaClient = async (id: number) => {
  const EnvoyURL = "http://localhost:8000";
  const client = new AreaServiceClient(EnvoyURL);
  const request = new RequestAll();
  request.setUser();
  const response = await client.getAllAreas(request, {});
  console.log(response);
  const div = document.getElementById("response");
  if (div) div.innerText = response.getAreasList().join(", ");
};
