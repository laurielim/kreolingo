/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return /^lesson-\d+$/.test(param);
}