const students = document.getElementById('students');
const students_count = document.getElementById('all_students');
let count = 0
const handleFormSubmit =(event)=>{
  
     event.preventDefault();
      let name = event.target.username.value;
      let email = event.target.email.value;
      let phone = event.target.phone.value;

     let userdetails ={
           name,
           email,
           phone

     }
   const li =document.createElement('li')
   li.textContent=`${name}-${email}-${phone}`

   const del_btn =document.createElement('button')
   del_btn.textContent ='Del'
   
   li.appendChild(del_btn);
   
   students.appendChild(li);
   count = count + 1;

   students_count.textContent = `All students: ${count}`

   axios.post('https://crudcrud.com/api/b37c3c1783764777995ebf2b69e919d1/userData',{
         userdetails,
         
   })
   .then((response)=>{
       console.log(response.data)
   })
   .catch((error)=>{
      console.log(error)
   })
   

  
  del_btn.addEventListener('click',()=>{
      li.remove()
      count=count-1
      students_count.textContent = `All students: ${count}`
      axios.delete('https://crudcrud.com/api/b37c3c1783764777995ebf2b69e919d1/userData/6747f2ffd0267903e85b485b')
      .then((response)=>{
         console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  })


   

}
