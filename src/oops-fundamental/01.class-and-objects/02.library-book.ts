/*
Problem: Create a Book class for a library management system.

Requirements:

Fields: title, author, isbn, isAvailable
Constructor that initializes all fields (book starts as available)
borrowBook(): marks book as unavailable if currently available, returns success/failure
returnBook(): marks book as available
displayInfo(): prints book details including availability status

*/


class Book {
    // Add private fields: title (string), author (string), isbn (string), isAvailable (boolean)
    private title:string;
    private author:string;
    private isbn:string
    private isAvailable:boolean

    constructor(title: string, author: string, isbn: string) {
        this.title = title
        this.author =author
        this.isbn = isbn
        this.isAvailable = true
    }

    borrowBook(): boolean {
        // Mark book as unavailable if currently available
        // Return true if successful, false if already borrowed
        if(this.isAvailable){
            this.isAvailable = false
            return true
        }
        return false;
    }

    returnBook(): void {
        this.isAvailable = true
        // Mark book as available
    }

    displayInfo(): void {
        const status = this.isAvailable ? "Available" : "Borrowed";
        console.log(`${this.title} by ${this.author} (ISBN: ${this.isbn}) - ${status}`);
    }
}