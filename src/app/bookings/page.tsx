
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { BookingTables } from "@/components/Tables/bookings/bookingTables";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tables",
};

const TablesPage = () => {
    return (
        <>
            <Breadcrumb pageName="Bookings" />

            <div className="space-y-10">
                <BookingTables />
            </div>
        </>
    );
};

export default TablesPage;
