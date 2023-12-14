# 캐럿마켓 클론 챌린지 - 미니 트위터 클론

- 주요 기술
  : NextJS, Prisma, Tailwind, API Routes, SWR

## 기능구현사항

### Home(/)

- 로그인 여부 확인 API
  - 비로그인 시 로그인 페이지 리다이렉트

### create-account(/create-account)

- form 데이터를 받아서 api 전달
- api, user모델 레코드 생성
  - bcrpyt로 패스워드 해싱 라이브러리 설정✅
  - 모델 설정
