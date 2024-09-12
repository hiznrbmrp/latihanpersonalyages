document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');

    // Cek apakah ada gambar tersimpan di localStorage
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        displayImage(savedImage);
    }

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                displayImage(imageData);
                // Simpan gambar ke localStorage
                localStorage.setItem('uploadedImage', imageData);
            };
            reader.readAsDataURL(file);
        }
    });

    function displayImage(imageData) {
        imagePreview.innerHTML = `<img src="${imageData}" alt="Gambar yang diunggah">`;
    }
});