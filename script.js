let serial = 1;
let nor = 5;

function addData(){

    const name = document.getElementById("Name");
    const email = document.getElementById("Email");
    const contact = document.getElementById("Contact");

    let ret = isvalidate(name,email,contact);

    if(ret){
        const Name = name.value;
        const Email = email.value;
        const Contact = contact.value;

        sendDataToLocal(Name,Email,Contact);
        
        let data = getDataFromLocal();
    
        let arr=[serial].concat(data);
    
        if(serial<=nor){
            for(var i =0; i<4; i++){
                var col = document.getElementById("col_"+serial+"_"+(i+1));
                var text = document.createTextNode(arr[i]);
                col.appendChild(text);
            }
    
        }
        else{
            var tblbody = document.getElementById('tbody');
    
            var row = document.createElement('tr');
            row.id='row_'+serial
            row.className='text-center'
        
            for(var i=0; i<4; i++){
                var column = document.createElement('td');
                column.id='column_'+serial+"_"+(i+1)
                var text = document.createTextNode(arr[i]);
                column.appendChild(text);
                row.appendChild(column);
            }
    
            tblbody.appendChild(row);
    
            console.log("row added");
            nor++;
        }
        serial++;
        document.getElementById("form").reset();
    }
}

const sendDataToLocal = (Name, Email, Contact)=>{
        localStorage.setItem('Name',Name);
        localStorage.setItem('Email',Email);
        localStorage.setItem('Contact',Contact); 
}

const getDataFromLocal = ()=>{
    let username = localStorage.getItem('Name');
    let useremail = localStorage.getItem('Email');
    let usercontact = localStorage.getItem('Contact');

    return [username,useremail,usercontact]
}




const isvalidate = (name, email, contact)=>{

    name_value = name.value;
    email_value = email.value;
    contact_value = contact.value;

    return (validate_Name(name_value) && (validate_Email(email_value) && validate_Contact(contact_value)));

}


const validate_Name = (name_value)=>{
    
    var name_re = /^[a-zA-Z ]*$/;
   
    if(name_value===""){
        alert("Name can't be empty!")
        return false;
    }

    else if (name_re.test(name_value)){
        return true;
    }
    else{
        alert("Name can only contain Alphabets and ' '");
        return false;
    }
}

const validate_Email = (email_value)=>{

    var email_re = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;

    if(email_value===""){
        alert("Email can't be empty!")
        return false;
    }
    else if (email_re.test(email_value)){
        return true;
    }
    else{
        alert("Please enter a valid mail id");
        return false;
    }

}

const validate_Contact= (contact_value)=>{
    var contact_re = /^\d{10}$/;

    if (contact_re.test(contact_value)){
        return true;
    }
    else{
        alert("Phone number must be of 10 digits");
        return false;
    }
}