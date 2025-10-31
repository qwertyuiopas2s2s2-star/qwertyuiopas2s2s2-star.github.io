// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'Edit Design Project 1',
    image: 'img/portfolio/Frame 11.jpg',
    description: '이 프로젝트는 오페라의 유령의 차분하고 화려한 무대를 생각하여 블랙과 골드를 바탕으로 디자인하게되었습니다. '
  },
  project2: {
    title: 'Edit Design Project 2',
    image: 'img/portfolio/Frame 14.jpg',
    description: '더불어 함께를 강조하는 지역 복지관의 이미지를 바탕으로 명도높은 파스텔 색을 배경으로 디자인 하게되었습니다.'
  },
  project3: {
    title: '오페라글라스 디자인',
    image: 'img/portfolio/Frame 10.png',
    description: ' 공연을 자주보는 소비자층에게 익숙한 오페라글라스의 상세페이지 디자인입니다 .'
  },
  project4: {
    title: '공연 포스터 디자인',
    image: 'img/portfolio/Frame 13.jpg',
    description: '공연 포스터 디자인으로 해당 밴드가 선보이는 이미지를 중심으로 디자인하였습니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/portfolio/logo1.png',
    description: '모던하고 세련된 로고 디자인으로 브랜드 가치를 높였습니다.'
  },
  project6: {
    title: '초콜릿 패키지 디자인',
    image: 'img/portfolio/logo1.png',
    description: '모리나가 제과의 피노제품.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});