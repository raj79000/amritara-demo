import { getZoneList } from "../../../lib/api/getZoneList";
import ZoneTabs from "./ZoneTabs"

export default async function ZonesList() {
  const data = await getZoneList();

  return (
  <>
      <h1 className="text-center my-4">Explore by Zone</h1>
      <ZoneTabs zones={data?.data || []} />

      </>

  );
}
