export function showLine(language: string): boolean {
  return !(language === 'diff' || language === 'sh' || language === 'mdx')
}
