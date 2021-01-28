const fs = require('fs')
const path = require('path')
const readLine = require('readline')
const ejs = require('ejs')
const iconReg = /^\.ri-(?<icon>[^{\s:]+)+-(?<style>[^:]+)(?::before)/g
const sizeReg = /^\.ri-(?<size>[^{\s:]+)\s/g

const remixIconCssFilePath = require.resolve('remixicon/fonts/remixicon.css')
const readStream = fs.createReadStream(remixIconCssFilePath)
const rl = readLine.createInterface({
  input: readStream,
  crlfDelay: Infinity
})
const sizes = []
const icons = []
const iconStyles = new Set(['fill', 'line'])
rl.on('line', (line) => {
  iconReg.lastIndex = 0
  if (iconReg.test(line)) {
    iconReg.lastIndex = 0
    const result = iconReg.exec(line)
    if (result !== null) {
      const {
        groups: { icon, style }
      } = result
      if (iconStyles.has(style)) {
        icons.push(icon)
      } else {
        icons.push(`${icon}-${style}`)
      }
    }
  }
  sizeReg.lastIndex = 0
  if (sizeReg.test(line)) {
    sizeReg.lastIndex = 0
    const result = sizeReg.exec(line)
    if (result !== null) {
      const {
        groups: { size }
      } = result
      sizes.push(size)
    }
  }
})
rl.on('close', () => {
  ejs.renderFile(
    path.resolve(__dirname, './interfaces.ejs'),
    {
      icons: icons.map((v) => `"${v}"`).join(' | '),
      iconSize: sizes.map((v) => `"${v}"`).join(' | '),
      iconStyle: [...iconStyles].map((v) => `"${v}"`).join(' | ')
    },
    (err, tpl) => {
      if (!err) {
        fs.writeFile(
          path.resolve(process.cwd(), 'src/interfaces.ts'),
          tpl,
          () => {}
        )
      } else {
        console.error(err)
      }
    }
  )
})
