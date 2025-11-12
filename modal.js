// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '오페라의 유령 대구 공연 리플렛',
    image: 'img/portfolio/p1.jpg',
    description: '오페라의 유령의 차분하고 화려한 무대를 생각하여 블랙과 골드를 바탕으로 디자인하게되었습니다. '
  },
  project2: {
    title: '달서구본리종합 복지관 사보',
    image: 'img/portfolio/s2.jpg',
    description: '더불어 함께를 강조하는 지역 복지관의 이미지를 바탕을 배경으로 디자인 하게되었습니다.'
  },
  project3: {
    title: '다온솔떠블경 오페라글라스 상세페이지',
    image: 'img/portfolio/p3.jpg',
    description: ' 공연을 자주보는 소비자층에게 익숙한 오페라글라스의 상세페이지 디자인입니다 .'
  },
  project4: {
    title: '더마리아스 아시아투어 포스터',
    image: 'img/portfolio/Frame 13.jpg',
    description: '공연 포스터 디자인으로 해당 밴드가 선보이는 이미지를 중심으로 디자인하였습니다.'
  },
  project5: {
    title: '라식할인 카드 뉴스',
    image: 'img/portfolio/s5.jpg',
    description: '학생을 타깃으로한 카드뉴스 디자인입니다. '
  },
  project6: {
    title: '초콜릿 패키지 디자인',
    image: 'img/portfolio/p6.jpg',
    description: '모리나가사의 제과의 피노제품의 기존 디자인을 생각하며 리디자인하였습니다.'
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