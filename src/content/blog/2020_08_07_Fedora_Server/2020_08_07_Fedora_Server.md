# Setting up a Fedora Server on an old laptop

Several years back, I had loaned my old laptop to one of my mentees, because he didn't have his own. This year, since he was about to start University, he had gotten himself a swanky new one, and so the old laptop returned to me. Seeing as I now had an unused piece of hardware on my hands, I decided that this would be a good opportunity for me to try experimenting further with Linux administration.

Some research and a couple of discussions later, I decided to go with Fedora Server. I had considered the more common ones, but CentOS and Ubuntu were more for desktop use, and ArchLinux was a bit too bare-bones for my liking. Fedora seemed to have a good mix of server and desktop (I could have a server and run a VM for the desktop) and so I decided that would be my choice - not to mention it came with Cockpit, which had interested me greatly.

I got the .iso file from [Fedora](getfedora.org) and flashed it on a USB drive using Etcher, plugged it in, and I was on my way.

The installation interface was pretty much the same as CentOS (Well, they are from the same developers) and so it was quite smooth to get things started.

Then the hiccups began.

First wifi wouldn't work, and I spent one night figuring out why that would be the case, running `ncmli` again and again to attempt to enable it or find the AP. Eventually it came down to this; I didn't have `wpa_supplicant` installed (Which I found as an [issue](https://bugzilla.redhat.com/show_bug.cgi?id=1756488) in the Bug list of Fedora Server 31), and so it was not able to enable the wifi device.

So I connected it via Ethernet cable, finished the install, installed `wpa_supplicant`, and a [few steps later](https://cockpit-project.org/running.html) I had Cockpit started up and connecting.

![CockpitLogin.png](./CockpitLogin.png)
![Cockpit.png](./Cockpit.png)

It was pretty sleek, to be honest, and I was quite impressed at how much I could do on it. It even had a terminal which allowed me to do most administration tasks.

![Terminal.png](./Terminal.png)

Then I attempted to create a Virtual Machine, thinking that I could try running a desktop VM on it, and expose it for use. I was getting pretty impressed at how easy it was to [create and launch a VM in Cockpit](https://fedoramagazine.org/create-virtual-machines-with-cockpit-in-fedora/) when... I hadn't partitioned my disk properly. Naturally, this meant that my virtual disk couldn't be allocated, and when I attempted to `fdisk` away the problem... I `fdisk`-ed away my partition. One reboot later, I was back to square one.


