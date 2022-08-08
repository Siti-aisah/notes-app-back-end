// Memuat kode konfigurasi routing server seperti menentukan path, method dan handler yang digunakan

// Todo 7 = Membuat variabel routes sebagai array object

// Todo 17 = Import fungsi addNoteHandler
// Todo 23 = melakukan import getAllNotesHandler
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    // Isi fungsi kosong dulu, karena handler dibuat pada file terpisah
    // Todo 16 = tambahkan fungsi handler, dari file noteHandler.js
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  // Todo 21 = menambahkan konfigurasi route untuk R.R GET agar data yang di isi client dapat tampil di web
  {
    method: "GET",
    path: "/notes",
    // Todo 24 = masukkan fungsi dari handler untuk menampilkan data client ke dalam website tampilan
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  // Todo 25 = menambahkan method dan path agar menampilkan catatan/data client lebih spesifik kedalam web.
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },

  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
