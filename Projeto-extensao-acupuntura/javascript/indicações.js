/* Indicações */

const indicacoes = document.querySelectorAll('.indicacoes img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
let currentIndex = 0;

indicacoes.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

function openModal(index) {
  modal.style.display = 'block';
  modalImage.src = indicacoes[index].src;
  modalTitle.textContent = indicacoes[index].nextElementSibling.textContent;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = 'none';
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    modalImage.src = indicacoes[currentIndex].src;
    modalTitle.textContent = indicacoes[currentIndex].nextElementSibling.textContent;
  }
}

function nextImage() {
  if (currentIndex < indicacoes.length - 1) {
    currentIndex++;
    modalImage.src = indicacoes[currentIndex].src;
    modalTitle.textContent = indicacoes[currentIndex].nextElementSibling.textContent;
  }
}



