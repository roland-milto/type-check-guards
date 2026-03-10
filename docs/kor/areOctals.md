# areOctals

## 설명

`areOctals`는 제공된 값이 유효한 8진수 문자열로 이루어진 비어 있지 않은 배열인지 판별합니다.

### 사용 사례

`areOctals`는 사용자 입력, 구성 값, 또는 8진수 리터럴(예: `0o755` 같은 파일 권한 모드)을 포함해야 하는 API 페이로드를 검증할 때 사용하며, 빈 배열이나 유효하지 않은 항목이 하나라도 있으면
`false`를 반환하여 거부하고자 할 때 유용합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areOctals`를 사용해 (예: `Number(...)` 또는 사용자 정의 파싱을 통해) 변환하기 전에 각 항목이 유효한 8진수 문자열인 비어 있지 않은 `unknown[]`인지 확인하세요.

### 장점

- 값이 비어 있지 않은 배열이며 모든 요소가 8진수 문자열인지 검증하고, 모든 항목이 통과할 때만 `true`를 반환합니다.
- 빠르게 실패합니다: 8진수가 아닌 요소가 발견되는 즉시 `false`를 반환합니다.
- 런타임 오류와 일관되지 않은 입력 처리를 피하기 위해 8진수 문자열을 파싱하거나 변환하기 전에 가드로 사용하기에 유용합니다.

## 사용법

### 문법

함수:

- `areOctals(array)`

매개변수:

- `array`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value는 8진수 문자열로 이루어진 비어 있지 않은 배열이다
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areOctals(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:57:00 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>