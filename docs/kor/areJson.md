# areJson

## 설명

배열의 모든 요소가 JSON 문자열인지 확인하며, 배열이 채워져 있고 모든 항목이 유효한 JSON일 때만 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

JSON으로 인코딩된 문자열 배열을 기대하는 유입 데이터(예: 쿼리 파라미터, 환경 변수, 외부 API)를 검증하고, 빈 배열이나 JSON이 아닌 항목이 하나라도 있으면 거부하고자 할 때 사용합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown[]`에 JSON 문자열만 들어 있는지 파싱하기 전에(예: `JSON.parse`로) 검증해야 할 때 `areJson`를 사용하세요.

### 장점

- 모든 요소가 유효한 JSON 문자열일 때만 `true`를 반환하며, 그렇지 않으면 `false`를 반환합니다.
- 빠르게 실패합니다: JSON이 아닌 요소를 발견하는 즉시 검사를 중단합니다.
- 설계상 빈 배열은 거부하며, 채워지지 않은 입력에 대해 `false`를 반환합니다.

## 사용법

### 문법

함수:

- `areJson(array)`

매개변수:

- `array`: JSON 문자열 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // 참
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // 거짓
const empty = areJson([]); // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areJson(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areJson](../_analysis/areJson.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:16:26 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>