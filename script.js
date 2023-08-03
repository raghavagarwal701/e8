
document.addEventListener('DOMContentLoaded', function() {
    let userData={
      name:"",
      companyName:"",
      phoneNumber:"",
      email:""
    }
    let input1 = document.getElementById('name');
    let input2 = document.getElementById('company');
    let input3 = document.getElementById('phone');
    let input4 = document.getElementById('email');
    let submitButton = document.getElementById('submitButton');
    const saveUserData = (data) => {
      axios.post('http://localhost:5000/form/add', data)
        .then(res => {
          const addedData = res.data;
          console.log(`POST: user is added`, addedData);
        })
        .catch(err => {
          console.error(err);
        })
    }
    function checkFormValidity() {
      if (input1.value !== '' && input2.value !== '' && input3.value !== '' && input4.value !== '') {
        submitButton.style.opacity = 1;
      } else {
        submitButton.style.opacity = 0.4;
      }
    }
    input1.addEventListener('input', checkFormValidity);
    input2.addEventListener('input', checkFormValidity);
    input3.addEventListener('input', checkFormValidity);
    input4.addEventListener('input', checkFormValidity);
    submitButton.onclick = async(e) => {
      e.preventDefault();
      userData={
        name:input1.value,
        companyName:input2.value,
        phoneNumber:input3.value,
        email:input4.value
      }
      saveUserData(userData);
      input1.value="";
      input2.value="";
      input3.value="";
      input4.value="";
    };
  });
  