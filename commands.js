world.on('M', function (crumb) {
    const prefix = "!"
    let msg = crumb.m.toLowerCase()

    if (!msg.startsWith(prefix)) return

    let args = msg.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift()

    world.lastMessageTime = 9000

    if (cmd == "ping") {
        world.message("Pong!")
    }
})

 // TODO:
 // Make it so the balloon doesn't show up when you send a custom command. (Like the real commands)
