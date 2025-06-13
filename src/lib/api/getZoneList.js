import { postAPI } from "./api";

export async function getZoneList() {
  return await postAPI("zonelist", {});
}
