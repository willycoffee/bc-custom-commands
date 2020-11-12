world.on('M', function (crumb) {
    const prefix = "!"
    let msg = crumb.m.toLowerCase()

    if (!msg.startsWith(prefix)) return

    let args = msg.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift()

    world.lastMessageTime = 9000

    if (cmd == "friend") {
        let user = common.findObjectInArray("nickname", args[0], world.players)
        let alert = new boot.Alert(300, 10, "Sent a friend request to " + user.nickname + ".")
                .centerTo(world.stage.boot, 'top').bump(0, 20);
world.stage.boot.addChild(alert);
    }
})
