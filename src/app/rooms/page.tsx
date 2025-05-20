import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { RoomAdd } from "@/components/Modal/room/RoomAdd";
import { RoomModalProvider } from "@/components/Modal/room/RoomModalContex";
import { RoomTables } from "@/components/Tables/room/roomTables";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <RoomModalProvider>
        <Breadcrumb pageName="Rooms" />
        <RoomAdd />
        <div className="space-y-10">
          <RoomTables />
        </div>
      </RoomModalProvider>
    </>
  );
};

export default TablesPage;
