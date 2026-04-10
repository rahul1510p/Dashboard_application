import { useState } from "react";
import Pagination from "./Pagination";
import "./Table.css";

export default function Table({ data }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  // 🔍 Search filter (by name)
  const filteredData = data.filter((item) =>
    `user ${item.user_id}`.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="tableContainer">

      {/* 🔍 Search Bar */}
      <div className="tableTop">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset page on search
          }}
        />
      </div>

      {/* 📊 Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Service Name</th>
            <th>Date</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No matching data
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
              <tr key={index}>
                <td>User {item.user_id}</td>
                <td>{item.service_name}</td>
                <td>{item.date}</td>
                <td>${item.profit}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 📌 Showing entries */}
      <p className="entries">
        Showing {filteredData.length === 0 ? 0 : startIndex + 1} to{" "}
        {Math.min(startIndex + rowsPerPage, filteredData.length)} of{" "}
        {filteredData.length} entries
      </p>

      {/* 🔢 Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}