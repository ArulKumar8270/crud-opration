import React, { useState, useEffect } from 'react'
import Input from '../UI-Components/Input-Component'
import Modal from '../UI-Components/Modal-Components'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import './index.css'
import { createCustomer, deleteCustomer, getCustomer, signOut, updateCustomer } from '../../action';

export default function CrudPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [Temp, setTemp] = useState(false);
  const [id, setId] = useState('')
  const auth = useSelector(state => state.auth)
  const customers = useSelector(state => state.customer);
  const [customerDetails, setCustomerDetails]= useState('')

  const dispatch = useDispatch();

  const handleSubmitForm = () => { 
    const customer = {  name, email, phone, gender, location };
    dispatch(createCustomer(customer))
    setTemp(!Temp);
    setName(''); setEmail(''); setPhone(''); setGender(''); setLocation('');

  }
  const hanldeEditCustomer = (customer) => {
      const {_id, name, email, phone, gender, location} = customer;
      setName(name); setEmail(email); setPhone(phone); setGender(gender); setLocation(location);setId(_id)
  }

  const handleEditForm = (e) => {
    const customer = {  name, email, phone, gender, location , id};
    dispatch(updateCustomer(customer))
    setTemp(!Temp);
  }
  const handleDeleteForm = () => {
    setTemp(!Temp);
    if(customerDetails !=='' ){
      dispatch(deleteCustomer(customerDetails))
    }else{
      return console.log('message')
    }
  }

 
  const handleLogOut = () => {
    dispatch(signOut())
  }
  

  useEffect(() => {
    dispatch(getCustomer())
  },[Temp])

  const deleteModal = () => {
    return <Modal id="deleteModal" handleSubmit={handleDeleteForm} title="Create User">
        <div>
           {
             customerDetails.length > 0 ? <div>No Data</div>: <div className='row'>
               <div className='col-sm-6'>Name : </div>
                <div className='col-sm-6'>{customerDetails.name}</div>
                <div className='col-sm-6'>Gender : </div>
                <div className='col-sm-6'>{customerDetails.gender}</div>
                <div className='col-sm-6'>Location : </div>
                <div className='col-sm-6'>{customerDetails.location}</div>
             </div>
           } 
      </div>
    </Modal> 
  }
  if(!auth.authenticate){
    return <Navigate to='/' />
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Manage <b>User</b></h2>
              </div>
              <div className="col-sm-6 text-right">
                <a data-toggle="modal" data-target="#exampleModal" className="btn btn-success text-white"><span>Add New Employee</span></a>
                <a  className="btn btn-danger text-white ml-3" onClick={()=>handleLogOut()}><span>LogOut</span></a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                customers.customers.length > 0 ? customers.customers.map((customer, index) => 
                  <tr key={index}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.location}</td>
                    <td>
                      <a href="#updateCustomerModal" onClick={()=>hanldeEditCustomer(customer)} className="edit m-2" data-toggle="modal"><i className="fa-solid fa-pen-to-square"></i></a>
                      <a href="#deleteModal" onClick={() => {setCustomerDetails(customer)}} className="delete m-2" data-toggle="modal"><i className="fa-solid fa-trash-can"></i></a>
                    </td>
                  </tr>
                ): <div>No Data</div>
              }
            </tbody>
          </table>
        </div>
      </div>
      <Modal id="exampleModal" handleSubmit={handleSubmitForm} title="Create User">
        <Input 
          value={name}
          id="name"
          name="Name"
          placeholder="Name"
          onChange = {(e)=> setName(e.target.value)}
        />
        <Input 
          value={email}
          id="email"
          name="email"
          placeholder="Email"
          onChange = {(e)=> setEmail(e.target.value)}
        />
        <select className="form-control mb-3" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="FeMale">FeMale</option>
        </select>
        <Input 
          value={phone}
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange = {(e)=> setPhone(e.target.value)}
        />
        <select className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Chennai">Chennai</option>
          <option value="Vellore">Vellore</option>
        </select>
      </Modal>
      <Modal id="updateCustomerModal" handleSubmit={handleEditForm} title="Create User">
        <Input 
          value={name}
          id="name"
          name="Name"
          placeholder="Name"
          onChange = {(e)=> setName(e.target.value)}
        />
        <Input 
          value={email}
          id="email"
          name="email"
          placeholder="Email"
          onChange = {(e)=> setEmail(e.target.value)}
        />
        <select className="form-control mb-3" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="FeMale">FeMale</option>
        </select>
        <Input 
          value={phone}
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange = {(e)=> setPhone(e.target.value)}
        />
        <select className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Chennai">Chennai</option>
          <option value="Vellore">Vellore</option>
        </select>
      </Modal>
      {deleteModal()}
    </div>
  )
}
