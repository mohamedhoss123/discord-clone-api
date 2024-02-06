import sharp from "sharp"

sharp('input.jpg')
    .rotate()
    .resize(200)
    .jpeg({ mozjpeg: true })
    .toBuffer()