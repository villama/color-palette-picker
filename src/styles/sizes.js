export default {
  down(size) {
    const sizes = {
      xs: '575.98',
      sm: '676.98',
      md: '991.98',
      lg: '1199.98',
      xl: '1399.98'
    }
    return `@media (max-width: ${sizes[size]}px)`
  }
}
