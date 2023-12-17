// Step 1: Initialize the employee object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  // Step 2: Implement the functions
  
  // Function 1: Non-destructive update
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function 2: Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function 3: Non-destructive deletion
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function 4: Destructive deletion
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log(updateEmployeeWithKeyAndValue(employee, 'age', 30));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30));
  console.log(deleteFromEmployeeByKey(employee, 'name'));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));
  