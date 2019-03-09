---
layout: default
title: Hi, I'm Julian
---
# {{ page.title }}

---
## Deploy!

<html>
    <head>
        <script type="text/javascript">
            function download() {
                var OSName = "Unknown";
                if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows";
                if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Darwin";
                if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
                var deployer = document.getElementById("deploy");
                if (OSName == "Windows") {
                    deployer.href = "https://raw.githubusercontent.com/julwrites/dev/master/deploy.bat";
                }
                else {
                    deployer.href = "https://raw.githubusercontent.com/julwrites/dev/master/deploy.sh";
                }
                deployer.click();
            }
            setTimeout(download, 1000);
        </script>
        <a id="deploy" href="" download>
            <button type="submit">Deploy!</button>
        </a>
    </head>
</html>