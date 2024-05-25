class Department {
    //private name: string;
    //private readonly id: string;
    private empolyees: string[] = [];
    constructor(private readonly id: string, public name: string) {
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmloyee(employee: string) {
        this.empolyees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.empolyees.length);
        console.log(this.empolyees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }


    addReport(text: string) {
        this.reports.push(text);
    }

    printReport() {
        console.log(this.reports);
        
    }
}
const it = new ITDepartment('a1',['Yaser']);

it.addEmloyee('Ahmed');
it.addEmloyee('Ali');

//accounting.empolyees[2] = 'Hassan';

it.describe();
it.printEmployeeInformation();

console.log(it);


const accounting = new AccountingDepartment('a2', []);
accounting.addReport('Something went wrong...');
accounting.printReport();
console.log(accounting);

// const copyAccounting = { name: 'Digital', describe: accounting.describe };

// copyAccounting.describe(); // Department: undefined
