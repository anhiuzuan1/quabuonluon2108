import React from 'react'
function getFullName(firstName,lastName){
  return firstName +' '+lastName
}
function Email(email){
  /*if(!email)
  {
    return <i style={{color:'red'}}>khong co email</i>
  }*/
  return email
}
const users = [
  {
    firstName: 'LamPart',
    lastName: 'Fank',
    email: 'duong@targeek.io'
  },
  {
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'real.donaldtrump@us.gov'
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
    email: 'phuong@gmail.com'
  },
  {
    firstName: 'Quang Huy',
    lastName: 'Nguyễn',
   
  }
]
function Khohiu(props){
  
  const kun=props.kun;
  //console.log(kun,kun.email);
  const elememnt=(
    <div>
      <div style={{fontSize:22}}>{getFullName(kun.firstName,kun.lastName)}</div>
      <div style={{color:kun.email?'grey':'red',fontStyle:kun.email?'initial':'italic'}}>{Email(kun.email)||'khong co email'}</div>
    </div>
  )
  return elememnt;
}
function App(){
  const elememnt=users.map(kun => {
    return <Khohiu
      kun={kun}
    />
  })
  return elememnt;
}


export default App;
