# TypeScript Bug: Array Passed to String Function

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string.  The `greeter` function is designed to accept a string, but the `user` variable is an array.  This leads to a runtime error.

The solution showcases how to correctly handle such scenarios, either by modifying the function signature or by accessing the appropriate elements of the array.