class User{
    constructor(email, password, username, gender, birtdate){
        this.email = email;
        this.password = password;
        this.username = username;
        this.gender = gender;
        this.birtdate = birtdate;
    }  
}

let guest = new User("", "", "", "", new Birthdate("16","November", "2002"));