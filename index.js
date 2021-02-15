const c = require('centra')
const config = {
    version: "1.0.0",
    base_url: "https://paste.colem.dev",
    user_agent: "Mozilla/5.0 (compatible; PasterClient/1.0)"
}

module.exports = {
    create: async function(content) {
        const raw = await c(`${config.base_url}/create`, "POST")
        .header({
            "Content-Type": "application/json",
            "User-Agent": config.user_agent
        })
        .body({
            content: content
        }, "json")
        .send()
        const res = await raw.json()
        if (!res.message || res.message !== "Successfully saved") throw new Error(`Failed to create paste: ${res.message}`)
        return {
            id: res.public_id,
            link: res.link
        }
    },
    fetch: async function(paste_id) {
        const raw = await c(`${config.base_url}/raw/${paste_id}`, "GET")
        .header({
            "Content-Type": "application/json",
            "User-Agent": config.user_agent
        })
        .send()
        const res = await raw.json()
        if (!res.message || res.message !== "Successfully retrieved paste") throw new Error(`Failed to fetch paste: ${res.message}`)
        return {
            id: res.public_id,
            link: res.link,
            body: res.body
        }
    }
}