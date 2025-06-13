import { postAPI } from "./api";

export async function getCitiesByZone(zone_id) {
  return await postAPI("getcitybyzonewise", { zone_id });
}
