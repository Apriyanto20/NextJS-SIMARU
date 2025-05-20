"use client";

import { useState } from "react";
import { Button } from "@/components/ui-elements/button";
import { BookingAddModal } from "@/components/Modal/booking/booking-add-modal";

export const BookingAdd = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="space-y-10">
        <Button
          label="Add Booking"
          variant="outlinePrimary"
          shape="full"
          size="small"
          className="mb-4"
          onClick={() => setShowModal(true)}
        />
      </div>
      <BookingAddModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
