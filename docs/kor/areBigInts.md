# areBigInts

## 설명

`areBigInts`는 어떤 값이 `bigint` 값만을 포함하는 비어 있지 않은 배열인지 판별합니다.

### 사용 사례

알 수 없는 입력(예: 파싱된 JSON 유사 데이터, API 페이로드, 또는 `unknown`으로 타입이 지정된 함수 매개변수)을 처리하기 전에, 그것이 `bigint` 값으로 이루어진 비어 있지 않은 배열인지
검증합니다. 모든 요소가 `bigint`일 때만 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 알 수 없는 입력에 대해 `bigint` 전용 연산(예: 산술, 비교)을 수행하기 전에 런타임 가드로 `areBigInts`를 사용하세요.

### 장점

- 모든 요소가 `bigint`임을 보장하며, 배열 전체가 일치할 때만 `true`를 반환합니다.
- 설계상( `isFilledArray`를 통해) 배열이 아닌 값과 빈 배열을 거부하여, 잘못된 입력을 실수로 허용하는 일을 방지합니다.
- 빠른 실패: `bigint`가 아닌 요소를 발견하는 즉시 `false`를 반환합니다.

## 사용법

### 문법

함수:

- `areBigInts(array)`

매개변수:

- `array`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 참
console.log(areBigInts(b)); // 거짓
console.log(areBigInts(c)); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areBigInts(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:26:24 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>