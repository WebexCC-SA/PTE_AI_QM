// Reveals the admin credentials for an attendee. Data is AES-GCM encrypted in assets/credentials.json
// (see tools/build-credentials.mjs); the key is derived from the access password + attendee ID.
async function showCredentials() {
    if (event) event.preventDefault()
    const out = document.querySelector("#creds-result")
    const show = (html, err) => { out.className = "creds-msg" + (err ? " error" : ""); out.innerHTML = html }
    const id = document.querySelector("#creds-id").value.trim()
    const pw = document.querySelector("#creds-pw").value
    try {
        const url = new URL("../../assets/credentials.json", window.location.href)
        const db = await (await fetch(url)).json()
        const e = db.entries[id]
        if (!e) return show("Invalid Attendee ID or password.", true)
        const b = (s) => Uint8Array.from(atob(s), c => c.charCodeAt(0))
        const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw + ":" + id), "PBKDF2", false, ["deriveKey"])
        const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: b(e.s), iterations: db.iter, hash: "SHA-256" },
            base, { name: "AES-GCM", length: 256 }, false, ["decrypt"])
        const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b(e.i) }, key, b(e.c))
        const c = JSON.parse(new TextDecoder().decode(plain))
        const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;")
        sessionStorage.setItem("attendee", id)
        if (typeof loadem === "function") loadem()
        show(`Admin username: <code>${esc(c.username)}</code><br>
Admin password: <code>${esc(c.password)}</code><br><br>
Admin portal: <a href="https://admin.webex.com" target="_blank">admin.webex.com</a><br>
Supervisor / Agent desktop: <a href="http://desktop.wxcc-us1.cisco.com/" target="_blank">desktop.wxcc-us1.cisco.com</a><br><br>
Dial-in numbers:<br>UK: <code>+442045208103</code><br>US: <code>+14692501220</code>`)
    } catch (err) {
        show("Invalid Attendee ID or password.", true)
    }
}
