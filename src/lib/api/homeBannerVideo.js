import { postAPI } from "./api";

export async function getHomeBannerVideo() {
  return await postAPI("homebannervideo", {});
}