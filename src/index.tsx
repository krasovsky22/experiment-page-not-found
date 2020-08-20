import * as React from 'react'
import styles from './styles.module.css'
import { useEffect } from 'react'

const WIDTH = 800
const HEIGHT = 550

function draw() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  canvas.width = WIDTH
  canvas.height = HEIGHT
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
  ctx.fill()
  const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
  const pix = imgData.data
  setInterval(() => {
    for (let i = 0; i < pix.length; i += 4) {
      const color = Math.random() * 255 + 50
      pix[i] = color
      pix[i + 1] = color
      pix[i + 2] = color
    }
    ctx.putImageData(imgData, 0, 0)
  }, 30)
}

const PageNotFoundError = () => {
  useEffect(() => {
    draw()
  }, [])

  return (
    <div className={styles['error-container']}>
      <h1>404</h1>
      <div className={styles.frame}>
        <div />
        <div />
        <div />
      </div>

      <canvas id='canvas' />
    </div>
  )
}

export default PageNotFoundError
