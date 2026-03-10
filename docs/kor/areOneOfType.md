# areOneOfType

## 설명

`areOneOfType`는 비어 있지 않은 배열의 모든 요소가 지정된 런타임 타입 중 하나에 해당하는지 확인합니다.

### 사용 사례

들어오는 데이터(예: 파싱된 JSON)를 검증할 때, 어떤 필드가 비어 있지 않은 배열이어야 하고 그 항목들이 알려진 기본(primitive) 타입 집합으로 제한되어야 하는 경우에 사용합니다. 배열이 비어 있거나
허용되지 않은 타입이 하나라도 포함되면 `false`를 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 이 함수는 boolean을 반환하며 컴파일 타임에 배열 요소 타입을 좁히지 않습니다. 추가 처리 전에 런타임 검증 단계로 사용하세요.

### 장점

- 배열의 모든 요소가 허용된 런타임 타입 중 최소 하나와 일치하는지 보장하며, 전체 배열이 통과할 때에만 `true`를 반환합니다.
- 잘못된 입력을 조기에 거부합니다: `array` 또는 `types`가 비어 있거나 채워진 배열이 아니면 `false`를 반환합니다.
- `areOneOfType`를 한 번 호출하는 것만으로 혼합 타입 컬렉션(예: 숫자와 문자열)을 검증하는 데 유용합니다.

## 사용법

### 문법

함수:

- `areOneOfType(array, types)`

매개변수:

- `array`: 제공된 타입들과 대조하여 검증할 요소들의 배열입니다.
- `types`: 검사할 데이터 타입을 나타내는 문자열들의 배열입니다.

### 로컬 함수 임포트

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areOneOfType(array, types)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:37:27 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>