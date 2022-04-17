//Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos. 

class repository{
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
        this.name=name
        this.author=author
        this.language=language
        this.numberOfCommits=numberOfCommits
        this.stars=stars
        this.forks=forks
        this.issues_open=issues_open
        this.issues_close=issues_close
    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
      }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}
const myRepo = new repository("LaunchX", "Ajelandro", "js", 100,10,10,20,10)
console.log(myRepo.getGeneralInfo())
console.log(myRepo.getTotalIssues())
console.log("Nombre del repo:" + myRepo.name)
console.log("Author: " + myRepo.author)
   