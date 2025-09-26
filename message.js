const form = document.getElementById("messageForm");
const tableBody = document.querySelector("#messageTable tbody");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // cegah halaman reload

  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tgl").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  // Buat baris baru
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${nama}</td>
    <td>${new Date(tgl).toLocaleDateString("id-ID", {year:'numeric', month:'long', day:'numeric'})}</td>
    <td>${gender}</td>
    <td>${pesan}</td>
    <td><a href="#">Klik Disini</a></td>
    <td>
      <button class="trash-btn">❌</button>
    </td>
  `;

  // Tambah baris ke tabel
  tableBody.appendChild(newRow);

  // Tombol delete
  newRow.querySelector(".trash-btn").addEventListener("click", () => {
    newRow.remove();
  });

  // Reset form
  form.reset();
});
