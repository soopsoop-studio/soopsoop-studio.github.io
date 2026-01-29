# 🌿 SoopSoop Studio

독립 창작자 숲숲의 디지털 가든 웹사이트

## 📁 파일 구조

```
soopsoop-studio/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트 (그래니 스퀘어 테마)
├── script.js           # 인터랙션 및 애니메이션
├── images/             # 이미지 폴더 (생성 필요)
│   └── granny-square/  # 코바늘 작품 사진들
└── README.md           # 이 파일
```

## 🎨 디자인 컨셉

**그래니 스퀘어 (Granny Square) 코바늘 패턴을 웹 디자인에 적용**

- 각 콘텐츠 섹션이 그래니 스퀘어 타일처럼 배치
- 코바늘 실 색상 팔레트 (테라코타, 올리브, 머스타드, 라벤더 등)
- 이중 테두리로 코바늘 레이어 효과 구현
- 천 질감 텍스처 오버레이
- 실 패턴 구분선

## 🖼️ 이미지 추가 방법

### 1. 그래니 스퀘어 작품 사진 준비
- 정사각형 비율 권장 (1:1 또는 4:3)
- 고해상도 (최소 800x800px)
- 밝고 깨끗한 배경

### 2. images 폴더 생성 및 업로드
```bash
mkdir images
mkdir images/granny-square
```

### 3. HTML에서 이미지 placeholder 교체
```html
<!-- 기존 -->
<div class="update-image-placeholder">
    <div class="placeholder-text">그래니 스퀘어<br/>작품 사진</div>
</div>

<!-- 변경 후 -->
<div class="update-image-placeholder">
    <img src="images/granny-square/blanket-01.jpg" alt="그래니 스퀘어 블랭킷">
</div>
```

### 4. CSS 추가 (이미지용)
```css
.update-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 🎨 색상 커스터마이징

`style.css`의 `:root` 섹션에서 색상 변경:

```css
:root {
    --cream: #FFF8E7;        /* 배경색 */
    --terracotta: #D97652;   /* 주요 강조색 */
    --olive: #8B9556;        /* 보조색 1 */
    --mustard: #E8B44C;      /* 보조색 2 */
    --lavender: #B8A5D1;     /* 보조색 3 */
    /* ... */
}
```

실제 코바늘 작품의 색상을 추출해서 사용하면 더욱 통일감 있는 디자인!

## ⚙️ 기능

### 스크롤 애니메이션
- 각 요소가 화면에 나타날 때 페이드인 효과
- `data-aos` 속성으로 애니메이션 지연 시간 조절 가능

### 호버 효과
- 그래니 스퀘어 타일: 위로 떠오르며 살짝 회전
- 이미지 카드: 확대 및 테두리 색상 변경
- 푸터 링크: 언더라인 애니메이션

### 반응형 디자인
- 모바일, 태블릿, 데스크톱 모두 지원
- 768px 이하에서 1단 그리드로 변경

## 📝 콘텐츠 추가 방법

### 새로운 그래니 스퀘어 타일 추가

```html
<div class="granny-square YOUR-COLOR-CLASS" data-aos="fade-up" data-aos-delay="600">
    <div class="square-content">
        <div class="square-icon">🎯</div>
        <h3>새 프로젝트</h3>
        <p>프로젝트 설명</p>
        <a href="#new" class="square-link">보기 →</a>
    </div>
    <div class="square-border"></div>
</div>
```

### 색상 클래스 추가 (CSS)

```css
.granny-square.YOUR-COLOR-CLASS {
    background: linear-gradient(135deg, #색상1 0%, #색상2 100%);
    color: white;
}
```

### 최근 업데이트 카드 추가

```html
<div class="update-card" data-aos="fade-up" data-aos-delay="300">
    <div class="update-image-placeholder">
        <img src="images/your-image.jpg" alt="설명">
    </div>
    <div class="update-info">
        <span class="update-date">2026.01.29</span>
        <h4>작업 제목</h4>
    </div>
</div>
```

## 🚀 배포 방법

### GitHub Pages
1. GitHub 저장소에 파일 업로드
2. Settings → Pages → Source: main branch 선택
3. `https://yourusername.github.io/soopsoop-studio` 에서 확인

### 로컬 테스트
```bash
# Python 3 사용 시
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## 💡 추가 개선 아이디어

1. **실제 그래니 스퀘어 패턴을 배경으로**
   - SVG로 그래니 스퀘어 패턴 제작
   - 반복 패턴 배경으로 사용

2. **인터랙티브 갤러리**
   - Lightbox 효과로 작품 크게 보기
   - 슬라이더로 여러 작품 넘기기

3. **블로그 섹션**
   - 각 프로젝트별 상세 페이지
   - 작업 과정 기록

4. **다크모드**
   - 저녁 느낌의 어두운 색상 팔레트
   - 토글 버튼으로 전환

5. **로딩 애니메이션**
   - 실이 감기는 애니메이션
   - 코바늘 바늘 움직이는 효과

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Grid, Flexbox, CSS Variables, 애니메이션
- **Vanilla JavaScript**: DOM 조작, Intersection Observer
- **Google Fonts**: Crimson Pro (디스플레이), DM Sans (본문)

## 📞 연락처

- **Email**:
- **Instagram**: @soopsoop_studio
- **Shop**: [링크 추가]

---

Made with 🧶 by 숲숲
