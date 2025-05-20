import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { BookingTables } from "@/components/Tables/bookings/bookingTables";

import { Metadata } from "next";
import { BookingAdd } from "../../components/Modal/booking/BookingAdd";
import { BookingModalProvider } from "@/components/Modal/booking/BookingModalContex";
import { BookingModalProviderUpdate } from "../../components/Modal/booking/BookingModalContexUpdate";
import { BookingUpdateModal } from "../../components/Modal/booking/booking-update-modal";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <BookingModalProvider>
        <BookingModalProviderUpdate>
          <Breadcrumb pageName="Bookings" />
          <BookingAdd />
          <BookingUpdateModal />
          <div className="space-y-10">
            <BookingTables />
          </div>
        </BookingModalProviderUpdate>
      </BookingModalProvider>
    </>
  );
};

export default TablesPage;
