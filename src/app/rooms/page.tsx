
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { RoomTables } from "@/components/Tables/room/roomTables";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tables",
};

const TablesPage = () => {
    return (
        <>
            <Breadcrumb pageName="Rooms" />

            <div className="space-y-10">
                <RoomTables />
            </div>
        </>
    );
};

export default TablesPage;
