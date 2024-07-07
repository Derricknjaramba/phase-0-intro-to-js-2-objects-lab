let employee = {
    name: 'sam',
    streetAddress: '11 Broadway'
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      [key]: value 
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
  }
  
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'sam');
  console.log(employee);

  function deleteFromEmployeeByKey(employee, key) {

    let { [key]: omitted, ...updatedEmployee } = employee;
    return updatedEmployee;
  }
  
  
  let updatedEmployee = deleteFromEmployeeByKey(employee, 'name');
  console.log(updatedEmployee); 
  console.log(employee); 

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
  }
  
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log(employee);
  
  