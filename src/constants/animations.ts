export const getRevealClass = (isVisible: boolean, animationClass: string): string =>
  isVisible ? animationClass : 'opacity-0'

export const getAnimationStyle = (delay: number): React.CSSProperties => ({
  '--delay': `${delay}ms`,
} as React.CSSProperties)
