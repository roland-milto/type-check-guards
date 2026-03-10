# areRegExes

## 설명

`areRegExes`는 값이 `RegExp` 객체만 포함하는 채워진 배열인지 확인합니다.

### 사용 사례

설정 옵션(예: 허용/차단 패턴 목록)이 매칭에 사용되기 전에 비어 있지 않은 정규식 배열인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 반복하거나 패턴을 조합하기 전에 `areRegExes`를 사용해 `unknown`을 `RegExp[]`로 좁히세요.

### 장점

- 값이 비어 있지 않은 배열이며 모든 요소가 `RegExp` 인스턴스임을 보장합니다.
- 사용자 입력 또는 설정을 검증하기 위한 간단한 불리언 가드(`true`/`false`)를 제공합니다.
- 이후 코드에서 모든 항목이 정규식 연산을 지원한다고 가정할 때 발생할 수 있는 런타임 오류를 방지하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areRegExes(array)`

매개변수:

- `array`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // 여기서 patterns는 RegExp의 배열입니다
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areRegExes(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:19:24 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>