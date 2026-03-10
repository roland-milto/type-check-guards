# areStrings

## 설명

`areStrings`는 배열이 비어 있지 않고 모든 요소가 문자열인지 확인하며, 그 경우에만 `true`를 반환합니다.

### 사용 사례

외부 또는 사용자 제공 데이터(예: 쿼리 파라미터, JSON 페이로드, CSV 필드)를 검증하여, 처리 전에 비어 있지 않은 문자열 목록을 확보합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 문자열 전용 로직을 적용하기 전에 알 수 없는 배열을 검증하는 데 `areStrings`를 사용하세요. 빈 배열에는 `false`를 반환합니다.

### 장점

- 모든 요소가 문자열인지 보장하며, 혼합 타입 배열은 `false`를 반환하여 거부합니다.
- 빈 배열을 거부하므로, `true`는 비어 있지 않은 문자열 목록임을 의미합니다.
- 문자열 전용 연산(예: `trim`, `toLowerCase`)을 수행하기 전에 빠른 런타임 가드로 유용합니다.

## 사용법

### 문법

함수:

- `areStrings(value)`

매개변수:

- `value`: Expected type `string[]`.

### 로컬 함수 임포트

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input은 런타임에서 비어 있지 않은 string[]입니다
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areStrings(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:18:59 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>