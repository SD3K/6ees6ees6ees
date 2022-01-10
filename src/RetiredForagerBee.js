class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.treasureChest = [];
    this.color = 'grey';
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble() {
    let treasure = 'treasure';
    this.treasureChest.push(treasure);
  }
}
