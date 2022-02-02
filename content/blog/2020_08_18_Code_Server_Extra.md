# Internet and storage for my code-server

<<<<<<< HEAD:content/blog/2020_08_18_Code_Server_Extra.md
So... day 1 into using my new code server, I immediately found 2 problems.
=======
So day 1 into using my new code server, I immediately found 2 problems.
>>>>>>> origin/develop:src/content/blog/2020_08_18_Code_Server_Extra/2020_08_18_Code_Server_Extra.md

1. I had no access to the storage volume I had assigned to my code-server instance.
2. My code-server instance had no internet access.

Now, I can see why as a default this would be fine, since Docker is supposed to be containerized and so on, but 1. was annoying, and 2. kind of defeated the purpose of me using code-server at all.

<<<<<<< HEAD:content/blog/2020_08_18_Code_Server_Extra.md
![VolumeDenied.png](../assets/blog/2020_08_18_Code_Server_Extra/VolumeDenied.png)

While I was researching solutions, I decided to switch to using `linuxserver/code-server` since I found it had more settings enabled for me (e.g. I could set `SUDO_PASSWORD` to enable sudo while using it), and also had a community I could access to ask questions. This was really a drop-in replacement, and perhaps a lesson for me on one of the benefits of docker; it was no effort at all to configure a docker instance for the new code-server, and simply point it to the port that I had previously designated for code-server to run.

![LinuxServerDockerSetup.png](../assets/blog/2020_08_18_Code_Server_Extra/LinuxServerDockerSetup.png)
=======
![VolumeDenied.png](./VolumeDenied.png)

While I was researching solutions, I decided to switch to using `linuxserver/code-server` since I found it had more settings enabled for me (e.g. I could set `SUDO_PASSWORD` to enable sudo while using it), and also had a community I could access to ask questions. This was really a drop-in replacement, and perhaps a lesson for me on one of the benefits of docker; it was no effort at all to configure a docker instance for the new code-server, and simply point it to the port that I had previously designated for code-server to run.

![LinuxServerDockerSetup.png](./LinuxServerDockerSetup.png)
>>>>>>> origin/develop:src/content/blog/2020_08_18_Code_Server_Extra/2020_08_18_Code_Server_Extra.md
