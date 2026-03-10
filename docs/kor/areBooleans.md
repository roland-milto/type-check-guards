# areBooleans

## 설명

`areBooleans`는 주어진 비어 있지 않은 배열이 불리언 값만 포함하는지 확인하며, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

사용자 제공 또는 외부 데이터(예: JSON 페이로드, 쿼리 파라미터, 설정 배열)를 검증하여, 비어 있지 않은 목록이 불리언만 포함하는지 확인한 뒤 불리언 로직을 적용하거나 `boolean[]`를 기대하는 API에
전달합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown[]`를 `boolean[]`로 취급하기 전에 `areBooleans`로 검증하세요. 빈 배열에는 `false`를 반환하므로, 빈 목록도 허용해야 한다면 해당 경우를 명시적으로 처리하세요.

### 장점

- 모든 요소가 불리언이고 입력이 비어 있지 않은 배열일 때에만 `true`를 반환합니다.
- 빈 배열을 거부하여( `false` 반환) 거짓 양성을 방지합니다.
- 불리언 전용 연산(예: `every`, `some`, 논리적 리덕션) 전에 런타임 가드로 사용하기에 적합합니다.

## 사용법

### 문법

함수:

- `areBooleans(array)`

매개변수:

- `array`: 불리언 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areBooleans(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:40:55 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>