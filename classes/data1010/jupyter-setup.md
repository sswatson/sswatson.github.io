

# Jupyter setup

You can leave a Jupyter server running in the background on your machine, and this allows you to interact with Jupyter as though it were a website (except even better, since it doesn't depend on an internet connection). 

This saves time opening the terminal and waiting for Jupyter to boot, but it also saves package loading time. These instructions should work on macOS and Linux. On Windows, you would have to install a third-party tool to set a process running in the background (or you could just leave the Terminal window minimized).

1. Open a Terminal session and run `screen jupyter lab` (I prefer Jupyter Lab, though you can do this with Jupyter Notebook instead). 
2. Hold `Ctrl` and press `a`, then release and press `d`. This detaches the screen session so you can safely close the Terminal window without terminating the process. 
3. Save the URL as a bookmark in your browser. 
4. If (eventually) you want to kill the Jupyter process, you can open the Terminal and run `screen -r` to reattach the process. Then you can `Ctrl-c` as usual to kill it. 
