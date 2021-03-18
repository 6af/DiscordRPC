var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

const activity = {
    details: "Dev",
    assets: {
        large_image: "huge",
        large_text: "6af",
        small_image: "play",
        small_text: "playing"





},
buttons: [{  "label": "image.surf!!","url": "https://image.surf"},{"label": "Github","url": "https://github.com/6af"}],
 timestamps: {start: Date.now()},
 instance: true

}

client.on("ready", () =>{
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity})
    console.log("RPC ON")


})

client.login({ clientId: "822218876455878666"})