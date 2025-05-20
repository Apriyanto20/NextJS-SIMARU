"use client";

import { useState } from "react";
import { Button } from "@/components/ui-elements/button";
import { RoomAddModal } from "@/components/Modal/room/room-add-modal";

export const RoomAdd = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="space-y-10">
        <Button
          label="Add Room"
          variant="outlinePrimary"
          shape="full"
          size="small"
          className="mb-4"
          onClick={() => setShowModal(true)}
        />
      </div>
      <RoomAddModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
