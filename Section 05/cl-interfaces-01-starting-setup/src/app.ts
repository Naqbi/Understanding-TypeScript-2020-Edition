abstract class Department {
    //private name: string;
    //private readonly id: string;
    //private empolyees: string[] = [];
    static fiscalYear = 2024;
    protected empolyees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        //this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name };
        // return name;
        // return `name: ${name}`
        // return name: name
    }

    abstract describe(this: Department): void

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

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }

        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;

    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name: string) {
        if (name === 'Yaser') {
            return;
        }
        this.empolyees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport() {
        console.log(this.reports);
        
    }
}

const employee1 = Department.createEmployee('Ahmed');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('a1',['Yaser']);
it.describe();

it.addEmloyee('Ahmed');
it.addEmloyee('Ali');

//accounting.empolyees[2] = 'Hassan';

//it.describe();
it.printEmployeeInformation();

console.log(it);

//const accounting = new AccountingDepartment('a2', []);
const accounting = AccountingDepartment.getInstance();

accounting.describe();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Yaser');
accounting.addEmployee('Ahmed');

accounting.printReport();

const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);


// const copyAccounting = { name: 'Digital', describe: accounting.describe };

// copyAccounting.describe(); // Department: undefined
