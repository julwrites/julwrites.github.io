# Setting up Nginx Reverse Proxy to Custom Domain

Next I wanted to be able to access this from my custom domain, and therefore have a browser-based IDE available for myself anywhere with internet access. 

This took a little more work; I had to install `nginx` to serve as a reverse proxy, and `certbot-nginx` for SSL encryption.

A couple of commands later...
- `dnf install -y nginx certbot-nginx`
- `systemctl enable nginx --now`

And some [configuration](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-centos-7)...

A bit more [tweaking](https://stackoverflow.com/questions/35372648/configure-nginx-reverse-proxy-subdomains-with-dynamic-dns)... 

And a couple more tweaks to handle my existing server configurations...

I then added an A record to my subdomain, and pointed it to my public IP address, added port forwarding on my router to my device, and... Poof, VSCode on the go! 

All in all, this was a pretty good learning experience about servers, docker, and `nginx`. Server administration has come a long way, and while it is not trivial to work all these details out, and it can be a mess to update server versions with all the dependent packages, it is possible given some effort, patience, and a bit of asking around. 
