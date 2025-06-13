import { getZoneList } from "../../../lib/api/getZoneList";
import ZoneTabs from "../Components/Homepage/ZoneTabs"

export default async function ZonesList() {
  const data = await getZoneList();

  return (
    <main>
      <h1 className="text-center my-4">Explore by Zone</h1>
      <ZoneTabs zones={data?.data || []} />
    </main>
  );
}
