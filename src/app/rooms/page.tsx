import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { RoomAdd } from "@/components/Modal/room/RoomAdd";
import { RoomModalProvider } from "@/components/Modal/room/RoomModalContex";
import { RoomTables } from "@/components/Tables/room/roomTables";

import { Metadata } from "next";
import { RoomModalProviderUpdate } from "../../components/Modal/room/RoomModalContexUpdate";
import { RoomUpdateModal } from "../../components/Modal/room/room-update-modal";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <RoomModalProvider>
        <RoomModalProviderUpdate>
          <Breadcrumb pageName="Rooms" />
          <RoomAdd />
          <RoomUpdateModal />
          <div className="space-y-10">
            <RoomTables />
          </div>
        </RoomModalProviderUpdate>
      </RoomModalProvider>
    </>
  );
};

export default TablesPage;
