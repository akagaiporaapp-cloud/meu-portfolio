// IMPORTANTE: Substitua 'SEU-USUARIO' e 'meu-portfolio' pelos valores corretos
// Exemplo: se seu usuário é 'joao' e repositório é 'galeria', fica:
// const baseURL = 'https://raw.githubusercontent.com/joao/galeria/main/images/';

const baseURL = 'https://raw.githubusercontent.com/akagaiporaapp-cloud.github.io/meu-portfolio//meu-portfolio/main/images/';

// Array de imagens
const images = [
    {
        src: baseURL + 'Mini esfiha carne.png',
        title: 'Mini esfiha carne',
        category: 'alimento'
    },
    {
        src: baseURL + 'Mini esfiha mussarela.png',
        title: 'Mini esfiha mussarela',
        category: 'alimento'
    },
    {
        src: baseURL + 'Coca 2 litros.png',
        title: 'Coca 2 litros',
        category: 'bebida'
    },
    {
        src: baseURL + 'foto4.jpg',
        title: 'Retrato Urbano',
        category: 'pessoas'
    },
    {
        src: baseURL + 'foto5.jpg',
        title: 'Praia Paradisíaca',
        category: 'natureza'
    },
    {
        src: baseURL + 'foto6.jpg',
        title: 'Arquitetura Moderna',
        category: 'cidade'
    }
];

// Elementos do DOM
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para renderizar a galeria
function renderGallery(filter = 'all') {
    gallery.innerHTML = '';
    
    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);
    
    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.transform = 'translateY(20px)';
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" data-index="${index}" onerror="this.style.border='2px solid red'; this.alt='Erro ao carregar: ${image.title}';">
            <div class="overlay">
                <h3>${image.title}</h3>
                <p>${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
            </div>
        `;
        
        gallery.appendChild(item);
        
        // Adiciona evento de clique para abrir modal
        item.querySelector('img').addEventListener('click', openModal);
    });
}

// Função para abrir o modal
function openModal(e) {
    modal.style.display = 'block';
    const img = e.target;
    modalImg.src = img.src;
    caption.textContent = img.alt;
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners para filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    });
});

// Event listener para fechar modal
closeBtn.addEventListener('click', closeModal);

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Inicializar galeria
renderGallery();const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para renderizar a galeria
function renderGallery(filter = 'all') {
    gallery.innerHTML = '';
    
    const filteredImages = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);
    
    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.transform = 'translateY(20px)';
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" data-index="${index}">
            <div class="overlay">
                <h3>${image.title}</h3>
                <p>${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
            </div>
        `;
        
        gallery.appendChild(item);
        
        // Adiciona evento de clique para abrir modal
        item.querySelector('img').addEventListener('click', openModal);
    });
}

// Função para abrir o modal
function openModal(e) {
    modal.style.display = 'block';
    const img = e.target;
    modalImg.src = img.src;
    caption.textContent = img.alt;
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners para filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove classe active de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adiciona classe active ao botão clicado
        btn.classList.add('active');
        // Renderiza galeria com filtro
        renderGallery(btn.dataset.filter);
    });
});

// Event listener para fechar modal
closeBtn.addEventListener('click', closeModal);

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Inicializar galeria
renderGallery();
