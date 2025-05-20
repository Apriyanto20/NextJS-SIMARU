"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRoomsData, Room } from "../fetch"; // Pastikan fungsi dan tipe ini tersedia
export function RoomTables() {
  const [data, setData] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    getRoomsData(token)
      .then((res) => {
        setData(res);
        console.log(token);
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
          `https://simaru.amisbudi.cloud/api/rooms/${id}`,
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

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-6 py-4 sm:px-7 sm:py-5 xl:px-8.5">
        <h2 className="text-2xl font-bold text-dark dark:text-white">
          List Rooms
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-t text-base [&>th]:h-auto [&>th]:py-3 sm:[&>th]:py-4.5">
            <TableHead className="pl-5 sm:pl-6 xl:pl-7.5">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category ID</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.length > 0 ? (
            data.map((item, index) => (
              <TableRow
                className="text-base font-medium text-dark dark:text-white"
                key={item.id}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.categoryId}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <button
                    className="hover:text-primary"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span className="sr-only">Delete</span>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
