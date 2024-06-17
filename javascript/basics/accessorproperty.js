// getter and setter

const obj = {
    fname : 'manoj',
    lname : 'prabhu',
    get fullName(){
      console.log(this.fname + this.lname);
    },
    set fullName(name) {
      this.fname = name;
      this.lname = name
    }
  }
  
  console.log(obj.fullName); //manojprabhu
  obj.fullName = 'manoj'
  console.log(obj.fullName); //manojmanoj