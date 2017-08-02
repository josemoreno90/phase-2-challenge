1. When you run a command in the terminal, where does BASH look for that command?
"It searches the PATH for the command in specified directories."

2. On a UNIX computer, how do you stop a running process?
"You can use Ctrl-z command to stop a process, which is like a sleep signal, that
can be undone and the process resumed. The kill command followed by the process
ID will work as well."

3. What packages do you have installed via homebrew?
"The packages I have installed via homebrew are:
emacs , imagemagick, libtasn1, mas,openssl, readline, freetype, jpeg, libtiff, mysql   p11-kit, xz, gmp, libffi, libtool, nettle, pkg-config, gnutls, libpng, libunistring,    nmap, and postgresql."

4. On a UNIX computer, how do you find the process id of a running process?
"A way to find the process id is using the command 'ps aux' which will list all process statuses.  If you want to search for specific process you can use
'ps aux | grep SEARCH-PATTERN "

5. In a terminal, what does control-c do?
"Ctrl-c is used to kill a process with SIGINT(polite kill)"

6. What would be the result of typing the following commands?
$ cd /Users/steve  //This changes into the directory "/Users/steve"
$ mkdir foo        //Makes directory 'foo' inside current directory
$ touch bar        //Makes file 'bar' in current directory
$ cd foo           //Changes from current directory into 'foo' directory
$ touch bar        //Makes file 'bar' inside current directory
$ pwd              //Prints working directory

7. How do you set an environment variable in your shell?
"If you only want to use it in the current shell then an example would be:
VARNAME="my value".  If you want to use it in current shell and all other
processes started from current shell then it must be exported, example:
export VARNAME="my value".  If you wanted to use it for all future bash
sessions then add it to .bashrc file."

8. What keyboard shortcut do you use to split the screen in your editor?
"I simply press 'Cmd+Shift+p' then type split"

9. How do you create an alias in your shell?
"To create an alias in current shell you simply type the 'alias' command
and then redefine the environment variable you want to change for example:
alias ls='ls -la'
would have the ls command print the all files including hidden ones in long format "

10. When a terminal command completes, how can you tell if it was successful or not?
"If a command was not successful it will usually throw an error like command not found, also the command line should be visible and you should be able to type a new command..."
11. What does your ~/.gitconfig have in it? (paste the whole file here)
"My gitconfig file contains variables that affect my git command behaviors
The file contains this:
[color]
        ui = true
[user]
        name = Jose Moreno
        email = morenojr90@yahoo.com
"

12. What is the difference between a relative and absolute path?
The difference between relative and an absolute path is that when
using a relative path, this takes as reference the current working directory
while absolute paths reference the root directory.

13. Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
"The command I would use to copy the README.md file to the pinterest-for-dogs folder is:
'cp README.md ../pinterest-for-dogs/'."

14. What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
"I use 'command-p' then type the file name, to go to a file in the project I have open"
15. What files or folders do you want all git repositories to ignore?
"Some common files and folders we want ignored are
Operating system files, Application files, Language and framework files,
Files downloaded with package managers, Credentials...etc.
Example of a commonly ignored file is .DS_Store and .gitignore itself."
16. What is the main difference between Array.map and Array.forEach in JavaScript?
The difference between Array.map and Array.forEach is that Array.map will create a new array with the results of calling a provided function on every element in this array, while Array.forEach executes a provided function once per array element.  Array.forEach doesn't return anything, while Array.map will capture the return value and build a new array of those values.
