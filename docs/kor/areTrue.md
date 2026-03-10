# areTrue

## 설명

비어 있지 않은 배열이 불리언 `true` 값만 포함하는지 확인합니다.

### 사용 사례

`areTrue`를 사용해 전제 조건이나 기능 플래그의 집합이 모두 활성화되어 있는지(모든 값이 `true`)를 검증한 뒤 계속 진행할 수 있으며, 빈 입력이나 형식이 잘못된 입력은 충족되지 않은 것으로(
`false`) 처리할 수 있습니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areTrue`는 빈 배열과, 엄격하게 `true`가 아닌 값이 하나라도 포함된 배열에 대해 `false`를 반환합니다.

### 장점

- 모든 요소가 엄격하게 `true`이고 배열이 비어 있지 않을 때에만 `true`를 반환합니다.
- 빠르게 실패합니다: `true`가 아닌 값을 발견하는 즉시 `false`를 반환합니다.
- 유효하지 않은 입력(배열이 아니거나 빈 배열)은 `false`를 반환하여 거부합니다.

## 사용법

### 문법

함수:

- `areTrue(array)`

매개변수:

- `array`: 모든 값이 `true`인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areTrue(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:51:42 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>