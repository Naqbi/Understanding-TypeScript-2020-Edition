class Department {
    //private name: string;
    //private readonly id: string;
    private empolyees: string[] = [];
    constructor(private readonly id: string, public name: string) {
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`Department ${this.id}: ${this.name}`);
    }

    addEmloyee(employee: string) {
        this.empolyees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.empolyees.length);
        console.log(this.empolyees);
    }
}

const accounting = new Department('a1','Accounting');

accounting.addEmloyee('Ahmed');
accounting.addEmloyee('Ali');

//accounting.empolyees[2] = 'Hassan';

accounting.describe();
accounting.printEmployeeInformation();

// const copyAccounting = { name: 'Digital', describe: accounting.describe };

// copyAccounting.describe(); // Department: undefined
