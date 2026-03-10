# arePrimitives

## 설명

`arePrimitives`는 제공된 비어 있지 않은 배열의 모든 요소가 원시 타입인지 평가합니다.

### 사용 사례

직렬화, 해싱, 로깅을 수행하거나 객체를 받으면 안 되는 API에 전달하기 전에, 들어오는 데이터(예: 쿼리 파라미터, CSV 행 값, ID/태그 목록)가 원시 값만 포함하는지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 추가 처리 전에 `unknown[]`가 원시 값(string, number, bigint, boolean, symbol, undefined, null)만 포함하는지 보장해야 할 때 `arePrimitives`를
> 사용하세요.

### 장점

- 모든 요소가 원시 값일 때에만 `true`를 반환하므로, “객체/함수 없음” 배열에 대한 엄격한 가드로 동작합니다.
- 빠르게 실패합니다: 원시 값이 아닌 요소를 발견하는 즉시 `false`를 반환합니다.
- 배열이 아니거나 빈 배열인 경우에도(채워진 배열 검사로 인해) `false`를 반환하여, 잘못된 입력이 실수로 허용되는 것을 방지합니다.

## 사용법

### 문법

함수:

- `arePrimitives(array)`

매개변수:

- `array`: 원시 타입 요소로만 구성되어 있는지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // 참
const r2 = arePrimitives(b); // 참
const r3 = arePrimitives(c); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.arePrimitives(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:05:17 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>