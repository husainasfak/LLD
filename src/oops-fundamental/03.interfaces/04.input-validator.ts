/**
 Design Input Validator Class
Problem: Build a registration system where multiple validation rules are applied to user input. Each rule is a separate implementation of a Validator interface, and the RegistrationService runs all validators before accepting the registration.

Requirements:

Validator interface with a validate(input) method that returns true if valid, false otherwise
EmailValidator: returns true if the input contains @
PasswordValidator: returns true if the input has 8 or more characters
RegistrationService: takes a list of validators in its constructor. Its register(input) method runs all validators and prints whether the input passed or failed
 */


interface Validator {
    validate(input: string): boolean;
}

class EmailValidator implements Validator {
    validate(input: string): boolean {
        // Return true if input includes "@"
        if(input.includes("@")) {
            return true;
        }
        return false;
    }
}

class PasswordValidator implements Validator {
    validate(input: string): boolean {
        // Return true if input.length >= 8
        if(input.length >=8) return true
        return false;
    }
}

class RegistrationService {
    private validators: Validator[];

    constructor(validators: Validator[]) {
        this.validators = validators;
    }

    register(input: string): void {
        const allPassed = this.validators.every(v=>v.validate(input))
        console.log(`"${input}" - ${allPassed ? "PASSED" : "FAILED"}`);
        // Run all validators on input. If all pass, print "input" - PASSED
        // If any fail, print "input" - FAILED
    }
}

// Test your implementation
const emailReg = new RegistrationService([new EmailValidator()]);
emailReg.register("user@example.com"); // Should pass
emailReg.register("invalid-email");     // Should fail

const passReg = new RegistrationService([new PasswordValidator()]);
passReg.register("strongpassword"); // Should pass
passReg.register("short");           // Should fail