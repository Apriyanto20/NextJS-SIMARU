import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { BookingTables } from "@/components/Tables/bookings/bookingTables";

import { Metadata } from "next";
import { BookingAdd } from "../../components/Modal/booking/BookingAdd";
import { BookingModalProvider } from "@/components/Modal/booking/BookingModalContex";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <BookingModalProvider>
        <Breadcrumb pageName="Bookings" />
        <BookingAdd />
        <div className="space-y-10">
          <BookingTables />
        </div>
      </BookingModalProvider>
    </>
  );
};

export default TablesPage;
