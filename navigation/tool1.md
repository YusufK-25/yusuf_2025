---
layout: base
title: Setup
Description: Setting up tools for WSL
permalink: /tool1/
---

> How to add Mario 
## Add code to Index.md, Create _data, and add all necessary files.
```markdown
- Go to index.md, and paste in the Mario code.
- Create a new folder named _data.
- Inside that, add a file named mario_metadata.yml
- Paste all the code.
- Go to the portfolio_2025 page, and download the mario_animation.png file from the images folder. 
- Go back to your images folder, and import the mario_animation.png file.
- Go back to portfolio_2025 and go to _includes
- Go to nav, and download home.html
- Go back to your repository, go to your _includes and nav, and put the home.html file into it.
```
## Important: Place at top (Frontmatter)
```markdown
-Add this code:
---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---
```
>Tools Setup
## Setup for WSL
```markdown
- Install WSL.
- There's a chance it won't work, so ask Mr. Mortenson if it doesn't
- Run the commands
cd
mkdir nighthawk 
cd nighthawk 
git clone https://github.com/nighthawkcoders/portfolio_2025.git
cd
cd nighthawk/portfolio_2025/scripts
./activate_ubuntu.sh
- Run the version checks
- Run Git Identification
- Install [VS Code](https://code.visualstudio.com/)
- When prompted, select "Add to PATH”.
- Create the student_2025 repository where all work will be stored
`# make virtual environment by script
scripts/venv.sh
### activate virtual environment, observe prompt change after running it
source venv/bin/activate
### install python packages for project 
pip install -r requirements.txt
### show Kernels, python3 needs must be in the list
jupyter kernelspec list
### install gems (Ruby packages), required for Jekyll requirements in GitHub Pages
bundle install
### open VSCode
Run the command code .
- Open VS Code. In the sidebar, click on “Extensions”. Search for “Remote Development extension pack” and install it.
- Check that VSCode is opened in WSL, observe at the bottom left corner of the window.
```
> Logging into VS Code on a daily basis
```markdown
- Open a new wsl terminal
- Type cd ~/nighthawk/portfolio/student_2025
- The student_2025 repository is the project directory that you made for yourself
- Once in your student_2025 repository, activate the virtual environment to get into VS Code using this command:
- source venv/bin/activate
- Run the command code .
- After making changes, run make.
- Make -> Runs a build to a local server, which means that it displays what your website would look like after you commit.
- We use make to preview the project, and see what could be changed and what visual errors are present.
```