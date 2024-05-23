function handleSubmission() {
    var name = document.getElementById("nama").value;
    var quantity = document.getElementById("usia").value;
    var petualangan= document.getElementById("petualangan").value;
    var tanggal = new Date(document.getElementById("tanggal").value).toLocaleDateString('id-ID');

    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${name}" readonly />
            </div>
            
            <div class="form-group">
                <label for="usia" style="width: 130px;">usia :</label>
                <input type="text" value="${quantity}" readonly />
            </div>
           <div class="form-group">
                <label for="petualangan" style="width: 130px;">petualangan : </label>
                <input type="text" value="${petualangan}" readonly />
            </div>
            <div class="form-group">
            <label for="tanggal" style="width: 130px;">Tanggal :</label>
            <input type="text" value="${tanggal}" readonly />
        </div>
        </div>`;

        // untuk membuat judul dan button
    Swal.fire({
        title: "Jadi ikut ga?",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "GASS!!",
        cancelButtonText: "Ntar Dulu",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
        // ketika melakukan konfirmasi
    }).then((result) => {
        if (result.isConfirmed) {
            var ticketData = {
                name: name,
                usia: usia,
                tanggal: tanggal,
               
            };
            console.log(ticketData);
            Swal.fire({
                title: "Lesgooo",
                text: "Perjalanan kita di mulai",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
            // ketika melakukan pembatalan
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "YAAAAAAHHH",
                text: "Nyesel Ga Ikut Loh :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
        }
    });
}
