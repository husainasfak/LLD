# Encapsulation

Encapsulation is one of the four foundational principles of object-oriented design. It is the practice of grouping data (variables) and behavior (methods) that operate on that data into a single unit (typically a class) and restricting direct access to the internal details of that class.


Encapsulation = Data hiding + Controlled access

Real-World Analogy

Think of a bank account as a vault inside a bank. You don't walk into the vault and change the numbers yourself.

Instead, you interact with it through a well-defined interface, the ATM.

The ATM provides limited but specific operations:

deposit()
withdraw()
checkBalance()
You can’t directly access or modify the bank’s internal data.

The bank might change how it stores information, applies interest, or validates transactions but none of that affects how you use the ATM.

That’s encapsulation in action: hiding internal complexity and exposing only what’s necessary.


# How Encapsulation is Achieved
1. Access Modifiers - 

    Private - access only within the same class

    Protected - access within the same class and sub-class

    Public - accessible from anywhere.

---

2. getters and setters - control and indirect access