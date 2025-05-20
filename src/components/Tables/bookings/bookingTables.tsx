"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBookingData, Booking } from "../fetch";
import { useBookingModalUpdate } from "@/components/Modal/booking/BookingModalContexUpdate";
export function BookingTables() {
  const [data, setData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { openModalUpdate } = useBookingModalUpdate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    getBookingData(token)
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Yakin ingin menghapus item ini?")) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found.");
          return;
        }
        const response = await fetch(
          `https://simaru.amisbudi.cloud/api/bookings/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (response.ok) {
          alert("Data berhasil dihapus.");
          window.location.reload();
        } else {
          alert("Gagal menghapus data.");
        }
      } catch (error) {
        console.error("Error saat menghapus:", error);
        alert("Terjadi kesalahan.");
      }
    }
  };

  const handleUpdate = async (id: number) => {
    console.log("Preview clicked", id);
    const booking = data.find((item) => item.id === id);
    if (booking) {
      console.log("Booking found:", booking);
      openModalUpdate(booking);
    } else {
      console.log("Booking not found");
    }
  };

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-6 py-4 sm:px-7 sm:py-5 xl:px-8.5">
        <h2 className="text-2xl font-bold text-dark dark:text-white">
          List Bookings
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="pl-5 sm:pl-6 xl:pl-7.5">No</TableHead>
            <TableHead>Booking Date</TableHead>
            <TableHead>Room Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.length > 0 ? (
            data.map((item, index) => (
              <TableRow
                key={item.id}
                className="text-base font-medium text-dark dark:text-white"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.bookingDate}</TableCell>
                <TableCell>{item.room.name}</TableCell>
                <TableCell className="flex gap-2">
                  <button
                    className="hover:text-primary"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span className="sr-only">Delete</span>
                    Delete
                  </button>

                  <button
                    className="hover:text-primary"
                    onClick={() => handleUpdate(item.id)}
                  >
                    <span className="sr-only">Update Room</span>
                    Update
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
