const pokeObj = {
    name: 'pika',
    lname: 'chu',
    fullName: function() {
      console.log(`my name is ${this.name}${this.lname}`)
    }
  }
  
  function getPokeMonName(sound) {
    this.fullName();
    console.log(this.name, this.fullName, sound);
  }
  
  getPokeMonName.call(pokeObj, 'rage');
  getPokeMonName.apply(pokeObj, ['rage'])
  const methodBindClone = getPokeMonName.bind(pokeObj);
  methodBindClone();