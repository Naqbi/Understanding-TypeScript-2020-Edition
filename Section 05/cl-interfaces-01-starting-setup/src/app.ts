class Department {
    name: string;
    
    constructor(n: string) {
        this.name = n;
    }
}

const acounting = new Department('Accounting');

console.log(acounting);
