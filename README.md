# Vercel 배포 가이드

프론트엔드 개발자를 위한 Next.js + Vercel 배포 가이드 웹사이트입니다.

## 가이드 내용

| 단계 | 제목 | 설명 |
|------|------|------|
| 1 | 사전 준비 | GitHub, Node.js, Vercel 계정 준비 |
| 2 | 프로젝트 생성 | Next.js App Router 프로젝트 생성 |
| 3 | GitHub 연동 | 레포 생성, push, 브랜치 전략 |
| 4 | Vercel 배포 | Import → 배포 → URL 확인 → 빌드 로그 |
| 5 | 환경변수 | Dashboard 설정, 환경 분리, .env.local |
| 6 | Preview 배포 | PR 생성 시 자동 Preview URL 활용 |
| 7 | 트러블슈팅 | 빌드 실패, 캐시, 자주 만나는 에러 |

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX (next-mdx-remote v6)
- **Deploy**: Vercel (SSG)

## 로컬 실행

```bash
pnpm install
pnpm dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 빌드

```bash
pnpm build
```
