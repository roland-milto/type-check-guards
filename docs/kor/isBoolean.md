# isBoolean

## 설명

주어진 값이 `boolean`인지 여부를 판별합니다.

### 사용 사례

외부 또는 타입이 지정되지 않은 데이터(예: 환경 변수, JSON 페이로드, 쿼리 파라미터)를 검증하여, 조건부 로직에서 사용하기 전에 값이 `boolean`인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 불리언 연산을 적용하기 전에 `isBoolean`을 사용해 `unknown`을 `boolean`으로 좁히세요.

### 장점

- `typeof`를 사용한 간단하고 빠른 런타임 검사.
- 불리언 전용 로직을 적용하기 전에 알 수 없는 입력을 검증하는 데 도움.
- 예측 가능한 `boolean` 결과(`true`/`false`)를 반환.

## 사용법

### 문법

함수:

- `isBoolean(value)`

매개변수:

- `value`: 검사할 값.

### 로컬 함수 임포트

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // 여기서 input은 boolean입니다
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isBoolean(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:36:51 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>