# 캐럿마켓 클론 챌린지 - 미니 트위터 클론

- 주요 기술
  : NextJS, Prisma, Tailwind, API Routes, SWR

## 기능구현사항

### 1.Home(/) ✅

- 로그인 여부 확인 API

  - 비로그인 시 로그인 페이지 리다이렉트

- 모든 트윗 목록 보여주기

### 2. create-account(/create-account)

#### 기능✅

- form 데이터를 받아서 api 전달
- api, user모델 레코드 생성

  - bcrpyt로 패스워드 해싱 라이브러리 설정
    - 패스워드 해싱, 해싱 패스워드 확인
  - 모델 설정
  - 쿼리 create 요청

- 성공 시, log-in 리다이렉트

#### 예외상황

- 계정 생성 시, 중복 여부에 따라 api 실패 원인 발송

### 3. log-in(/log-in)

#### 기능✅

- form 데이터를 받아서 api 전달
- api, user모델 레코드 탐색

  - 존재 확인 시, req.session.user.id 부여
    - iron sesssion 설정
    - 암호화된 쿠키 부여

- 위 과정 성공 시, api 응답, 홈으로 리다이렉트

#### 예외상황

- 계정 탐색 시, 실패 여부에 따라 api 실패 원인 발송

### 4. 트윗 업로드(/tweet/upload)✅

- front

  - form 유효성 검사 후, api 송신

- model

  - tweet 모델 생성

- api

  - 유효성 검사 후, 모델 레코드 생성

- front
  - 중복 요청 방지
  - 성공 후, 홈으로 리다이렉트

### 5. 트윗 상세보기(/tweet/:id)

- front

  - useSWR로 데이터 쿼리

- api
  - 쿼리스트링으로 아이디 추출, tweet 레코드에서 가져오기
  - 프론트로 데이터 응답
