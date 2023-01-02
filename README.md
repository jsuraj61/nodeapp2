# awsprac
FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE portNo



===git push===
git init 
git config --global user.name Suraj
git config --global user.email jsuraj61@gmail.com
git remote add origin (git repo link)
git add .
git status
git commit -m "commit"
git push origin master

===docker command===
sudo yum install git
sudo yum install docker  
git clone url
sudo systemctl status docker 
sudo systemctl start docker 
sudo systemctl enable docker
ls
cd nameofapp
ls
sudo docker build -t  nameofapp  .  
sudo docker run -d -p 8081:8081 nameofapp
