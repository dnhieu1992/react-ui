function defaultTemplate(
  { imports, interfaces, componentName, props, jsx },
  { tpl },
) {
  const newComponentName = `${componentName.replace('Svg', '')}`

  return tpl`${imports}
  ${interfaces}
  function ${newComponentName}(${props}) {
    return ${jsx};
  }
  export default ${newComponentName}
    `
}
// eslint-disable-next-line no-undef
module.exports = defaultTemplate
