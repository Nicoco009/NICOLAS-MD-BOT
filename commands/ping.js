import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `NICOLAS MD BOT Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `Nicolas Jovanny`
        )
    }, { quoted: message })
}