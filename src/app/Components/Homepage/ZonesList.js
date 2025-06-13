import { getZoneList } from "../../../lib/api/getZoneList"
import ZoneTabs from "./ZoneTabs"

export default async function ZonesList() {
  const data = await getZoneList();

  return (
    <>
    <section className="section-padding zonewise-city-sec">
      <div className="container">
        <h3 className="global-heading text-uppercase text-center">Discover</h3>
        <ZoneTabs zones={data?.data || []} />
      </div>
        
    </section>
      
    </>
  );
}
