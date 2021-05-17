import { admin, db } from './dbload'

async function main() {
  const devices = await db.ref('device').once('value')

  const snaps: admin.database.DataSnapshot[] = []

  devices.forEach(v => {
    snaps.push(v)
  })

  const ps = snaps.map(async device => {
    await device.ref.update({
      category: 'hoge',
    })
    console.log(device.key)
  })

  await Promise.all(ps)
}
main().then(() => {
  admin.apps[0]?.delete()
})
